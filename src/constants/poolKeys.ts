import { Address, zeroAddress } from "viem";

export interface PoolKeyOptions {
  fee: number;
  tickSpacing: number;
  hooks: Address;
}

export const DEFAULT_POOL_PARAMS = {
  FEE_100_TICK_1: {
    fee: 100,
    tickSpacing: 1,
    hooks: zeroAddress,
  },
  FEE_500_TICK_10: {
    fee: 500,
    tickSpacing: 10,
    hooks: zeroAddress,
  },
  FEE_3000_TICK_60: {
    fee: 3000,
    tickSpacing: 60,
    hooks: zeroAddress,
  },
  FEE_10_000_TICK_200: {
    fee: 10_000,
    tickSpacing: 200,
    hooks: zeroAddress,
  },
} satisfies Record<string, PoolKeyOptions>;
