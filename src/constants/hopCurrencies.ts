import { Address, zeroAddress } from "viem";
import {
  bsc,
  base,
  polygon,
  ethereum as mainnet,
  arbitrum,
  avalanche,
  optimism,
} from "../chains/index.js";

export const CURRENCY_HOPS = {
  [bsc.id]: [
    "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", // USDC
    "0x55d398326f99059fF775485246999027B3197955", // USDT
    zeroAddress,
  ],
  [base.id]: [
    "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913", // USDC
    "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b", // Virtuals
    zeroAddress,
  ],
  [polygon.id]: [
    "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359", // USDC
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", // USDT
    zeroAddress,
  ],
  [mainnet.id]: [
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
    zeroAddress,
  ],
  [arbitrum.id]: [
    "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", // USDC
    "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", // USDT
    zeroAddress,
  ],
  [avalanche.id]: [
    "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", // USDC
    "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", // USDT
    zeroAddress,
  ],
  [optimism.id]: [
    "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85", // USDC
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58", // USDT
    zeroAddress,
  ],
} as const satisfies Record<number, Address[]>;
