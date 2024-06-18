import {
  ChainId,
  // Currency,
  // Ether,
  NativeCurrency,
  Token
} from '@vnaysn/jediswap-sdk-core';

// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.GOERLI,
];

export const V2_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.GOERLI
];

export const HAS_L1_FEE = [
  // ChainId.OPTIMISM,
  // ChainId.OPTIMISM_GOERLI,
  // ChainId.OPTIMISM_SEPOLIA,
  // ChainId.ARBITRUM_ONE,
  // ChainId.ARBITRUM_GOERLI,
  // ChainId.ARBITRUM_SEPOLIA,
  // ChainId.BASE,
  // ChainId.BASE_GOERLI,
  // ChainId.BLAST,
  // ChainId.ZORA,
];

export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  // ChainId.OPTIMISM,
  // ChainId.ARBITRUM_ONE,
  // ChainId.POLYGON,
  // ChainId.POLYGON_MUMBAI,
];

export const ID_TO_CHAIN_ID = (id: string): ChainId => {
  switch (id) {
    case '0x534e5f4d41494e':
      return ChainId.MAINNET;
    case '0x534e5f5345504f4c4941':
      return ChainId.GOERLI;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = 'mainnet',
  GOERLI = 'goerli',
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVALANCHE = 'AVAX',
}

export const NATIVE_NAMES_BY_ID: { [chainId: string]: string[] } = {
  [ChainId.MAINNET]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.GOERLI]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
};

export const NATIVE_CURRENCY: { [chainId: string]: NativeCurrencyName } = {
  [ChainId.MAINNET]: NativeCurrencyName.ETHER,
  [ChainId.GOERLI]: NativeCurrencyName.ETHER,
  // [ChainId.SEPOLIA]: NativeCurrencyName.ETHER,
  // [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
  // [ChainId.OPTIMISM_GOERLI]: NativeCurrencyName.ETHER,
  // [ChainId.OPTIMISM_SEPOLIA]: NativeCurrencyName.ETHER,
  // [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
  // [ChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
  // [ChainId.ARBITRUM_SEPOLIA]: NativeCurrencyName.ETHER,
  // [ChainId.POLYGON]: NativeCurrencyName.MATIC,
  // [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
  // [ChainId.CELO]: NativeCurrencyName.CELO,
  // [ChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
  // [ChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
  // [ChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
  // [ChainId.BNB]: NativeCurrencyName.BNB,
  // [ChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE,
  // [ChainId.BASE]: NativeCurrencyName.ETHER,
  // [ChainId.BLAST]: NativeCurrencyName.ETHER,
  // [ChainId.ZORA]: NativeCurrencyName.ETHER,
  // [ChainId.ZKSYNC]: NativeCurrencyName.ETHER,
};

