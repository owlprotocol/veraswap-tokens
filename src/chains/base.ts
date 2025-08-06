import { base as baseChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const base = {
  ...baseChain,
  rpcUrls: {
    default: {
      http: [`https://lb.drpc.org/ogrpc?network=base&dkey=${DRPC_API_KEY}`],
      webSocket: [`wss://lb.drpc.org/ogws?network=base&dkey=${DRPC_API_KEY}`],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/base/logo.svg",
  },
} satisfies ChainWithMetadata;
