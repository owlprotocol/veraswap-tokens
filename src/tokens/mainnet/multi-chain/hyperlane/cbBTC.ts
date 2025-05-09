import { HyperlaneToken } from "../../../../types/token";

export const cbBTC: HyperlaneToken = {
  symbol: "cbBTC",
  name: "Coinbase Wrapped BTC",
  decimals: 8,
  logoURI:
    "https://assets.coingecko.com/coins/images/40143/standard/cbbtc.webp",
  chains: [
    {
      chainId: 8453,
      standard: "ERC20",
      address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
      hypERC20Collateral: "0x66477F84bd21697c7781fc3992b3163463e3B224",
      remoteTokens: [
        {
          chainId: 5330,
          address: "0x6f36dbd829de9b7e077db8a35b480d4329ceb331",
        },
      ],
    },
    {
      chainId: 1,
      standard: "ERC20",
      address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
      hypERC20Collateral: "0x7710d2FC9A2E0452b28a2cBf550429b579347199",
      remoteTokens: [
        {
          chainId: 5330,
          address: "0x6f36dbd829de9b7e077db8a35b480d4329ceb331",
        },
      ],
    },
    {
      chainId: 5330,
      standard: "ERC20",
      address: "0x6f36dbd829de9b7e077db8a35b480d4329ceb331",
      hypERC20Collateral: "0x0a78BC3CBBC79C4C6E5d4e5b2bbD042E58e93484",
      remoteTokens: [
        {
          chainId: 8453,
          address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
        },
        {
          chainId: 1,
          address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
        },
      ],
    },
  ],
};
