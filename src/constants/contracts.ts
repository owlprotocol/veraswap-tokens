import {
  sepolia,
  optimismSepolia,
  baseSepolia,
  arbitrum,
  base,
  bsc,
  optimism,
  polygon,
  ethereum as mainnet,
  avalanche,
} from "../chains/index.js";
import { zeroAddress } from "viem";

interface UniswapContracts {
  weth9: string;
  metaQuoter: string;
}

export const UNISWAP_CONTRACTS: Record<number, UniswapContracts | undefined> = {
  [sepolia.id]: {
    weth9: zeroAddress,
    metaQuoter: "0x67f8b206AA266cFBd2571BC037c2b75a497eFb56",
  },
  [optimismSepolia.id]: {
    weth9: "0x4200000000000000000000000000000000000006",
    metaQuoter: "0x18757a64C39abF30073A8789B738e214d402c862",
  },
  [baseSepolia.id]: {
    weth9: zeroAddress,
    metaQuoter: "0xB2E4AfE0A98648BF15FAa641Dbf39b4330ea64A4",
  },
  [arbitrum.id]: {
    weth9: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    metaQuoter: "0x35282e02E79c1B9a9e1868BD036b0f59F66E1dB5",
  },
  [base.id]: {
    weth9: "0x4200000000000000000000000000000000000006",
    metaQuoter: "0x5A3eab693473e7c9428B369166D99646c02BF15d",
  },
  [bsc.id]: {
    weth9: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    metaQuoter: "0xC4A74061393F6C8eAC741d7b58048Ab37C240be4",
  },
  [optimism.id]: {
    weth9: "0x4200000000000000000000000000000000000006",
    metaQuoter: "0x190c54d59411b824254333Cac660c5D542ad935f",
  },
  [polygon.id]: {
    weth9: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    metaQuoter: "0x3F66162deD98f81A0551FD18E0755c490ab5E68f",
  },
  [mainnet.id]: {
    weth9: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    metaQuoter: "0xA5Cd4AdC77b140443448841172dDD307D7c420D8",
  },
  [avalanche.id]: {
    weth9: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    metaQuoter: "0xFC1Fa23A71F590D63eE900a843ea9E3f046D26EA",
  },
} as const;
