pragma solidity ^0.6.12;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/GiftCardsPool.sol";

contract TestGiftCardsPool {

  function testInitialTotalBalanceUsingDeployedContract() public {
    GiftCardsPool GCP = GiftCardsPool(DeployedAddresses.GiftCardsPool());

    uint expected = 0;

    Assert.equal(GCP.getPoolTotal(), expected, "Initial total amount should be 0");
  }

  function testInitialAmountToBe0ForGiftCardNotGenerated() public {
    GiftCardsPool GCP = GiftCardsPool(DeployedAddresses.GiftCardsPool());

    uint expected = 0;

    Assert.equal(GCP.getGiftCardBalance(5), expected, "Gift Card amount should be 0");
  }

}
