var ConvertLib = artifacts.require("./ConvertLib.sol");
var LendingPool = artifacts.require("./LendingPool.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, LendingPool);
  deployer.deploy(LendingPool);
};
