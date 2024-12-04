import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './presentation/components/Hero';
import { NotFound } from './presentation/components/NotFound';
import { Layout } from './presentation/components/Layout';
import { Claim } from './presentation/components/Claim';

// Add Buffer polyfill
import { Buffer } from 'buffer';
window.Buffer = Buffer;

// Add these imports
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  LedgerWalletAdapter,
  CoinbaseWalletAdapter,
  TorusWalletAdapter,
  MathWalletAdapter,
  SafePalWalletAdapter,
  AlphaWalletAdapter,
  AvanaWalletAdapter,
  BitKeepWalletAdapter,
  BitgetWalletAdapter,
  BitpieWalletAdapter,
  CloverWalletAdapter,
  Coin98WalletAdapter,
  CoinhubWalletAdapter,
  FractalWalletAdapter,
  HuobiWalletAdapter,
  HyperPayWalletAdapter,
  KeystoneWalletAdapter,
  KrystalWalletAdapter,
  NekoWalletAdapter,
  NightlyWalletAdapter,
  NufiWalletAdapter,
  OntoWalletAdapter,
  ParticleAdapter,
  SaifuWalletAdapter,
  SalmonWalletAdapter,
  SkyWalletAdapter,
  SolongWalletAdapter,
  SpotWalletAdapter,
  TokenPocketWalletAdapter,
  TokenaryWalletAdapter,
  TrezorWalletAdapter,
  TrustWalletAdapter,
  XDEFIWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Import wallet adapter CSS
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  // You can choose different clusters like 'devnet', 'testnet', or 'mainnet-beta'
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
  
  // Initialize wallets that you want to use
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new TorusWalletAdapter(),
      new MathWalletAdapter(),
      new SafePalWalletAdapter(),
      new AlphaWalletAdapter(),
      new AvanaWalletAdapter(),
      new BitgetWalletAdapter(),
      new BitpieWalletAdapter(),
      new CloverWalletAdapter(),
      new Coin98WalletAdapter(),
      new CoinhubWalletAdapter(),
      new FractalWalletAdapter(),
      new HuobiWalletAdapter(),
      new HyperPayWalletAdapter(),
      new KeystoneWalletAdapter(),
      new KrystalWalletAdapter(),
      new NekoWalletAdapter(),
      new NightlyWalletAdapter(),
      new NufiWalletAdapter(),
      new OntoWalletAdapter(),
      new ParticleAdapter(),
      new SaifuWalletAdapter(),
      new SalmonWalletAdapter(),
      new SkyWalletAdapter(),
      new SolongWalletAdapter(),
      new SpotWalletAdapter(),
      new TokenPocketWalletAdapter(),
      new TokenaryWalletAdapter(),
      new TrezorWalletAdapter(),
      new TrustWalletAdapter(),
      new XDEFIWalletAdapter()
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Layout>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/claim" element={<Claim />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Layout>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
