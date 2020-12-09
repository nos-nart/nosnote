import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="mx-12">
      <Header />
      <div className="flex items-start mt-12">
        <Navigation />
        <main className="flex-1 px-12 flex flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};
