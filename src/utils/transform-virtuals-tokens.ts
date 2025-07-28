import { readFile } from "node:fs/promises";
import { GeneratedToken, TokenStandard } from "@/types/token";
import { Address } from "viem";

interface VirtualsToken {
  id: number;
  name: string;
  chain: string;
  symbol: string;
  lpAddress: string;
  description: string;
  tokenAddress: string;
  image: {
    url: string;
  };
}

const CHAIN_ID_MAP: Record<string, number> = {
  BASE: 8453,
  ETH: 1,
};

export async function loadVirtualsTokens(
  filePath: string
): Promise<VirtualsToken[]> {
  try {
    const fileContent = await readFile(filePath, "utf-8");
    return JSON.parse(fileContent) as VirtualsToken[];
  } catch (error) {
    console.error(`Error loading virtuals tokens from ${filePath}:`, error);
    throw error;
  }
}

export function transformVirtualsTokens(
  virtualsTokens: VirtualsToken[]
): GeneratedToken[] {
  return virtualsTokens
    .filter((token) => {
      const chainId = CHAIN_ID_MAP[token.chain];
      if (!chainId) {
        console.warn(
          `Skipping token ${token.symbol} on unsupported chain: ${token.chain}`
        );
        return false;
      }
      return true;
    })
    .map((token): GeneratedToken => {
      const chainId = CHAIN_ID_MAP[token.chain];

      return {
        symbol: token.symbol.replace(/^\$/, ""), // remove dollar sign from symbol
        name: token.name,
        decimals: 18,
        logoURI: token.image.url,
        standard: TokenStandard.ERC20,
        chainId: chainId,
        address: token.tokenAddress as Address,
      };
    });
}

export async function generateVirtualsTokenList(
  filePath: string
): Promise<GeneratedToken[]> {
  const virtualsTokens = await loadVirtualsTokens(filePath);
  return transformVirtualsTokens(virtualsTokens);
}
