import { Token, GeneratedToken } from "../types/token";

export function generateTokenList(tokens: Token[]): GeneratedToken[] {
  return tokens.flatMap((token) => {
    return token.chains.map((chain) => {
      const baseToken: GeneratedToken = {
        symbol: token.symbol,
        name: token.name,
        decimals: token.decimals,
        logoURI: token.logoURI,
        standard: chain.standard,
        chainId: chain.chainId,
        address: chain.address,
      };
      if (chain.standard === "ERC20" && "hypERC20Collateral" in chain) {
        baseToken.hypERC20Collateral = chain.hypERC20Collateral;
      }

      if (
        chain.standard === "HypERC20" ||
        (chain.standard === "ERC20" && "hypERC20Collateral" in chain)
      ) {
        const remoteTokens =
          chain.remoteTokens ||
          token.chains
            .filter((c) => c.chainId !== chain.chainId && c.address)
            .map((c) => ({
              chainId: c.chainId,
              address: c.address,
            }));

        if (remoteTokens.length > 0) {
          baseToken.remoteTokens = remoteTokens;
        }
      }

      return baseToken;
    });
  });
}
