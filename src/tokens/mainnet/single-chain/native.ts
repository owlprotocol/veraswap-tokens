import { NativeToken } from "../../../types/token";
import { zeroAddress } from "viem";

export const nativeTokens: NativeToken[] = [
  {
    symbol: "ETH",
    name: "Ether",
    decimals: 18,
    chains: [
      {
        chainId: 1,
        standard: "Native",
        address: zeroAddress,
      },
      {
        chainId: 8453,
        standard: "Native",
        address: zeroAddress,
      },
      {
        chainId: 5330,
        standard: "Native",
        address: zeroAddress,
      },
      {
        chainId: 10,
        standard: "Native",
        address: zeroAddress,
      },
      {
        chainId: 42161,
        standard: "Native",
        address: zeroAddress,
      },
      {
        chainId: 59144,
        standard: "Native",
        address: zeroAddress,
      },
    ],
  },
];
