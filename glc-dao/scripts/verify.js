const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

async function verify(address, args) {
  try {
    await hre.run("verify:verify", {
      address,
      constructorArguments: args
    });
    console.log(`Verified: ${address}`);
  } catch (error) {
    const message = String(error?.message || "");
    if (message.toLowerCase().includes("already verified")) {
      console.log(`Already verified: ${address}`);
      return;
    }
    throw error;
  }
}

async function main() {
  const networkName = hre.network.name;
  const file = path.join(__dirname, "..", "deployments", `${networkName}.json`);

  if (!fs.existsSync(file)) {
    throw new Error(`Missing deployment file: ${file}. Run deploy first.`);
  }

  const deployment = JSON.parse(fs.readFileSync(file, "utf8"));

  const tokenAddress = deployment.contracts.token;
  const timelockAddress = deployment.contracts.timelock;
  const governorAddress = deployment.contracts.governor;

  const initialSupply = deployment.params.initialSupply;
  const minDelaySeconds = deployment.params.minDelaySeconds;
  const votingDelayBlocks = deployment.params.votingDelayBlocks;
  const votingPeriodBlocks = deployment.params.votingPeriodBlocks;
  const proposalThreshold = deployment.params.proposalThreshold;
  const quorumFraction = deployment.params.quorumFraction;

  await verify(timelockAddress, [
    minDelaySeconds,
    [],
    [],
    deployment.deployer
  ]);

  await verify(tokenAddress, [
    deployment.deployer,
    timelockAddress,
    initialSupply
  ]);

  await verify(governorAddress, [
    tokenAddress,
    timelockAddress,
    votingDelayBlocks,
    votingPeriodBlocks,
    proposalThreshold,
    quorumFraction
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
