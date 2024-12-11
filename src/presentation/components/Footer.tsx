import React from 'react';
import { Link } from 'react-router-dom';
import POWLogo from '../../assets/images/POW.png';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="shrink-0 flex flex-col md:flex-row items-center">
                {/* Logo */}
                <Link className="inline-flex mb-2 md:mb-0" to="/" aria-label="POW">
                  <img src={POWLogo} width={36} height={36} alt="POW Logo" />
                </Link>
                <div className="text-sm text-slate-500 ml-4">
                  POW Cards<span className="md:hidden lg:inline">. The Proof Of Wallet Solution.</span>
                </div>
              </div>
            </div>
            {/* Social links */}
            <ul className="inline-flex space-x-2">
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://www.x.com/pow_cards"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}; 