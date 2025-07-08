import { ERC20Token } from "../../../types/token";

export const singleChainTokens: ERC20Token[] = [
  {
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
    chains: [
      {
        chainId: 1,
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        standard: "ERC20",
      },
      {
        chainId: 10,
        address: "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
        standard: "ERC20",
      },
    ],
  },
  {
    symbol: "WBTC",
    name: "Wrapped BTC",
    decimals: 8,
    logoURI:
      "https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png",
    chains: [
      {
        chainId: 56,
        address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
        standard: "ERC20",
      },
      {
        chainId: 42161,
        address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
        standard: "ERC20",
      },
      {
        chainId: 137,
        address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
        standard: "ERC20",
      },
    ],
  },
  {
    symbol: "CELO",
    name: "Celo",
    decimals: 18,
    logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png",
    chains: [
      {
        chainId: 42220,
        standard: "ERC20",
        address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
      },
    ],
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
    chains: [
      {
        chainId: 1,
        standard: "ERC20",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
      {
        chainId: 42161,
        standard: "ERC20",
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      },
      {
        chainId: 480,
        standard: "ERC20",
        address: "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1",
      },
      {
        chainId: 324,
        standard: "ERC20",
        address: "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4",
      },
      {
        chainId: 137,
        standard: "ERC20",
        address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
      },
      {
        chainId: 42220,
        standard: "ERC20",
        address: "0xceba9300f2b948710d2653dd7b07f33a8b32118c",
      },
      {
        chainId: 43114,
        standard: "ERC20",
        address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      },
      {
        chainId: 7777777,
        standard: "ERC20",
        address: "0xCccCCccc7021b32EBb4e8C08314bD62F7c653EC4",
      },
    ],
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 18,
    logoURI: "https://assets.coingecko.com/coins/images/6319/large/usdc.png",
    chains: [
      {
        chainId: 56,
        standard: "ERC20",
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      },
    ],
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    chains: [
      {
        chainId: 56,
        standard: "ERC20",
        address: "0x55d398326f99059fF775485246999027B3197955",
      },
      {
        chainId: 42161,
        standard: "ERC20",
        address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      },
      {
        chainId: 10,
        standard: "ERC20",
        address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      },
      {
        chainId: 137,
        standard: "ERC20",
        address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      },
      {
        chainId: 43114,
        standard: "ERC20",
        address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      },
    ],
  },
];
