import { GeneratedToken } from "../types/token";

const TIER_1_SYMBOLS = ["ETH", "WETH", "USDC", "USDT", "WBTC"];

const TIER_2_SYMBOLS = [
  "DAI",
  "UNI",
  "LINK",
  "AAVE",
  "LDO",
  "MKR",
  "OP",
  "ARB",
];

const TIER_3_SYMBOLS = ["1INCH", "SUSHI"];

export function scoreTokens(tokens: GeneratedToken[]): GeneratedToken[] {
  return tokens.map((token) => ({
    ...token,
    score: TIER_1_SYMBOLS.includes(token.symbol)
      ? 3
      : TIER_2_SYMBOLS.includes(token.symbol)
      ? 2
      : TIER_3_SYMBOLS.includes(token.symbol)
      ? 1
      : 0,
  }));
}
