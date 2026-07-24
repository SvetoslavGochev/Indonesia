const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time, mine } = require("@nomicfoundation/hardhat-network-helpers");

describe("GlobalCoin DAO governance", function () {
  async function deployFixture() {
    const [owner, voter, recipient] = await ethers.getSigners();

    const initialSupply = ethers.parseEther("1000000000");
    const minDelay = 3600;
    const votingDelay = 1;
    const votingPeriod = 10;
    const proposalThreshold = ethers.parseEther("100000");
    const quorumFraction = 4;

    const TimelockController = await ethers.getContractFactory("TimelockController");
    const timelock = await TimelockController.deploy(minDelay, [], [], owner.address);

    const GlobalCoinVotes = await ethers.getContractFactory("GlobalCoinVotes");
    const token = await GlobalCoinVotes.deploy(owner.address, await timelock.getAddress(), initialSupply);

    const GlobalCoinGovernor = await ethers.getContractFactory("GlobalCoinGovernor");
    const governor = await GlobalCoinGovernor.deploy(
      await token.getAddress(),
      await timelock.getAddress(),
      votingDelay,
      votingPeriod,
      proposalThreshold,
      quorumFraction
    );

    const proposerRole = await timelock.PROPOSER_ROLE();
    const executorRole = await timelock.EXECUTOR_ROLE();
    const adminRole = await timelock.DEFAULT_ADMIN_ROLE();

    await timelock.grantRole(proposerRole, await governor.getAddress());
    await timelock.grantRole(executorRole, ethers.ZeroAddress);
    await timelock.revokeRole(adminRole, owner.address);

    await token.transfer(voter.address, ethers.parseEther("200000000"));

    await token.delegate(owner.address);
    await token.connect(voter).delegate(voter.address);

    await token.transferOwnership(await timelock.getAddress());

    return { owner, voter, recipient, token, governor, timelock, minDelay, votingDelay, votingPeriod };
  }

  it("applies transfer fee and sends it to treasury", async function () {
    const { voter, recipient, token, timelock } = await deployFixture();

    const amount = ethers.parseEther("1000");
    const expectedFee = ethers.parseEther("10"); // 1%

    const treasuryBefore = await token.balanceOf(await timelock.getAddress());
    await token.connect(voter).transfer(recipient.address, amount);

    expect(await token.balanceOf(recipient.address)).to.equal(amount - expectedFee);
    expect(await token.balanceOf(await timelock.getAddress())).to.equal(treasuryBefore + expectedFee);
    expect(await token.transferFeeBps()).to.equal(100);
  });

  it("skips fee when recipient is fee-exempt", async function () {
    const { voter, owner, token, timelock } = await deployFixture();

    const amount = ethers.parseEther("1000");
    const ownerBefore = await token.balanceOf(owner.address);
    const treasuryBefore = await token.balanceOf(await timelock.getAddress());

    // owner is fee-exempt by default
    await token.connect(voter).transfer(owner.address, amount);

    expect(await token.balanceOf(owner.address)).to.equal(ownerBefore + amount);
    expect(await token.balanceOf(await timelock.getAddress())).to.equal(treasuryBefore);
  });

  it("changes fee through governance proposal", async function () {
    const { owner, voter, token, governor, timelock, minDelay, votingDelay, votingPeriod } = await deployFixture();

    const newFeeBps = 200;
    const callData = token.interface.encodeFunctionData("setTransferFeeBps", [newFeeBps]);
    const description = "Raise transfer fee to 2%";

    const tx = await governor.propose([await token.getAddress()], [0], [callData], description);
    const receipt = await tx.wait();
    const proposalId = receipt.logs.find((log) => log.fragment?.name === "ProposalCreated").args.proposalId;

    await mine(votingDelay + 1);

    await governor.castVote(proposalId, 1);
    await governor.connect(voter).castVote(proposalId, 1);

    await mine(votingPeriod + 1);

    const descriptionHash = ethers.id(description);
    await governor.queue([await token.getAddress()], [0], [callData], descriptionHash);

    await time.increase(minDelay + 1);
    await mine(1);

    await governor.execute([await token.getAddress()], [0], [callData], descriptionHash);

    expect(await token.transferFeeBps()).to.equal(newFeeBps);
    expect(await token.owner()).to.equal(await timelock.getAddress());
  });

  it("allows proposer to cancel proposal before execution", async function () {
    const { token, governor } = await deployFixture();

    const callData = token.interface.encodeFunctionData("setTransferFeeBps", [150]);
    const description = "Temp fee change proposal";

    const tx = await governor.propose([await token.getAddress()], [0], [callData], description);
    const receipt = await tx.wait();
    const proposalId = receipt.logs.find((log) => log.fragment?.name === "ProposalCreated").args.proposalId;

    const descriptionHash = ethers.id(description);
    await governor.cancel([await token.getAddress()], [0], [callData], descriptionHash);

    expect(await governor.state(proposalId)).to.equal(2n); // Canceled
  });

  it("marks proposal as defeated when there is no voter participation", async function () {
    const { token, governor, votingDelay, votingPeriod } = await deployFixture();

    const callData = token.interface.encodeFunctionData("setTransferFeeBps", [300]);
    const description = "Increase fee to 3% with no votes";

    const tx = await governor.propose([await token.getAddress()], [0], [callData], description);
    const receipt = await tx.wait();
    const proposalId = receipt.logs.find((log) => log.fragment?.name === "ProposalCreated").args.proposalId;

    await mine(votingDelay + 1);
    await mine(votingPeriod + 1);

    expect(await governor.state(proposalId)).to.equal(3n); // Defeated
  });
});