export const ID_TO_NETWORK_NAME = (id: string): ChainName => {
  switch (id) {
    case '0x534e5f4d41494e':
      return ChainName.MAINNET;
      case '0x534e5f5345504f4c4941':
        return ChainName.GOERLI;
    // case 11155111:
    //   return ChainName.SEPOLIA;
    // case 56:
    //   return ChainName.BNB;
    // case 10:
    //   return ChainName.OPTIMISM;
    // case 420:
    //   return ChainName.OPTIMISM_GOERLI;
    // case 11155420:
    //   return ChainName.OPTIMISM_SEPOLIA;
    // case 42161:
    //   return ChainName.ARBITRUM_ONE;
    // case 421613:
    //   return ChainName.ARBITRUM_GOERLI;
    // case 421614:
    //   return ChainName.ARBITRUM_SEPOLIA;
    // case 137:
    //   return ChainName.POLYGON;
    // case 80001:
    //   return ChainName.POLYGON_MUMBAI;
    // case 42220:
    //   return ChainName.CELO;
    // case 44787:
    //   return ChainName.CELO_ALFAJORES;
    // case 100:
    //   return ChainName.GNOSIS;
    // case 1284:
    //   return ChainName.MOONBEAM;
    // case 43114:
    //   return ChainName.AVALANCHE;
    // case 8453:
    //   return ChainName.BASE;
    // case 84531:
    //   return ChainName.BASE_GOERLI;
    // case 81457:
    //   return ChainName.BLAST;
    // case 7777777:
    //   return ChainName.ZORA;
    // case 324:
    //   return ChainName.ZKSYNC;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) =>
  c.toString()
) as string[];

export const ID_TO_PROVIDER = (id: ChainId): string => {
  switch (id) {
    case ChainId.MAINNET:
      return process.env.JSON_RPC_PROVIDER!;
    case ChainId.GOERLI:
      return process.env.JSON_RPC_PROVIDER_GORLI!;
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.GOERLI]: new Token(
    ChainId.GOERLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH',
    'Wrapped Ether'
  ),
 
};

// function isMatic(
//   chainId: string
// ): chainId is ChainId.POLYGON | ChainId.POLYGON_MUMBAI {
//   return chainId === ChainId.POLYGON_MUMBAI || chainId === ChainId.POLYGON;
// }

// class MaticNativeCurrency extends NativeCurrency {
//   equals(other: Currency): boolean {
//     return other.isNative && other.chainId === this.chainId;
//   }

//   get wrapped(): Token {
//     if (!isMatic(this.chainId)) throw new Error('Not matic');
//     const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
//     if (nativeCurrency) {
//       return nativeCurrency;
//     }
//     throw new Error(`Does not support this chain ${this.chainId}`);
//   }

//   public constructor(chainId: string) {
//     if (!isMatic(chainId)) throw new Error('Not matic');
//     super(chainId, 18, 'MATIC', 'Polygon Matic');
//   }
// }

// function isCelo(
//   chainId: string
// ): chainId is ChainId.CELO | ChainId.CELO_ALFAJORES {
//   return chainId === ChainId.CELO_ALFAJORES || chainId === ChainId.CELO;
// }

// class CeloNativeCurrency extends NativeCurrency {
//   equals(other: Currency): boolean {
//     return other.isNative && other.chainId === this.chainId;
//   }

//   get wrapped(): Token {
//     if (!isCelo(this.chainId)) throw new Error('Not celo');
//     const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
//     if (nativeCurrency) {
//       return nativeCurrency;
//     }
//     throw new Error(`Does not support this chain ${this.chainId}`);
//   }

//   public constructor(chainId: string) {
//     if (!isCelo(chainId)) throw new Error('Not celo');
//     super(chainId, 18, 'CELO', 'Celo');
//   }
// }

// function isGnosis(chainId: string): chainId is ChainId.GNOSIS {
//   return chainId === ChainId.GNOSIS;
// }

// class GnosisNativeCurrency extends NativeCurrency {
//   equals(other: Currency): boolean {
//     return other.isNative && other.chainId === this.chainId;
//   }

//   get wrapped(): Token {
//     if (!isGnosis(this.chainId)) throw new Error('Not gnosis');
//     const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
//     if (nativeCurrency) {
//       return nativeCurrency;
//     }
//     throw new Error(`Does not support this chain ${this.chainId}`);
//   }

//   public constructor(chainId: string) {
//     if (!isGnosis(chainId)) throw new Error('Not gnosis');
//     super(chainId, 18, 'XDAI', 'xDai');
//   }
// }

// function isBnb(chainId: string): chainId is ChainId.BNB {
//   return chainId === ChainId.BNB;
// }

// class BnbNativeCurrency extends NativeCurrency {
//   equals(other: Currency): boolean {
//     return other.isNative && other.chainId === this.chainId;
//   }

//   get wrapped(): Token {
//     if (!isBnb(this.chainId)) throw new Error('Not bnb');
//     const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
//     if (nativeCurrency) {
//       return nativeCurrency;
//     }
//     throw new Error(`Does not support this chain ${this.chainId}`);
//   }

//   public constructor(chainId: string) {
//     if (!isBnb(chainId)) throw new Error('Not bnb');
//     super(chainId, 18, 'BNB', 'BNB');
//   }
// }

// function isMoonbeam(chainId: string): chainId is ChainId.MOONBEAM {
//   return chainId === ChainId.MOONBEAM;
// }

// class MoonbeamNativeCurrency extends NativeCurrency {
//   equals(other: Currency): boolean {
//     return other.isNative && other.chainId === this.chainId;
//   }

//   get wrapped(): Token {
//     if (!isMoonbeam(this.chainId)) throw new Error('Not moonbeam');
//     const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
//     if (nativeCurrency) {
//       return nativeCurrency;
//     }
//     throw new Error(`Does not support this chain ${this.chainId}`);
//   }

//   public constructor(chainId: string) {
//     if (!isMoonbeam(chainId)) throw new Error('Not moonbeam');
//     super(chainId, 18, 'GLMR', 'Glimmer');
//   }
// }

// function isAvax(chainId: string): chainId is ChainId.AVALANCHE {
//   return chainId === ChainId.AVALANCHE;
// }

// class AvalancheNativeCurrency extends NativeCurrency {
//   equals(other: Currency): boolean {
//     return other.isNative && other.chainId === this.chainId;
//   }

//   get wrapped(): Token {
//     if (!isAvax(this.chainId)) throw new Error('Not avalanche');
//     const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
//     if (nativeCurrency) {
//       return nativeCurrency;
//     }
//     throw new Error(`Does not support this chain ${this.chainId}`);
//   }

//   public constructor(chainId: string) {
//     if (!isAvax(chainId)) throw new Error('Not avalanche');
//     super(chainId, 18, 'AVAX', 'Avalanche');
//   }
// }

// export class ExtendedEther extends Ether {
//   public get wrapped(): Token {
//     if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
//       return WRAPPED_NATIVE_CURRENCY[this.chainId as ChainId];
//     }
//     throw new Error('Unsupported chain ID');
//   }

//   private static _cachedExtendedEther: { [chainId: string]: NativeCurrency } =
//     {};

//   public static onChain(chainId: string): ExtendedEther {
//     return (
//       this._cachedExtendedEther[chainId] ??
//       (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
//     );
//   }
// }

const cachedNativeCurrency: { [chainId: string]: NativeCurrency } = {};

export function nativeOnChain(chainId: string): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined) {
    return cachedNativeCurrency[chainId]!;
  }
  else {
    cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId]!;
}
