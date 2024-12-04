import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './presentation/components/Layout';
import { WalletContextProvider } from './contexts/WalletContext';
import { routes } from './config/routes';

// Add Buffer polyfill
import { Buffer } from 'buffer';
window.Buffer = Buffer;

function App() {
  return (
    <BrowserRouter>
      <WalletContextProvider>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Layout>
      </WalletContextProvider>
    </BrowserRouter>
  );
}

export default App;
