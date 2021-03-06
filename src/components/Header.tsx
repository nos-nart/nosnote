/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Logo } from './svgs';
import { ThemeToggle } from './ThemeToggle';
import { HamburgerBtn } from './HamburgerBtn';

export const Header: React.FC = () => {
  return (
    <>
      <header className="px-2 sticky top-0 z-50 bg-header-light dark:bg-header-dark">
        <nav className="flex justify-between items-center h-20 sm:px-0 px-2">
          <div className="xl:block hidden">
            <Link href="/">
              <a>
                <Logo className="w-16 h-16 cursor-pointer" />
              </a>
            </Link>
          </div>
          <div className="xl:hidden block">
            <HamburgerBtn />
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <style jsx>{`
        header {
          backdrop-filter: blur(5px);
        }
      `}</style>
    </>
  );
};
