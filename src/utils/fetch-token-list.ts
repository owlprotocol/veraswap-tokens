import { Token, TokenStandard, ERC20Token } from "../types/token";
import { Address } from "viem";
import { groupBy, map } from "lodash-es";

interface ExternalToken {
  address: string;
  chainId: number;
  decimals: number;
  symbol: string;
  name: string;
  logoURI?: string;
}

interface ExternalTokenList {
  tokens: ExternalToken[];
}

export async function fetchTokenList(url: string): Promise<Token[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch token list: ${response.statusText}`);
    }

    const data = (await response.json()) as ExternalTokenList;

    const groupedTokens = groupBy(data.tokens, "symbol");

    return map(groupedTokens, (tokens: ExternalToken[], symbol: string) => {
      const firstToken = tokens[0];
      return {
        symbol,
        name: firstToken.name,
        decimals: firstToken.decimals,
        logoURI: firstToken.logoURI,
        chains: tokens.map((token: ExternalToken) => ({
          chainId: token.chainId,
          standard: TokenStandard.ERC20,
          address: token.address as Address,
        })),
      };
    });
  } catch (error) {
    console.error(`Error fetching token list from ${url}:`, error);
    return [];
  }
}
