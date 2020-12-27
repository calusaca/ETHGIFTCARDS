const HDWalletProvider = require("@truffle/hdwallet-provider");

const infureURL = "https://rinkeby.infura.io/v3/0022a861256e4b47a69e9ed0b521c921";

 const infuraKey = "fj4jll3k.....";
//
 const fs = require('fs');
 const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  compilers: {
    solc: {
      version: "0.6.12",
    }
  },
  networks: {
   development: {
    host: "localhost",
    port: 8545,
    network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infureURL),
      network_id: 4
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/0022a861256e4b47a69e9ed0b521c921")
      },
      network_id: 3
    }
  }
};
