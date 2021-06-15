import React from 'react';
import { NavLink, Emoji, Footer } from '.';

export const Navigation: React.FC = () => {
  return (
    <>
      <div className="side-nav xl:flex hidden flex-col w-16 h-screen fixed top-32">
        <NavLink href="/posts">
          <Emoji symbol="📰" /> posts
        </NavLink>
        <NavLink href="/bookmark">
          <Emoji symbol="🧰" /> bookmark
        </NavLink>
        <NavLink href="/books">
          <Emoji symbol="📖" /> books
        </NavLink>
        <NavLink href="/css">
          <Emoji symbol="💅" /> css
        </NavLink>
        <NavLink href="/js">
          <Emoji symbol="🔮" /> js
        </NavLink>
        <NavLink href="/git">
          <Emoji symbol="🐙" /> git
        </NavLink>
        <Footer />
      </div>
    </>
  );
};
