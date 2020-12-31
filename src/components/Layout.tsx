import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
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
          border-radius: 20px;
          border: 3px solid #e5e7eb;
        }

        p > code {
          background: #282a36;
          color: #fff;
          padding: 2px 10px;
          border-radius: 3px;
        }

        .side-nav {
          width: 300px;
        }
      `}</style>
    </div>
  );
};
