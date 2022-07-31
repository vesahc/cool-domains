require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const { API_URL, PRIVATE_KET } = process.env;

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: API_URL,
      accounts: ['0x${PRIVATE_KEY}']
    }
  },
}
