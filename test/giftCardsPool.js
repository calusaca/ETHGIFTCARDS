var GiftCardsPool = artifacts.require("./GiftCardsPool.sol");

contract('GiftCardsPool', function(accounts) {
  it("should be 0 for giftcard id that not exist", function() {
    return GiftCardsPool.deployed().then(function(instance) {
      return instance.getGiftCardBalance.call(5);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 0, "Balance for card id that doesnt exist should be 0");
    });
  });
  it("should be 0 for total pool amount starting the contract", function() {
    return GiftCardsPool.deployed().then(function(instance) {
      return instance.getPoolTotal.call();
    }).then(function(poolTotal) {
      assert.equal(poolTotal.valueOf(), 0, "Pool total should be 0");
    });
  });
});
