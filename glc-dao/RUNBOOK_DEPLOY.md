# GLC Deploy Runbook (Sepolia + Polygon Amoy)

This runbook gives exact steps for deployment and explorer verification.

## 1) Prerequisites

- Node.js 20+ recommended.
- A funded deployer wallet on target testnet.
- RPC endpoint for each target network.
- Explorer API keys for verification.

## 2) Environment setup

From the `glc-dao` folder:

1. Copy env template.
2. Fill private key and RPC/API values.

PowerShell commands:

- Copy-Item .env.example .env
- notepad .env

Required env values in `.env`:

- DEPLOYER_PRIVATE_KEY=
- SEPOLIA_RPC_URL=
- AMOY_RPC_URL=
- ETHERSCAN_API_KEY=
- POLYGONSCAN_API_KEY=

## 3) Install and compile

- npm install
- npm run compile

## 4) Deploy

### Sepolia

- npm run deploy:sepolia

### Polygon Amoy

- npm run deploy:amoy

After deploy, addresses are stored automatically in:

- deployments/sepolia.json
- deployments/amoy.json

Console also prints:

- Deployer
- Token
- Timelock
- Governor

## 5) Verify contracts on explorers

### Sepolia (Etherscan)

- npm run verify:sepolia

### Polygon Amoy (Polygonscan)

- npm run verify:amoy

The verify script reads constructor args from the matching deployment file and verifies:

1. TimelockController
2. GlobalCoinVotes
3. GlobalCoinGovernor

## 6) Post-deploy validation checklist

- Confirm `owner()` of token equals timelock address.
- Confirm governor has PROPOSER_ROLE on timelock.
- Confirm timelock EXECUTOR_ROLE includes zero address.
- Confirm deployer no longer has DEFAULT_ADMIN_ROLE on timelock.
- Confirm transfer fee defaults to 100 bps (1%).

## 7) Quick governance smoke test (optional)

Use local chain tests first:

- npm test

Then on testnet, create one proposal to change fee bps and execute it through queue + delay.

## 8) Common issues

- Invalid private key / no funds:
  - Check DEPLOYER_PRIVATE_KEY and native token balance.
- Verification fails with missing API key:
  - Check ETHERSCAN_API_KEY / POLYGONSCAN_API_KEY.
- "already verified":
  - Safe to ignore; script treats this as success.
- Hardhat Node warning on old Node version:
  - Upgrade Node to a supported version for stable behavior.
