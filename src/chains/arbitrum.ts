import { arbitrum as arbitrumChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const arbitrum = {
  ...arbitrumChain,
  rpcUrls: {
    default: {
      http: [`https://lb.drpc.org/ogrpc?network=arbitrum&dkey=${DRPC_API_KEY}`],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=arbitrum&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/arbitrum/logo.svg",
  },
} satisfies ChainWithMetadata;
