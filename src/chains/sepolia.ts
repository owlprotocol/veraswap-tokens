import { sepolia as sepoliaChain } from "wagmi/chains";

import { ChainWithMetadata } from "./chainWithMetadata.js";
import { DRPC_API_KEY } from "../utils/env.js";

export const sepolia = {
  ...sepoliaChain,
  rpcUrls: {
    default: {
      http: [`https://lb.drpc.org/ogrpc?network=sepolia&dkey=${DRPC_API_KEY}`],
      webSocket: [
        `wss://lb.drpc.org/ogws?network=sepolia&dkey=${DRPC_API_KEY}`,
      ],
    },
  },
  custom: {
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
} satisfies ChainWithMetadata;
