// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {ERC20Votes} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Nonces} from "@openzeppelin/contracts/utils/Nonces.sol";

contract GlobalCoinVotes is ERC20, ERC20Permit, ERC20Votes, Ownable {
    uint256 public constant MAX_FEE_BPS = 500; // 5%

    uint256 public transferFeeBps;
    address public feeRecipient;
    mapping(address => bool) public isFeeExempt;

    event TransferFeeUpdated(uint256 oldFeeBps, uint256 newFeeBps);
    event FeeRecipientUpdated(address indexed oldRecipient, address indexed newRecipient);
    event FeeExemptUpdated(address indexed account, bool isExempt);

    constructor(
        address initialOwner,
        address treasury,
        uint256 initialSupply
    ) ERC20("GlobalCoin", "GLC") ERC20Permit("GlobalCoin") Ownable(initialOwner) {
        require(treasury != address(0), "treasury=0");

        feeRecipient = treasury;
        transferFeeBps = 100; // default 1%

        isFeeExempt[initialOwner] = true;
        isFeeExempt[treasury] = true;

        _mint(initialOwner, initialSupply);
    }

    function setTransferFeeBps(uint256 newFeeBps) external onlyOwner {
        require(newFeeBps <= MAX_FEE_BPS, "fee too high");
        uint256 oldFee = transferFeeBps;
        transferFeeBps = newFeeBps;
        emit TransferFeeUpdated(oldFee, newFeeBps);
    }

    function setFeeRecipient(address newRecipient) external onlyOwner {
        require(newRecipient != address(0), "recipient=0");
        address oldRecipient = feeRecipient;
        feeRecipient = newRecipient;
        emit FeeRecipientUpdated(oldRecipient, newRecipient);
    }

    function setFeeExempt(address account, bool exempt) external onlyOwner {
        isFeeExempt[account] = exempt;
        emit FeeExemptUpdated(account, exempt);
    }

    function _update(address from, address to, uint256 value) internal override(ERC20, ERC20Votes) {
        bool shouldTakeFee =
            from != address(0) &&
            to != address(0) &&
            transferFeeBps > 0 &&
            !isFeeExempt[from] &&
            !isFeeExempt[to] &&
            feeRecipient != address(0);

        if (!shouldTakeFee) {
            super._update(from, to, value);
            return;
        }

        uint256 fee = (value * transferFeeBps) / 10_000;
        uint256 amountAfterFee = value - fee;

        if (fee > 0) {
            super._update(from, feeRecipient, fee);
        }
        super._update(from, to, amountAfterFee);
    }

    function nonces(address owner)
        public
        view
        override(ERC20Permit, Nonces)
        returns (uint256)
    {
        return super.nonces(owner);
    }

}
