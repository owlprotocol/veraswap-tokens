import { baseSepolia as baseSepoliaChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const baseSepolia = {
  ...baseSepoliaChain,
  rpcUrls: {
    default: {
      http: [
        `https://lb.drpc.org/ogrpc?network=base-sepolia&dkey=${DRPC_API_KEY}`,
      ],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=base-sepolia&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/base/logo.svg",
  },
} satisfies ChainWithMetadata;
