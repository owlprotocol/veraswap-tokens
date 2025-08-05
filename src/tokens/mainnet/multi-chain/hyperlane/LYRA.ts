import { HyperlaneToken } from "../../../../types/token";

export const LYRA: HyperlaneToken = {
  symbol: "LYRA",
  name: "Lyra by Virtuals",
  decimals: 18,
  logoURI:
    "https://s3.ap-southeast-1.amazonaws.com/virtualprotocolcdn/name_6c5dd2b00d.png",
  chains: [
    {
      chainId: 8453,
      address: "0x99956f143dcca77cddf4b4b2a0fa4d491703244d",
      standard: "ERC20",
      hypERC20Collateral: "0xa29936A8cff86D4aAd515C105dE508d1f860D6D6",
    },
    {
      chainId: 1514,
      address: "0xa4f5c615f72DDeB2220471694ffF1c0c3dE051e1",
      standard: "HypERC20",
    },
  ],
};
