var ConvertLib = artifacts.require("./ConvertLib.sol");
var GiftCardsPool = artifacts.require("./GiftCardsPool.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, GiftCardsPool);
  deployer.deploy(GiftCardsPool);
};
