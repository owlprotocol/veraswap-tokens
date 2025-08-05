import { writeFile } from "node:fs/promises";
import { generateTokenList } from "@/utils/generate-token-list";
import { uniqBy, sortBy } from "lodash-es";
import { scoreTokens } from "@/utils/score-tokens";
import { filterTokens } from "@/utils/filter-tokens";
import { Token } from "@/types/token";
import { readFile } from "node:fs/promises";

async function loadProcessedTokens(filePath: string): Promise<Token[]> {
  try {
    const fileContent = await readFile(filePath, "utf-8");
    return JSON.parse(fileContent) as Token[];
  } catch (error) {
    console.error(`Error loading processed tokens from ${filePath}:`, error);
    return [];
  }
}

async function processAndWriteTokenList(
  inputTokens: Token[],
  outputFileName: string
) {
  // Filter tokens
  const filteredTokens = filterTokens(inputTokens);

  // Make unique
  const uniqueTokens = uniqBy(filteredTokens, (token) =>
    token.chains
      .map((chain) => `${chain.chainId}-${chain.address.toLowerCase()}`)
      .join("|")
  );

  // Generate token list and score
  const tokenList = generateTokenList(uniqueTokens);
  const scoredTokenList = scoreTokens(tokenList);

  // Sort by score and symbol
  const sortedTokenList = sortBy(scoredTokenList, [
    (token) => -(token.score ?? 0),
    "symbol",
  ]);

  await writeFile(outputFileName, JSON.stringify(sortedTokenList, null, 2));

  const tokenSummary = sortedTokenList.reduce((acc, token) => {
    if (!acc[token.symbol]) {
      acc[token.symbol] = {
        count: 0,
        chains: new Set<number>(),
        standards: new Set<string>(),
        score: token.score,
      };
    }
    acc[token.symbol].count++;
    acc[token.symbol].chains.add(token.chainId);
    acc[token.symbol].standards.add(token.standard);
    return acc;
  }, {} as Record<string, { count: number; chains: Set<number>; standards: Set<string>; score?: number }>);

  const summaryText = Object.entries(tokenSummary)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([symbol, { count, chains, standards, score }]) => {
      const chainList = Array.from(chains)
        .sort((a, b) => a - b)
        .join(", ");
      const standardList = Array.from(standards).join(", ");
      return `${symbol}:
  - Count: ${count}
  - Score: ${score ?? 0}
  - Standards: ${standardList}
  - Chains: [${chainList}]`;
    })
    .join("\n\n");

  const totalTokens = sortedTokenList.length;
  const totalUniqueTokens = Object.keys(tokenSummary).length;
  const summaryWithTotal = `Total tokens: ${totalTokens}
Total unique tokens: ${totalUniqueTokens}

${summaryText}`;

  const summaryFileName = outputFileName
    .replace(".json", ".txt")
    .replace("tokens.", "token-summary.");
  await writeFile(summaryFileName, summaryWithTotal);

  return sortedTokenList;
}

async function generateTokenFiles() {
  try {
    const [
      externalTokens,
      localMainnetTokens,
      localTestnetTokens,
      virtualsTokens,
    ] = await Promise.all([
      loadProcessedTokens("src/assets/data/processed/1inch-tokens.json"),
      loadProcessedTokens(
        "src/assets/data/processed/local-mainnet-tokens.json"
      ),
      loadProcessedTokens(
        "src/assets/data/processed/local-testnet-tokens.json"
      ),
      loadProcessedTokens("src/assets/data/processed/virtuals-tokens.json"),
    ]);

    const mainnetInputTokens = [...localMainnetTokens, ...externalTokens];
    await processAndWriteTokenList(mainnetInputTokens, "tokens.mainnet.json");

    await processAndWriteTokenList(localTestnetTokens, "tokens.testnet.json");

    console.log("Generating virtuals tokens...");
    const virtualsInputTokens = [...virtualsTokens, ...localMainnetTokens];

    const sortedVirtualsTokens = await processAndWriteTokenList(
      virtualsInputTokens,
      "tokens.virtuals.json"
    );

    console.log(`Generated ${sortedVirtualsTokens.length} virtuals tokens`);
  } catch (error) {
    console.error("Error generating token files:", error);
    process.exit(1);
  }
}

generateTokenFiles();
