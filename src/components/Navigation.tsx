import React from 'react';
import { NavLink } from './NavLink';

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-16">
        <NavLink href="/notes">notes</NavLink>
        <NavLink href="/tools">tools</NavLink>
      </div>
    </>
  );
};
