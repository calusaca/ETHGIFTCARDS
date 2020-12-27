pragma solidity ^0.6.12;

import './GiftCardsPool.sol';

/// @title Circuit Breaker Library
/// @author Carlos Sandi
/// @notice This library abstract the circuit breaker functionality to a library.
library CircuitBreakerLibrary {

  function stopContract(bool action) internal returns(bool) {
      return action;
    }

}

/// @title ETH Lending Pool for ETH Gift Cards sale
/// @author Carlos Sandi
/// @notice This contract will be used for storing ETH that will be used to sell ETH Gift Cards.
contract LendingPool {

    //
    // State variables
    //

    /* Keep balance for each ethereum lender */
    mapping (address => uint) private balances;

    /* Allow contract to be able to see if a user is enrolled.  */
    mapping (address => bool) public  enrolled;

    /* Contract owner */
    address public owner;

    /* Total amount deposited */
    uint private poolTotalAmount;

    /* GiftcardPool contract address */
    address payable addressGiftCardsPool;

    /* Circuit Breaker */
    bool private stopped = false;


    //
    // Events - publicize actions to external listeners
    //

    /* Show info about new address enrolled as lender */
    event LogEnrolled(address accountAddress);

    /* Show info about deposit made: accountAddress and amount */
    event LogDepositMade(address accountAddress, uint amount);

    /* Show info about withdrawal from Lender: an accountAddress, withdrawAmount and a newBalance */
    event LogWithdrawal(address accountAddress, uint withdrawAmount, uint newBalance);

    /* Show info about new Gift Card created: Gift Card Amount and new Card Id */
    event LogNewGiftCard(uint giftCardAmount, uint cardId);

    //
    // Modifiers
    //
    modifier onlyEnrolled() {
        require(enrolled[msg.sender], "Users should be enrolled before they can make deposits");
        _;
    }

    modifier enoughForWithdraw(uint _amount) {
        require (
            balances[msg.sender] <= _amount,
            "Not enough on account for withdrawal"
        );
        _;
    }

    modifier onlyOwner() {
    require(msg.sender == owner);
    _;
}

    modifier stopInEmergency { require(!stopped); _; }
    modifier onlyInEmergency { require(stopped); _; }


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
    // otherwise, the sender's money is transferred to contract
    fallback() external payable {
        revert();
    }

    function stopContract() public onlyOwner returns(bool) {
      stopped = CircuitBreakerLibrary.stopContract(true);
      return stopped;
    }

    function startContract() public onlyOwner returns(bool) {
      stopped = CircuitBreakerLibrary.stopContract(false);
      return stopped;
    }

    /// @notice Get balance
    /// @return The balance of the user
    function getBalance() public view returns (uint) {
        /* Get the balance of the sender of this transaction */
        return balances[msg.sender];
    }

    /// @notice Get pool total deposited amount
    /// @return The total eth deposited in the lending pool.
    function getPoolTotal() public view returns (uint) {
        return poolTotalAmount;
    }

    /// @notice Check if an account is enrolled as Lender
    /// @return True or false based on if the account is already enrolled as lender or not.
    function isEnrolled() public view returns (bool) {
       /* Check if the current sender wallet is enrolled as Lender */
       return enrolled[msg.sender];
    }


    /// @notice Enroll a user as a Lender
    /// @return The users enrolled status (true/ false)
    // Emit the appropriate event
    function enroll() public stopInEmergency returns (bool){
        enrolled[msg.sender] = true;
        emit LogEnrolled(msg.sender);
        return enrolled[msg.sender];
    }

    /// @notice Deposit ether into pool
    /// @return The balance of the user after the deposit is made
    // Users should be enrolled before they can make deposits
    function deposit() public payable stopInEmergency onlyEnrolled returns (uint) {
        /* Add the amount to the user's balance, call the event associated with a deposit,
          then return the balance of the user */
        balances[msg.sender] += msg.value;
        emit LogDepositMade(msg.sender, msg.value);
        poolTotalAmount = poolTotalAmount + msg.value;
        return balances[msg.sender];

    }

    /// @notice Withdraw deposited ether from liquidity pool
    /// @return The balance remaining for the user
    function withdraw()
        public
        returns (uint) {
        /* If the sender's balance is at least the amount they want to withdraw,
           Subtract the amount from the sender's balance, and try to send that amount of ether
           to the user attempting to withdraw.
           return the user's balance.*/
        uint withdrawAmount = balances[msg.sender];
        balances[msg.sender] -= withdrawAmount;
        msg.sender.transfer(withdrawAmount);
        poolTotalAmount = poolTotalAmount - withdrawAmount;
        emit LogWithdrawal(msg.sender, withdrawAmount, balances[msg.sender]);
        return balances[msg.sender];
    }

    /// @notice Create new Gift Card by transfering the amount of Eth requested to the GiftCard Pool contract.
    /// @return The card ID of the new created ETH Gift Card.
    function newGiftCard(address giftCardsPoolAddress, uint amount) external returns (uint) {
      interfaceGiftCardsPool _igcp = interfaceGiftCardsPool(giftCardsPoolAddress);
      address payable aigcp = payable(address(_igcp));
      poolTotalAmount = poolTotalAmount - amount;
      uint cardId = _igcp.newGiftCard{value: amount}(amount);
      emit LogNewGiftCard(amount, cardId);
      return cardId;
    }
}
