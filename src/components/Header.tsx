/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Logo } from './svgs';

export const Header: React.FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav className="max-w-6xl m-auto flex justify-between p-2">
          <Link href="/">
            <a>
              <Logo className="w-16 h-16 cursor-pointer" />
            </a>
          </Link>
          <div />
        </nav>
      </header>
      <style jsx>{`
        nav {
          background: #00000000;
          backdrop-filter: saturate(180%) blur(2rem);
        }
      `}</style>
    </>
  );
};
