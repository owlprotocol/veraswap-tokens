import {
  createPublicClient,
  http,
  zeroAddress,
  parseEther,
  type Address,
} from "viem";
import {
  ethereum as mainnet,
  base,
  polygon,
  arbitrum,
  avalanche,
  optimism,
  bsc,
} from "../chains/index.js";
import { metaQuoteExactInputBest } from "../artifacts/metaQuoteExactInputBest";
import { UNISWAP_CONTRACTS } from "../constants/contracts";
import { CURRENCY_HOPS } from "../constants/hopCurrencies";
import { Token } from "../types";

const CHAIN_MAP = {
  1: mainnet,
  8453: base,
  137: polygon,
  42161: arbitrum,
  43114: avalanche,
  10: optimism,
  56: bsc,
} as const;

async function canQuoteToken(token: Token): Promise<boolean> {
  for (const chain of token.chains) {
    // add non-erc20/native tokens
    if (!["ERC20", "Native"].includes(chain.standard)) {
      return true;
    }

    const chainId = chain.chainId;
    const contracts = UNISWAP_CONTRACTS[chainId];
    const chainConfig = CHAIN_MAP[chainId as keyof typeof CHAIN_MAP];

    if (!contracts || !chainConfig) continue;

    const client = createPublicClient({
      chain: chainConfig,
      transport: http(),
    });

    const args = {
      exactCurrency: contracts.weth9 as Address,
      variableCurrency: chain.address as Address,
      exactAmount: parseEther("0.01"),
      poolKeyOptions: [{ fee: 3000, tickSpacing: 60, hooks: zeroAddress }],
    };

    const hopCurrencies =
      CURRENCY_HOPS[chainId as keyof typeof CURRENCY_HOPS] || [];

    try {
      const result = await client.readContract({
        address: contracts.metaQuoter as Address,
        abi: [metaQuoteExactInputBest],
        functionName: "metaQuoteExactInputBest",
        args: [{ ...args, hopCurrencies }],
      });

      const [bestSingleSwap, bestMultihopSwap, bestSwapType] = result as any;
      if (
        bestSwapType === 1
          ? bestSingleSwap?.variableAmount
          : bestMultihopSwap?.variableAmount
      ) {
        return true;
      }
    } catch {}
  }

  return false;
}

export async function getSuccessfulQuotes(tokens: Token[]): Promise<Token[]> {
  const BATCH_SIZE = 100;
  const quotableTokens: Token[] = [];

  for (let i = 0; i < tokens.length; i += BATCH_SIZE) {
    const batch = tokens.slice(i, i + BATCH_SIZE);

    const results = await Promise.allSettled(
      batch.map((token) => canQuoteToken(token))
    );

    const batchResults = batch.filter((_, index) => {
      const result = results[index];
      return result.status === "fulfilled" && result.value === true;
    });

    quotableTokens.push(...batchResults);
  }

  return quotableTokens;
}
