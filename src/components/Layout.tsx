import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col m-auto max-w-5xl">
      <Header />
      <div className="flex items-start mt-6">
        <Navigation />
        <MobileNav />
        <div className="w-full max-w-3xl mt-4 flex flex-1 xl:ml-56 ml-auto mr-auto">
          <div className="px-2 w-full">{children}</div>
        </div>
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

        .side-nav {
          width: 200px;
        }
      `}</style>
    </div>
  );
};
