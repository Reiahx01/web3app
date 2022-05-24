// https://eth-goerli.alchemyapi.io/v2/bHTV_91ZNVCyzUyf3jPTZAEmIFwVkKak

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/bHTV_91ZNVCyzUyf3jPTZAEmIFwVkKak',
      accounts: ['adee8606ce660a5932ca9b9438354f21f73059b2f91858bd2042c3dab4571e57']
    }
  }
}