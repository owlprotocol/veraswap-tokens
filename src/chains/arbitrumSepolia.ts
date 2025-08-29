import { arbitrumSepolia as arbitrumSepoliaChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const arbitrumSepolia = {
  ...arbitrumSepoliaChain,
  rpcUrls: {
    default: {
      http: [
        `https://lb.drpc.org/ogrpc?network=arbitrum-sepolia&dkey=${DRPC_API_KEY}`,
      ],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=arbitrum-sepolia&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/arbitrum/logo.svg",
  },
} satisfies ChainWithMetadata;
