import { HyperlaneToken } from "../../../../types/token";

export const USDT: HyperlaneToken = {
  symbol: "USDT",
  name: "Tether USD",
  decimals: 6,
  logoURI:
    "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/USDT/logo.svg",
  chains: [
    {
      chainId: 1,
      standard: "ERC20",
      address: "0xA7Db85E2925e3fec7C33A20d87CC895C948e62b3",
      hypERC20Collateral: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    {
      chainId: 5330,
      standard: "HypERC20",
      address: "0xc5068BB6803ADbe5600DE5189fe27A4dAcE31170",
    },
  ],
};
