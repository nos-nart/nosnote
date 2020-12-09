/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Logo } from './svgs';

export const Header: React.FC = () => {
  return (
    <header className="my-4">
      <nav className="flex justify-between">
        <Link href="/">
          <a>
            <Logo className="w-10 h-10 cursor-pointer" />
          </a>
        </Link>
        <div />
      </nav>
    </header>
  );
};
