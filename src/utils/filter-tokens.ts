import { Token } from "../types/token";

const EXCLUDED_EXACT = ["WTF"];
const EXCLUDED_PATTERNS = ["REALTOKEN"];
const EXCLUDED_ADDRESSES = [
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", // 1inch native token representation
].map((addr) => addr.toLowerCase());

export function filterTokens(tokens: Token[]): Token[] {
  return tokens
    .filter(
      ({ symbol }) =>
        !EXCLUDED_EXACT.includes(symbol) &&
        !EXCLUDED_PATTERNS.some((pattern) => symbol.includes(pattern))
    )
    .map(
      (token) =>
        ({
          ...token,
          chains: token.chains.filter(
            (chain) => !EXCLUDED_ADDRESSES.includes(chain.address.toLowerCase())
          ),
        } as Token)
    )
    .filter((token) => token.chains.length > 0);
}
