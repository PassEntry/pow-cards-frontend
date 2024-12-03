import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelloWorld } from './presentation/components/HelloWorld';
import { NotFound } from './presentation/components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-100">
            <HelloWorld />
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
