import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const NotFound: React.FC = () => {
  return (
    <>
      <Header nav={true} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4">
        <h1 className="h1 text-slate-100 mb-4" data-aos="fade-up">404</h1>
        <p className="text-xl text-slate-400 text-center mb-8" data-aos="fade-up" data-aos-delay="200">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="btn px-6 py-3 text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Go back home</span>
        </Link>
      </div>
    </>
  );
}; 