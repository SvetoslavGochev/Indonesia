const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const initialSupply = ethers.parseEther("1000000000"); // 1,000,000,000 GLC
  const minDelaySeconds = 3600; // 1 hour
  const votingDelayBlocks = 1;
  const votingPeriodBlocks = 20;
  const proposalThreshold = ethers.parseEther("100000"); // 100k GLC to propose
  const quorumFraction = 4; // 4%

  const TimelockController = await ethers.getContractFactory("TimelockController");
  const timelock = await TimelockController.deploy(minDelaySeconds, [], [], deployer.address);
  await timelock.waitForDeployment();

  const GlobalCoinVotes = await ethers.getContractFactory("GlobalCoinVotes");
  const token = await GlobalCoinVotes.deploy(deployer.address, await timelock.getAddress(), initialSupply);
  await token.waitForDeployment();

  const GlobalCoinGovernor = await ethers.getContractFactory("GlobalCoinGovernor");
  const governor = await GlobalCoinGovernor.deploy(
    await token.getAddress(),
    await timelock.getAddress(),
    votingDelayBlocks,
    votingPeriodBlocks,
    proposalThreshold,
    quorumFraction
  );
  await governor.waitForDeployment();

  const proposerRole = await timelock.PROPOSER_ROLE();
  const executorRole = await timelock.EXECUTOR_ROLE();
  const adminRole = await timelock.DEFAULT_ADMIN_ROLE();

  await (await timelock.grantRole(proposerRole, await governor.getAddress())).wait();
  await (await timelock.grantRole(executorRole, ethers.ZeroAddress)).wait();
  await (await timelock.revokeRole(adminRole, deployer.address)).wait();

  await (await token.transferOwnership(await timelock.getAddress())).wait();

  console.log("Deployer:", deployer.address);
  console.log("Token:", await token.getAddress());
  console.log("Timelock:", await timelock.getAddress());
  console.log("Governor:", await governor.getAddress());
  console.log("Ownership transferred to Timelock.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
