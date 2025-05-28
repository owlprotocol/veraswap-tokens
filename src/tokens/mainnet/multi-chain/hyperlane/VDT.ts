import { HyperlaneToken } from "../../../../types/token";

export const VDT: HyperlaneToken = {
  symbol: "VDT",
  name: "Vendetta",
  decimals: 18,
  logoURI:
    "https://coin-images.coingecko.com/coins/images/35185/large/logo_200_blk.png",
  chains: [
    {
      chainId: 137,
      standard: "ERC20",
      address: "0x38A357A34ea7e9E41718593Bb624CC628698eDc8",
      hypERC20Collateral: "0x765Af38A6e8FDcB1EFEF8a3dd2213EFD3090B00F",
    },
    {
      chainId: 56,
      standard: "HypERC20",
      address: "0x9298F6AEfBd5BF339b6f6077b4a677E1e02CD232",
    },
  ],
};
