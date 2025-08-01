import { HyperlaneToken } from "../../../../types/token";

export const TIAN: HyperlaneToken = {
  symbol: "TIAN",
  name: "AskTianAI by Virtuals",
  decimals: 18,
  logoURI:
    "https://coin-images.coingecko.com/coins/images/55320/large/AskTian_logo_%28200px%29.png",
  chains: [
    {
      chainId: 8453,
      standard: "ERC20",
      address: "0x795abcb2a9901f6ec510e18d40de08b84628c354",
      hypERC20Collateral: "0x0a905B4670c9f1A08F45f941374895eE7257a0F8",
    },
    {
      chainId: 56,
      standard: "HypERC20",
      address: "0xEeCaBf21e847aFA53B9b77111cd4ee7a1A84E6fB",
    },
    {
      chainId: 10,
      standard: "HypERC20",
      address: "0xB1Bc80180E10C4EE095834ce5fA9794CF9501C2E",
    },
    {
      chainId: 1329,
      standard: "HypERC20",
      address: "0xE567662Dc68acE9F00BCcedfa9205D164399a1Bb",
    },
    {
      chainId: 42161,
      standard: "HypERC20",
      address: "0x3aeB2251F92D83cf60808C1E2a5E44a93F719921",
    },
  ],
};
