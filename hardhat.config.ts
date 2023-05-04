import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {BigNumber} from "ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: "https://bsc-dataseed1.binance.org/",
        blockNumber: 26807341
      }
    }
  }
};

export default config;
