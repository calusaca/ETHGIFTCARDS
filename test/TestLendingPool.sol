pragma solidity ^0.6.12;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/LendingPool.sol";

contract TestLendingPool {

  function testInitialTotalBalanceUsingDeployedContract() public {
    LendingPool LP = LendingPool(DeployedAddresses.LendingPool());

    uint expected = 0;

    Assert.equal(LP.getPoolTotal(), expected, "Initial total amount should be 0");
  }

  function testInitialEnrolledStatusForLenders() public {
    LendingPool LP = LendingPool(DeployedAddresses.LendingPool());

    bool expectedEnrolled = false;

    Assert.equal(LP.isEnrolled(), expectedEnrolled, "Owner should have 10000 MetaCoin initially");
  }

}
