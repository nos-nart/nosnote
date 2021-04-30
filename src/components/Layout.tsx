import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <MobileNav />
      <div className="w-full max-w-4xl mt-20 flex flex-1 xl:ml-80 ml-auto mr-auto">
        <div className="lg:px-12 md:px-6 px-2 w-full">{children}</div>
      </div>
      <style jsx global>{`
        body::-webkit-scrollbar {
          width: 12px;
        }

        body::-webkit-scrollbar-track {
          background: #e5e7eb;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #374151;
          border: 3px solid #e5e7eb;
        }

        p > code {
          background: #374151;
          color: #fff;
        }

        .side-nav {
          width: 300px;
        }
      `}</style>
    </div>
  );
};
