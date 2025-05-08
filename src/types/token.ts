import { Address } from "viem";

export const TokenStandard = {
  Native: "Native",
  ERC20: "ERC20",
  HypERC20: "HypERC20",
  SuperERC20: "SuperERC20",
} as const;

export type TokenStandard = (typeof TokenStandard)[keyof typeof TokenStandard];

export interface BaseToken {
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
}

export interface NativeToken extends BaseToken {
  chains: {
    chainId: number;
    standard: typeof TokenStandard.Native;
    address: Address;
  }[];
}

export interface ERC20Token extends BaseToken {
  chains: {
    chainId: number;
    standard: typeof TokenStandard.ERC20;
    address: Address;
  }[];
}

export interface HyperlaneToken extends BaseToken {
  chains: Array<
    {
      chainId: number;
      address: Address;
      remoteTokens?: Array<{
        chainId: number;
        address: Address;
      }>;
    } & (
      | {
          standard: typeof TokenStandard.ERC20;
          hypERC20Collateral: Address;
        }
      | {
          standard: typeof TokenStandard.HypERC20;
        }
    )
  >;
}

export interface SuperERC20Token extends BaseToken {
  chains: {
    chainId: number;
    standard: typeof TokenStandard.SuperERC20;
    address: Address;
  }[];
}

export type Token = NativeToken | ERC20Token | HyperlaneToken | SuperERC20Token;

export interface RemoteToken {
  chainId: number;
  address: Address;
}

export interface GeneratedToken {
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  standard: TokenStandard;
  chainId: number;
  address?: Address;
  hypERC20Collateral?: Address;
  remoteTokens?: RemoteToken[];
}
