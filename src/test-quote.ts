import {
  createPublicClient,
  http,
  PublicClient,
  zeroAddress,
  type Address,
} from "viem";
import {
  mainnet,
  base,
  polygon,
  arbitrum,
  avalanche,
  optimism,
  bsc,
} from "viem/chains";
import { readFile } from "node:fs/promises";
import { UNISWAP_CONTRACTS } from "./constants/contracts";
import { CURRENCY_HOPS } from "./constants/hopCurrencies";
import { metaQuoteExactInputBest } from "./artifacts/metaQuoteExactInputBest";
import { Token } from "./types";

const CHAIN_MAP = {
  1: mainnet,
  8453: base,
  137: polygon,
  42161: arbitrum,
  43114: avalanche,
  10: optimism,
  56: bsc,
} as const;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Need to try with and without hop currencies because of gas limit errors
async function getQuote(
  client: PublicClient,
  metaQuoterAddress: Address,
  wethAddress: Address,
  tokenAddress: Address,
  hopCurrencies: Address[]
) {
  const args = {
    exactCurrency: wethAddress,
    variableCurrency: tokenAddress,
    hopCurrencies,
    exactAmount: BigInt("10000000000000000"),
    poolKeyOptions: [{ fee: 3000, tickSpacing: 60, hooks: zeroAddress }],
  };

  try {
    return await client.readContract({
      address: metaQuoterAddress,
      abi: [metaQuoteExactInputBest],
      functionName: "metaQuoteExactInputBest",
      args: [args],
    });
  } catch (error: any) {
    if (error.message?.includes("out of gas")) {
      console.log("Gas limit hit, trying without hop currencies");
      return await client.readContract({
        address: metaQuoterAddress,
        abi: [metaQuoteExactInputBest],
        functionName: "metaQuoteExactInputBest",
        args: [{ ...args, hopCurrencies: [] }],
      });
    }
    throw error;
  }
}

async function testQuote() {
  const tokensData = await readFile(
    "src/assets/data/processed/1inch-tokens.json",
    "utf-8"
  );
  const tokens: Token[] = JSON.parse(tokensData);

  for (const token of tokens) {
    for (const chain of token.chains) {
      if (chain.standard !== "ERC20") continue;

      const chainId = chain.chainId;
      const tokenAddress = chain.address as Address;

      const contracts = UNISWAP_CONTRACTS[chainId];
      if (!contracts) {
        console.log(
          `Skipping ${token.symbol} - no contracts for chain ${chainId}`
        );
        continue;
      }

      const metaQuoterAddress = contracts.metaQuoter as Address;
      const wethAddress = contracts.weth9 as Address;
      const hopCurrencies =
        CURRENCY_HOPS[chainId as keyof typeof CURRENCY_HOPS] || [];

      console.log(
        `\nTesting ${token.symbol} (${token.name}) on chain ${chainId}...`
      );

      try {
        const chainConfig = CHAIN_MAP[chainId as keyof typeof CHAIN_MAP];
        if (!chainConfig) {
          console.log(
            `Skipping ${token.symbol} - unsupported chain ${chainId}`
          );
          continue;
        }

        // avoid rate limiting
        await delay(1000);

        const client = createPublicClient({
          chain: chainConfig,
          // TODO: maybe use a more reliable RPC
          transport: http(),
        }) as PublicClient;

        let result;
        for (let attempt = 1; attempt <= 3; attempt++) {
          try {
            result = await getQuote(
              client,
              metaQuoterAddress,
              wethAddress,
              tokenAddress,
              hopCurrencies
            );
            break;
          } catch (error: any) {
            if (
              error.message?.includes("rate limit") ||
              error.message?.includes("too many requests")
            ) {
              if (attempt < 3) {
                console.log(`Rate limit hit, retrying ${attempt}/3...`);
                await delay(1000);
                continue;
              }
            }
            throw error;
          }
        }

        const [bestSingleSwap, bestMultihopSwap, bestSwapType] = result as any;
        const amount =
          bestSwapType === 1
            ? bestSingleSwap?.variableAmount
            : bestMultihopSwap?.variableAmount;

        if (amount) {
          console.log(`Quote: ${amount} ${token.symbol} on ${chainId}`);
        } else {
          console.log("No quote available");
        }
      } catch (error: any) {
        console.log(`Quote failed: ${error.message || error}`);
      }
    }
  }
}

testQuote();
