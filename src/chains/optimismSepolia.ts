import { optimismSepolia as optimismSepoliaChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const optimismSepolia = {
  ...optimismSepoliaChain,
  rpcUrls: {
    default: {
      http: [
        `https://lb.drpc.org/ogrpc?network=optimism-sepolia&dkey=${DRPC_API_KEY}`,
      ],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=optimism-sepolia&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/optimism/logo.svg",
  },
} satisfies ChainWithMetadata;
