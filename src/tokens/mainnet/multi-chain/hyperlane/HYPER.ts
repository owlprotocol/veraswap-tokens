import { HyperlaneToken } from "../../../../types/token";

export const HYPER: HyperlaneToken = {
  symbol: "HYPER",
  name: "Hyperlane",
  decimals: 18,
  logoURI:
    "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/HYPER/logo.svg",
  chains: [
    {
      chainId: 42161,
      standard: "HypERC20",
      address: "0xC9d23ED2ADB0f551369946BD377f8644cE1ca5c4",
    },
    {
      chainId: 8453,
      standard: "HypERC20",
      address: "0xC9d23ED2ADB0f551369946BD377f8644cE1ca5c4",
    },
    {
      chainId: 56,
      standard: "HypERC20",
      address: "0xC9d23ED2ADB0f551369946BD377f8644cE1ca5c4",
    },
    {
      chainId: 1,
      standard: "HypERC20",
      address: "0x93A2Db22B7c736B341C32Ff666307F4a9ED910F5",
    },
    {
      chainId: 10,
      standard: "HypERC20",
      address: "0x9923DB8d7FBAcC2E69E87fAd19b886C81cd74979",
    },
  ],
};
