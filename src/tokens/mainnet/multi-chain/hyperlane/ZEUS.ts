import { HyperlaneToken } from "../../../../types/token";

export const ZEUS: HyperlaneToken = {
  symbol: "ZEUS",
  name: "Pepes Dog",
  decimals: 9,
  logoURI:
    "https://coin-images.coingecko.com/coins/images/56021/large/Pepes_Dog.jpg",
  chains: [
    {
      chainId: 1,
      standard: "ERC20",
      address: "0x0f7dC5D02CC1E1f5Ee47854d534D332A1081cCC8",
      hypERC20Collateral: "0x1731Fe5aED11f397C88aC2551384aF8E346Fc699",
    },
    {
      chainId: 43114,
      standard: "HypERC20",
      address: "0xC8C34b52e1F7AE506102e2fD72304422db524D41",
    },
    {
      chainId: 56,
      standard: "HypERC20",
      address: "0x87FbC4FEDe42Ea24B74f5f1A663d088De8Bd43d9",
    },
  ],
};
