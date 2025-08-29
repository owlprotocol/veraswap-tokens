import { createPublicClient, http, Address } from "viem";
import { Token } from "../types";
import { CHAIN_MAP } from "@/constants/chainMap";

const TAX_ABI = [
  {
    name: "totalBuyTaxBasisPoints",
    outputs: [{ type: "uint256" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

async function hasSalesTax(token: Token): Promise<boolean> {
  for (const chain of token.chains) {
    if (chain.standard !== "ERC20") continue;

    const chainId = chain.chainId;
    const chainConfig = CHAIN_MAP[chainId as keyof typeof CHAIN_MAP];
    if (!chainConfig) continue;

    const client = createPublicClient({
      chain: chainConfig,
      transport: http(),
    });

    try {
      const buyTax = await client.readContract({
        address: chain.address as Address,
        abi: TAX_ABI,
        functionName: "totalBuyTaxBasisPoints",
      });

      if (Number(buyTax) > 0) {
        return true;
      }
    } catch {
      continue;
    }
  }

  return false;
}

export async function filterTaxTokens(tokens: Token[]): Promise<Token[]> {
  const BATCH_SIZE = 100;
  const cleanTokens: Token[] = [];

  for (let i = 0; i < tokens.length; i += BATCH_SIZE) {
    const batch = tokens.slice(i, i + BATCH_SIZE);

    const results = await Promise.allSettled(
      batch.map((token) => hasSalesTax(token))
    );

    const batchResults = batch.filter((_, index) => {
      const result = results[index];
      return result.status === "fulfilled" && result.value === false;
    });

    cleanTokens.push(...batchResults);
  }

  return cleanTokens;
}
