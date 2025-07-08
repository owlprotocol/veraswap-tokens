import { HyperlaneToken } from "../../../../types/token";

export const SUPR: HyperlaneToken = {
  symbol: "SUPR",
  name: "Superseed",
  decimals: 18,
  logoURI:
    "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/SUPR/logo.svg",
  chains: [
    {
      chainId: 8453,
      standard: "ERC20",
      address: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      hypERC20Collateral: "0x458BDDd0793fe4f70912535f172466a5473f2e77",
    },
    {
      chainId: 1,
      standard: "ERC20",
      address: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      hypERC20Collateral: "0xbc808c98beA0a097346273A9Fd7a5B231fc2d889",
    },
    {
      chainId: 57073,
      standard: "ERC20",
      address: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      hypERC20Collateral: "0x6cfDDfa3e0867A873675B80FDEBeB94e9262b5F0",
    },
    {
      chainId: 10,
      standard: "ERC20",
      address: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      hypERC20Collateral: "0xae1E04F18D1323d8EaC7Ba5b2c683c95DC3baC97",
    },
    {
      chainId: 5330,
      standard: "ERC20",
      address: "0xEe64bC3f4A58D638D0845b24e2f51534d01b6549",
      hypERC20Collateral: "0xA1863B4b02b7DCd7429F62C775816328D63020F4",
    },
  ],
};
