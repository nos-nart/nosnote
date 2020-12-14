import React from 'react';
import { NavLink, Emoji } from '.';

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-24">
        <NavLink href="/notes">
          <Emoji symbol="📋" /> notes
        </NavLink>
        <NavLink href="/tools">
          <Emoji symbol="🧰" /> tools
        </NavLink>
        <NavLink href="/books">
          <Emoji symbol="📖" /> books
        </NavLink>
      </div>
    </>
  );
};
