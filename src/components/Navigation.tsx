import React from 'react';
import { NavLink, Emoji, Footer } from '.';

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="side-nav xl:flex hidden flex-col w-24 h-screen fixed top-20 border-r border-solid border-gray-200 dark:border-gray-700 pl-24">
        <NavLink href="/notes">
          <Emoji symbol="📋" /> notes
        </NavLink>
        <NavLink href="/tools">
          <Emoji symbol="🧰" /> tools
        </NavLink>
        <NavLink href="/books">
          <Emoji symbol="📖" /> books
        </NavLink>
        <Footer />
      </div>
    </>
  );
};
