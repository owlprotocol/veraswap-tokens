import { Token } from "../types/token";

const EXCLUDED_EXACT = ["WTF"];
const EXCLUDED_PATTERNS = ["REALTOKEN"];

export function filterTokens(tokens: Token[]): Token[] {
  return tokens.filter(({ symbol }) => {
    const isExactExcluded = EXCLUDED_EXACT.includes(symbol);
    const matchesPattern = EXCLUDED_PATTERNS.some((pattern) =>
      symbol.includes(pattern)
    );

    return !isExactExcluded && !matchesPattern;
  });
}
