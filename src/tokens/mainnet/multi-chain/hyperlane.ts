import { HyperlaneToken } from "../../../types/token";

export const hyperlaneTokens: HyperlaneToken[] = [
  {
    symbol: "cbBTC",
    name: "Coinbase Wrapped BTC",
    decimals: 8,
    logoURI:
      "https://assets.coingecko.com/coins/images/40143/standard/cbbtc.webp",
    chains: [
      {
        chainId: 8453,
        standard: "ERC20",
        address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
        hypERC20Collateral: "0x66477F84bd21697c7781fc3992b3163463e3B224",
        remoteTokens: [
          {
            chainId: 5330,
            address: "0x6f36dbd829de9b7e077db8a35b480d4329ceb331",
          },
        ],
      },
      {
        chainId: 1,
        standard: "ERC20",
        address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
        hypERC20Collateral: "0x7710d2FC9A2E0452b28a2cBf550429b579347199",
        remoteTokens: [
          {
            chainId: 5330,
            address: "0x6f36dbd829de9b7e077db8a35b480d4329ceb331",
          },
        ],
      },
      {
        chainId: 5330,
        standard: "ERC20",
        address: "0x6f36dbd829de9b7e077db8a35b480d4329ceb331",
        hypERC20Collateral: "0x0a78BC3CBBC79C4C6E5d4e5b2bbD042E58e93484",
        remoteTokens: [
          {
            chainId: 8453,
            address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
          },
          {
            chainId: 1,
            address: "0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf",
          },
        ],
      },
    ],
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    decimals: 6,
    logoURI: "https://assets.coingecko.com/coins/images/6319/standard/usdc.png",
    chains: [
      {
        chainId: 5330,
        standard: "ERC20",
        address: "0xc316c8252b5f2176d0135ebb0999e99296998f2e",
        hypERC20Collateral: "0xa7D6042eEf06E81168e640b5C41632eE5295227D",
      },
      {
        chainId: 8453,
        standard: "ERC20",
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        hypERC20Collateral: "0x955132016f9B6376B1392aA7BFF50538d21Ababc",
      },
      {
        chainId: 10,
        standard: "ERC20",
        address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
        hypERC20Collateral: "0x741B077c69FA219CEdb11364706a3880A792423e",
      },
    ],
  },
  {
    symbol: "OP",
    name: "Optimism",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/OP/logo.svg",
    chains: [
      {
        chainId: 10,
        standard: "ERC20",
        address: "0x0Ea3C23A4dC198c289D5443ac302335aBc86E6b1",
        hypERC20Collateral: "0x4200000000000000000000000000000000000042",
      },
      {
        chainId: 5330,
        standard: "HypERC20",
        address: "0x4e128A1b613A9C9Ecf650FeE461c353612559fcf",
      },
    ],
  },
  {
    symbol: "USDT",
    name: "Tether USD",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/USDT/logo.svg",
    chains: [
      {
        chainId: 1,
        standard: "ERC20",
        address: "0xA7Db85E2925e3fec7C33A20d87CC895C948e62b3",
        hypERC20Collateral: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      },
      {
        chainId: 5330,
        standard: "HypERC20",
        address: "0xc5068BB6803ADbe5600DE5189fe27A4dAcE31170",
      },
    ],
  },
  {
    symbol: "HYPER",
    name: "Hyperlane",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/HYPER/logo.svg",
    chains: [
      {
        chainId: 42161,
        standard: "HypERC20",
        address: "0xC9d23ED2ADB0f551369946BD377f8644cE1ca5c4",
      },
      {
        chainId: 8453,
        standard: "HypERC20",
        address: "0xC9d23ED2ADB0f551369946BD377f8644cE1ca5c4",
      },
      {
        chainId: 56,
        standard: "HypERC20",
        address: "0xC9d23ED2ADB0f551369946BD377f8644cE1ca5c4",
      },
      {
        chainId: 1,
        standard: "HypERC20",
        address: "0x93A2Db22B7c736B341C32Ff666307F4a9ED910F5",
      },
      {
        chainId: 10,
        standard: "HypERC20",
        address: "0x9923DB8d7FBAcC2E69E87fAd19b886C81cd74979",
      },
    ],
  },
  {
    symbol: "ezETH",
    name: "Renzo Restaked ETH",
    decimals: 18,
    logoURI:
      "https://assets.coingecko.com/coins/images/34753/large/Ezeth_logo_circle.png",
    chains: [
      {
        chainId: 8453,
        standard: "ERC20",
        address: "0x2552516453368e42705D791F674b312b8b87CD9e",
        hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      },
      {
        chainId: 1,
        standard: "ERC20",
        address: "0xC59336D8edDa9722B4f1Ec104007191Ec16f7087",
        hypERC20Collateral: "0xC8140dA31E6bCa19b287cC35531c2212763C2059",
      },
      {
        chainId: 10,
        standard: "ERC20",
        address: "0xacEB607CdF59EB8022Cc0699eEF3eCF246d149e2",
        hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      },
      {
        chainId: 42161,
        standard: "ERC20",
        address: "0xB26bBfC6d1F469C821Ea25099017862e7368F4E8",
        hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      },
      {
        chainId: 56,
        standard: "ERC20",
        address: "0xE00C6185a5c19219F1FFeD213b4406a254968c26",
        hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      },
      {
        chainId: 130,
        standard: "ERC20",
        address: "0xFf0247f72b0d7ceD319D8457dD30622a2bed78B5",
        hypERC20Collateral: "0x2416092f143378750bb29b79eD961ab195CcEea5",
      },
    ],
  },
  {
    symbol: "SUPR",
    name: "Superseed",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-registry/main/deployments/warp_routes/SUPR/logo.svg",
    chains: [
      {
        chainId: 8453,
        standard: "ERC20",
        address: "0x458BDDd0793fe4f70912535f172466a5473f2e77",
        hypERC20Collateral: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      },
      {
        chainId: 1,
        standard: "ERC20",
        address: "0xbc808c98beA0a097346273A9Fd7a5B231fc2d889",
        hypERC20Collateral: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      },
      {
        chainId: 57073,
        standard: "ERC20",
        address: "0x6cfDDfa3e0867A873675B80FDEBeB94e9262b5F0",
        hypERC20Collateral: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      },
      {
        chainId: 10,
        standard: "ERC20",
        address: "0xae1E04F18D1323d8EaC7Ba5b2c683c95DC3baC97",
        hypERC20Collateral: "0x17906b1Cd88aA8EfaEfC5e82891B52a22219BD45",
      },
      {
        chainId: 5330,
        standard: "ERC20",
        address: "0xA1863B4b02b7DCd7429F62C775816328D63020F4",
        hypERC20Collateral: "0xEe64bC3f4A58D638D0845b24e2f51534d01b6549",
      },
    ],
  },
];
