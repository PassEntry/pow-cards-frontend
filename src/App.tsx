import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Hero } from './presentation/components/Hero';
import { NotFound } from './presentation/components/NotFound';
import { Layout } from './presentation/components/Layout';
import { Claim } from './presentation/components/Claim';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
