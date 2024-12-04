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
