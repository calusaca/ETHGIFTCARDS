var LendingPool = artifacts.require("./LendingPool.sol");

contract('LendingPool', function(accounts) {
  it("should be not enrolled for new address", function() {
    return LendingPool.deployed().then(function(instance) {
      return instance.isEnrolled.call();
    }).then(function(enrolled) {
      assert.equal(enrolled.valueOf(), false, "Enrolled should be false");
    });
  });
  it("should be true for enrolled after enrolled an address", function() {
    return LendingPool.deployed().then(function(instance) {
      return instance.enroll.call();
    }).then(function(enrolled) {
      assert.equal(enrolled.valueOf(), true, "Enrolled should be true");
    });
  });
  it("should be 0 for total pool amount starting the contract", function() {
    return LendingPool.deployed().then(function(instance) {
      return instance.getPoolTotal.call();
    }).then(function(poolTotal) {
      assert.equal(poolTotal.valueOf(), 0, "Pool total should be 0");
    });
  });
});
