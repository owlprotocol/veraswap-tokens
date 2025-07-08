import { HyperlaneToken } from "../../../../types/token";

export const UNDEAD: HyperlaneToken = {
  symbol: "UNDEAD",
  name: "Undead Blocks",
  decimals: 18,
  logoURI:
    "https://firebasestorage.googleapis.com/v0/b/owl-protocol.appspot.com/o/verabridge%2FUNDEAD_logo.jpg?alt=media",
  chains: [
    {
      chainId: 1,
      standard: "ERC20",
      address: "0x310C8F00b9dE3c31Ab95ea68feb6C877538f7947",
      hypERC20Collateral: "0xD971CDfFaC53d9DF56bad78E01711272C0570fb9",
    },
    {
      chainId: 43114,
      standard: "HypERC20",
      address: "0x5a3534720A4f29FA0dc53cE474Db88973A95f65C",
    },
  ],
};
