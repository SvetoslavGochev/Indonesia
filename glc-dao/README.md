# GLC DAO Minimal Governance Kit

This folder contains a minimal, production-oriented baseline for:

- `GlobalCoin` token with transfer fee routed to treasury.
- On-chain governance via OpenZeppelin `Governor`.
- Timelock-controlled execution for parameter changes.
- End-to-end governance test flow.

## Contents

- `contracts/GlobalCoinVotes.sol`
- `contracts/GlobalCoinGovernor.sol`
- `scripts/deploy.js`
- `test/GovernanceFlow.test.js`

## Why this architecture

- `ERC20Votes` enables token-based governance snapshots.
- `Governor + TimelockController` removes single-owner control over token params.
- Fee settings are bounded (`MAX_FEE_BPS = 5%`) and changed only by governance once ownership is transferred to timelock.

## Quick start

```bash
cd glc-dao
npm install
npm run compile
npm test
```

Copy env template first:

```bash
cp .env.example .env
```

## Local deployment

```bash
cd glc-dao
npx hardhat run scripts/deploy.js
```

## Testnet deployment

```bash
cd glc-dao
npm run deploy:sepolia
```

```bash
cd glc-dao
npm run deploy:amoy
```

Required env variables are in [glc-dao/.env.example](glc-dao/.env.example).

Deployment script does this automatically:

1. Deploys `TimelockController`.
2. Deploys `GlobalCoinVotes` with treasury set to timelock.
3. Deploys `GlobalCoinGovernor`.
4. Grants proposer role to governor.
5. Opens executor role to everyone (`address(0)`).
6. Revokes admin role from deployer.
7. Transfers token ownership to timelock.

## Important notes

- This is a strong baseline, but audit is still required before mainnet.
- Edge-cases included: fee exemption behavior, no-vote defeated proposal, proposer cancel flow.
- Consider anti-whale governance controls depending on token distribution.
