import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {children}
    </div>
  );
}; 