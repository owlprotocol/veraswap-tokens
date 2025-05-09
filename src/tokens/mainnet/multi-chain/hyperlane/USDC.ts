import { HyperlaneToken } from "../../../../types/token";

export const USDC: HyperlaneToken = {
  symbol: "USDC",
  name: "USD Coin",
  decimals: 6,
  logoURI: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
  chains: [
    {
      chainId: 5330,
      standard: "ERC20",
      address: "0xc316c8252b5f2176d0135ebb0999e99296998f2e",
      hypERC20Collateral: "0xa7D6042eEf06E81168e640b5C41632eE5295227D",
    },
    {
      chainId: 8453,
      standard: "ERC20",
      address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      hypERC20Collateral: "0x955132016f9B6376B1392aA7BFF50538d21Ababc",
    },
    {
      chainId: 10,
      standard: "ERC20",
      address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
      hypERC20Collateral: "0x741B077c69FA219CEdb11364706a3880A792423e",
    },
  ],
};
