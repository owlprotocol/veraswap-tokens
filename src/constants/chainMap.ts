import {
  ethereum as mainnet,
  base,
  polygon,
  arbitrum,
  avalanche,
  optimism,
  bsc,
} from "../chains/index.js";

export const CHAIN_MAP = {
  1: mainnet,
  8453: base,
  137: polygon,
  42161: arbitrum,
  43114: avalanche,
  10: optimism,
  56: bsc,
} as const;
