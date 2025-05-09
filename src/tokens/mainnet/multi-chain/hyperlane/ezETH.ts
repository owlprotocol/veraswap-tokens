import { HyperlaneToken } from "../../../../types/token";

export const ezETH: HyperlaneToken = {
  symbol: "ezETH",
  name: "Renzo Restaked ETH",
  decimals: 18,
  logoURI:
    "https://assets.coingecko.com/coins/images/34753/large/Ezeth_logo_circle.png",
  chains: [
    {
      chainId: 8453,
      standard: "ERC20",
      address: "0x2552516453368e42705D791F674b312b8b87CD9e",
      hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    },
    {
      chainId: 1,
      standard: "ERC20",
      address: "0xC59336D8edDa9722B4f1Ec104007191Ec16f7087",
      hypERC20Collateral: "0xC8140dA31E6bCa19b287cC35531c2212763C2059",
    },
    {
      chainId: 10,
      standard: "ERC20",
      address: "0xacEB607CdF59EB8022Cc0699eEF3eCF246d149e2",
      hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    },
    {
      chainId: 42161,
      standard: "ERC20",
      address: "0xB26bBfC6d1F469C821Ea25099017862e7368F4E8",
      hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    },
    {
      chainId: 56,
      standard: "ERC20",
      address: "0xE00C6185a5c19219F1FFeD213b4406a254968c26",
      hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    },
    {
      chainId: 130,
      standard: "ERC20",
      address: "0xFf0247f72b0d7ceD319D8457dD30622a2bed78B5",
      hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    },
  ],
};
