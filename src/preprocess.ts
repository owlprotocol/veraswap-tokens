import { writeFile, mkdir, readFile } from "node:fs/promises";
import { Token, TokenStandard, ERC20Token } from "@/types/token";
import { Address } from "viem";
import { groupBy, map } from "lodash-es";
import { mainnetTokens, testnetTokens } from "@/tokens";

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

async function fetch1inchTokens(): Promise<Token[]> {
  try {
    console.log("Fetching 1inch tokens...");
    const response = await fetch("https://tokens.1inch.eth.link/");
    if (!response.ok) {
      throw new Error(`Failed to fetch token list: ${response.statusText}`);
    }

    const data = (await response.json()) as ExternalTokenList;

    const groupedTokens = groupBy(data.tokens, "symbol");

    const tokens = map(
      groupedTokens,
      (tokens: ExternalToken[], symbol: string) => {
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
        } as ERC20Token;
      }
    );

    console.log(`Processed ${tokens.length} tokens from 1inch`);
    return tokens;
  } catch (error) {
    console.error("Error fetching 1inch tokens:", error);
    return [];
  }
}

async function processVirtualsTokens(): Promise<Token[]> {
  try {
    console.log("Processing virtuals tokens...");

    try {
      const fileContent = await readFile(
        "src/assets/data/unprocessed/virtuals-tokens.json",
        "utf-8"
      );
      const virtualsTokens = JSON.parse(fileContent) as VirtualsToken[];

      const tokens = virtualsTokens
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
        .map((token): ERC20Token => {
          const chainId = CHAIN_ID_MAP[token.chain];

          return {
            symbol: token.symbol.replace(/^\$/, ""), // remove dollar sign from symbol
            name: token.name,
            decimals: 18,
            logoURI: token.image.url,
            chains: [
              {
                chainId: chainId,
                standard: TokenStandard.ERC20,
                address: token.tokenAddress as Address,
              },
            ],
          };
        });

      console.log(`Processed ${tokens.length} virtuals tokens`);
      return tokens;
    } catch (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error processing virtuals tokens:", error);
    return [];
  }
}

async function processLocalTokens(): Promise<{
  mainnet: Token[];
  testnet: Token[];
}> {
  try {
    console.log("Processing local tokens...");

    const mainnetLocalTokens = mainnetTokens;
    const testnetLocalTokens = testnetTokens;

    console.log(`Processed ${mainnetLocalTokens.length} mainnet local tokens`);
    console.log(`Processed ${testnetLocalTokens.length} testnet local tokens`);

    return {
      mainnet: mainnetLocalTokens,
      testnet: testnetLocalTokens,
    };
  } catch (error) {
    console.error("Error processing local tokens:", error);
    return { mainnet: [], testnet: [] };
  }
}

async function preprocessTokens() {
  try {
    await mkdir("src/assets/data/processed", { recursive: true });
    await mkdir("src/assets/data/unprocessed", { recursive: true });

    const [oneinchTokens, virtualsTokens, localTokens] = await Promise.all([
      fetch1inchTokens(),
      processVirtualsTokens(),
      processLocalTokens(),
    ]);

    await Promise.all([
      writeFile(
        "src/assets/data/processed/1inch-tokens.json",
        JSON.stringify(oneinchTokens, null, 2)
      ),
      writeFile(
        "src/assets/data/processed/virtuals-tokens.json",
        JSON.stringify(virtualsTokens, null, 2)
      ),
      writeFile(
        "src/assets/data/processed/local-mainnet-tokens.json",
        JSON.stringify(localTokens.mainnet, null, 2)
      ),
      writeFile(
        "src/assets/data/processed/local-testnet-tokens.json",
        JSON.stringify(localTokens.testnet, null, 2)
      ),
    ]);

    console.log("✅ Preprocessing completed successfully!");
    console.log(`- 1inch tokens: ${oneinchTokens.length}`);
    console.log(`- Virtuals tokens: ${virtualsTokens.length}`);
    console.log(`- Local mainnet tokens: ${localTokens.mainnet.length}`);
    console.log(`- Local testnet tokens: ${localTokens.testnet.length}`);
  } catch (error) {
    console.error("Error during preprocessing:", error);
    process.exit(1);
  }
}

preprocessTokens();
