// https://xhi613qufvya.usemoralis.com:2053/server


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://speedy-nodes-nyc.moralis.io/1eb0532931c1cd11103f3b54/eth/ropsten',
      accounts: ['b05580fa67b004e1ba084fddc249e0d331ee0571339ffbc2a24f2e8145560356']
    }
  }
}