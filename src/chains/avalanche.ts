import { avalanche as avalancheChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const avalanche = {
  ...avalancheChain,
  rpcUrls: {
    default: {
      http: [
        `https://lb.drpc.org/ogrpc?network=avalanche&dkey=${DRPC_API_KEY}`,
      ],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=avalanche&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/avalanche/logo.svg",
  },
} satisfies ChainWithMetadata;
