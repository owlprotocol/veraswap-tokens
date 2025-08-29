import { bsc as bscChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const bsc = {
  ...bscChain,
  rpcUrls: {
    default: {
      http: [`https://lb.drpc.org/ogrpc?network=bsc&dkey=${DRPC_API_KEY}`],
      webSocket: [`wss://lb.drpc.org/ogws?network=bsc&dkey=${DRPC_API_KEY}`],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/chains/bsc/logo.svg",
  },
} satisfies ChainWithMetadata;
