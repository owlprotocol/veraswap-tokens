import { writeFile } from "node:fs/promises";
import { mainnetTokens, testnetTokens } from "./tokens";
import { generateTokenList } from "./utils/generate-token-list";
import { fetchTokenList } from "./utils/fetch-token-list";
import { uniqBy, sortBy } from "lodash-es";
import { scoreTokens } from "./utils/score-tokens";
import { filterTokens } from "./utils/filter-tokens";

async function generateTokenFiles() {
  try {
    const externalTokens = await fetchTokenList(
      "https://tokens.1inch.eth.link/"
    );

    const allTokens = [...mainnetTokens, ...externalTokens];

    const filteredTokens = filterTokens(allTokens);

    const uniqueTokens = uniqBy(filteredTokens, (token) =>
      token.chains
        .map((chain) => `${chain.chainId}-${chain.address.toLowerCase()}`)
        .join("|")
    );

    const networks = [
      { name: "mainnet", tokens: uniqueTokens },
      { name: "testnet", tokens: testnetTokens },
    ];

    for (const { name, tokens } of networks) {
      const tokenList = generateTokenList(tokens);
      const scoredTokenList = scoreTokens(tokenList);

      const sortedTokenList = sortBy(scoredTokenList, [
        (token) => -(token.score ?? 0),
        "symbol",
      ]);

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

      await Promise.all([
        writeFile(
          `tokens.${name}.json`,
          JSON.stringify(sortedTokenList, null, 2)
        ),
        writeFile(`token-summary.${name}.txt`, summaryWithTotal),
      ]);
    }
  } catch (error) {
    process.exit(1);
  }
}

generateTokenFiles();
