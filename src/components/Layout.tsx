import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full max-w-5xl mx-auto mt-20 flex flex-1">
        <Navigation />
        <div className="lg:px-12 px-6 flex-1">{children}</div>
      </div>
      <Footer />
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

        .remark-code-title {
          padding: 0.5rem 1rem;
          background: #282a36;
          color: #97a3af;
          font-size: 0.875rem;
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          width: max-content;
        }

        /* Styles for lazy loaded images */
        .blur-up {
          -webkit-filter: blur(5px);
          filter: blur(5px);
          transition: filter 500ms ease-in, -webkit-filter 500ms ease-in;
        }

        .blur-up.lazyloaded {
          -webkit-filter: blur(0);
          filter: blur(0);
        }
      `}</style>
    </div>
  );
};
