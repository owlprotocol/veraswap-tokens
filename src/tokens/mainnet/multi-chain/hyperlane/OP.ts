import { HyperlaneToken } from "../../../../types/token";

export const OP: HyperlaneToken = {
  symbol: "OP",
  name: "Optimism",
  decimals: 18,
  logoURI:
    "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/OP/logo.svg",
  chains: [
    {
      chainId: 10,
      standard: "ERC20",
      address: "0x0Ea3C23A4dC198c289D5443ac302335aBc86E6b1",
      hypERC20Collateral: "0x4200000000000000000000000000000000000042",
    },
    {
      chainId: 5330,
      standard: "HypERC20",
      address: "0x4e128A1b613A9C9Ecf650FeE461c353612559fcf",
    },
  ],
};
