import React from 'react';
import { NavLink, Emoji, Footer } from '.';

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="side-nav xl:flex hidden flex-col w-16 h-screen fixed top-32">
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
