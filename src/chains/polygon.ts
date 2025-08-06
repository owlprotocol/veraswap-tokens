import { polygon as polygonChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const polygon = {
  ...polygonChain,
  rpcUrls: {
    default: {
      http: [`https://lb.drpc.org/ogrpc?network=polygon&dkey=${DRPC_API_KEY}`],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=polygon&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI: "https://icons.llamao.fi/icons/chains/rsz_polygon.jpg",
  },
} satisfies ChainWithMetadata;
