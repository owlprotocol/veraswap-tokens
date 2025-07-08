import { HyperlaneToken } from "../../../../types/token";

export const ATH: HyperlaneToken = {
  symbol: "ATH",
  name: "Aethir Token",
  decimals: 18,
  logoURI:
    "https://coin-images.coingecko.com/coins/images/36179/large/logogram_circle_dark_green_vb_green_%281%29.png",
  chains: [
    {
      chainId: 1,
      standard: "ERC20",
      address: "0xbe0Ed4138121EcFC5c0E56B40517da27E6c5226B",
      hypERC20Collateral: "0x235E11459c8C21B2656484F8c6a7418242cfBde0",
    },
    {
      chainId: 1514,
      standard: "HypERC20",
      address: "0x0DA77D1f0C2392A6f83941CBacaCAdE4F537a52D",
    },
  ],
};
