import { Token } from "../types/token";
import { nativeTokens } from "./mainnet/single-chain/native";
import { singleChainTokens } from "./mainnet/single-chain/erc20";
import { hyperlaneTokens } from "./mainnet/multi-chain/hyperlane";
import { testnetTokens as testTokens } from "./testnet";

export const mainnetTokens: Token[] = [
  ...nativeTokens,
  ...singleChainTokens,
  ...hyperlaneTokens,
];

export const testnetTokens: Token[] = [...testTokens];
