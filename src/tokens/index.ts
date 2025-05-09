import { Token } from "../types/token";
import { nativeTokens } from "./mainnet/single-chain/native";
import { singleChainTokens } from "./mainnet/single-chain/erc20";
import { testnetTokens as testTokens } from "./testnet";
import { hyperlaneTokens } from "./mainnet/multi-chain/hyperlane/index.js";

export const mainnetTokens: Token[] = [
  ...nativeTokens,
  ...singleChainTokens,
  ...hyperlaneTokens,
];

export const testnetTokens: Token[] = [...testTokens];
