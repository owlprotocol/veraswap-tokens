import { writeFile } from "node:fs/promises";
import { mainnetTokens, testnetTokens } from "./tokens";
import { generateTokenList } from "./utils/generate-token-list";
import { fetchTokenList } from "./utils/fetch-token-list";
import { uniqBy } from "lodash-es";

async function generateTokenFiles() {
  try {
    const externalTokens = await fetchTokenList(
      "https://tokens.1inch.eth.link/"
    );

    const allTokens = [...mainnetTokens, ...externalTokens];
    const uniqueTokens = uniqBy(allTokens, (token) =>
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

      const tokenSummary = tokenList.reduce((acc, token) => {
        if (!acc[token.symbol]) {
          acc[token.symbol] = {
            count: 0,
            chains: new Set<number>(),
            standards: new Set<string>(),
          };
        }
        acc[token.symbol].count++;
        acc[token.symbol].chains.add(token.chainId);
        acc[token.symbol].standards.add(token.standard);
        return acc;
      }, {} as Record<string, { count: number; chains: Set<number>; standards: Set<string> }>);

      const summaryText = Object.entries(tokenSummary)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([symbol, { count, chains, standards }]) => {
          const chainList = Array.from(chains)
            .sort((a, b) => a - b)
            .join(", ");
          const standardList = Array.from(standards).join(", ");
          return `${symbol}:
  - Count: ${count}
  - Standards: ${standardList}
  - Chains: [${chainList}]`;
        })
        .join("\n\n");

      const totalTokens = tokenList.length;
      const totalUniqueTokens = Object.keys(tokenSummary).length;
      const summaryWithTotal = `Total tokens: ${totalTokens}
Total unique tokens: ${totalUniqueTokens}

${summaryText}`;

      await Promise.all([
        writeFile(`tokens.${name}.json`, JSON.stringify(tokenList, null, 2)),
        writeFile(`token-summary.${name}.txt`, summaryWithTotal),
      ]);
    }
  } catch (error) {
    process.exit(1);
  }
}

generateTokenFiles();
