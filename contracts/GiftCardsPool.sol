pragma solidity ^0.6.12;

interface interfaceGiftCardsPool {
  function getGiftCardBalance(uint cardId) external view returns (uint);
  function getPoolTotal() external view returns (uint);
  function newGiftCard(uint amount) external payable returns (uint);
  function redeem(uint cardId) external returns (uint);
}

/// @title Sold Gift Cards Pool
/// @author Carlos Sandi
/// @notice This contract will be used for storing and redeem purchased Eth Gift Cards.
contract GiftCardsPool {

    //
    // State variables
    //

    /* Keep balance for each gift card sold */
    mapping (uint => uint) private giftCards;

    /* Contract owner */
    address public owner;

    /* Total amount deposited */
    uint private poolTotalAmount;

    /* Variable used to create non repeated gift cards id */
    uint private _currentCardId;

    //
    // Events - publicize actions to external listeners
    //

    /* Show info about redeemed ETH Gift Card */
    event LogRedeemed(address accountAddress, uint cardId, uint amount);

    /* Show info about new ETH Gift Card Created */
    event LogNewGiftCard(uint amount, uint cardId);

    modifier enoughForRedeem(uint _cardId) {
        require (
            giftCards[_cardId] <= poolTotalAmount,
            "Not enough on account for withdrawal"
        );
        _;
    }

    //
    // Functions
    //

    constructor() public {
        /* Set the owner to the creator of this contract */
        owner = msg.sender;
    }

    // Fallback function - Called if other functions don't match call or
    // sent ether without data
    // Typically, called when invalid data is sent
    // Added so ether sent to this contract is reverted if the contract fails
    // // otherwise, the sender's money is transferred to contract
    fallback() external payable {
         revert();
    }

    /// @notice Get balance for a gift card
    /// @return The balance for a gift card
    function getGiftCardBalance(uint cardId) public view returns (uint) {
        /* Get the balance of the gift card id */
        return giftCards[cardId];
    }

    /// @notice Get pool total deposited amount
    /// @return The total eth deposited in the lending pool.
    function getPoolTotal() public view returns (uint) {
        /* Get the balance of the sender of this transaction */
        return poolTotalAmount;
    }

    /// @notice When a new ETH Gift Card is created, ether is transfered into Gift Card Pool so it's available when user wants to redeem it.
    /// @return id of the newly created ETH Gift Card created.
    function newGiftCard(uint amount) public payable returns (uint) {
        _currentCardId += 1;
        giftCards[_currentCardId] += amount;
        emit LogNewGiftCard(amount, _currentCardId);
        poolTotalAmount = poolTotalAmount + amount;
        return _currentCardId;

    }

    /// @notice Withdraw deposited ether from ETH Gift Card Contract based on the amount of ETH specified for the ETH Gift Card that is been redeemed.
    /// @return The amount of ETH that was transfered.
    // Emit the appropriate event
    function redeem(uint cardId)
        public
        enoughForRedeem(cardId)
        returns (uint) {
          uint withdrawAmount = giftCards[cardId];
          giftCards[cardId] -= withdrawAmount;
          msg.sender.transfer(withdrawAmount);
          poolTotalAmount = poolTotalAmount - withdrawAmount;
          emit LogRedeemed(msg.sender, cardId, withdrawAmount);
          return withdrawAmount;
    }
}
