import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 px-4">
      <h1 className="h1 text-slate-100 mb-4" data-aos="fade-up">404</h1>
      <p className="text-xl text-slate-400 text-center mb-8" data-aos="fade-up" data-aos-delay="200">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/"
        className="btn text-slate-200 bg-slate-800 hover:bg-slate-700 w-full sm:w-auto"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Go back home
      </Link>
    </div>
  );
}; 