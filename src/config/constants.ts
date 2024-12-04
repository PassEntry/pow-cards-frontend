import { Cluster } from '@solana/web3.js';

export const SOLANA_NETWORKS: { [key: string]: Cluster } = {
  MAINNET: 'mainnet-beta',
  TESTNET: 'testnet',
  DEVNET: 'devnet'
} as const;

export const APP_ROUTES = {
  HOME: '/',
  CLAIM: '/claim',
  NOT_FOUND: '*'
} as const; 