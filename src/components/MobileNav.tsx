/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import { HamburgerBtn } from './HamburgerBtn';
import { Logo } from './svgs/Logo';
import { Emoji } from './Emoji';

interface MenuItemInterface {
  href: string;
  name: string;
  symbol?: any;
}

const listMobileMenuItem: Array<MenuItemInterface> = [
  { href: `/posts`, name: `posts`, symbol: `🍌` },
  { href: `/bookmark`, name: `bookmark`, symbol: `🍇` },
  { href: `/books`, name: `books`, symbol: `🍓` },
  { href: `/css`, name: `css`, symbol: `🍉` },
];

const navVariants = {
  open: {},
  closed: {},
};

const mbNavVariants = {
  closed: {},
  open: {},
};

const MobileNavItem: React.FC<MenuItemInterface> = ({ href, name, symbol }) => {
  return (
    <motion.li variants={mbNavVariants}>
      <Link href={href} passHref>
        <a className="flex flex-col items-center py-2">
          <Emoji symbol={symbol} />
          <span>{name}</span>
        </a>
      </Link>
    </motion.li>
  );
};

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <>
      <motion.div
        className="px-2 py-4 t-0 l-0 fixed w-80"
        variants={navVariants}
      >
        <div className="flex justify-between">
          <Link href="/">
            <a>
              <Logo className="w-16 h-16 cursor-pointer" />
            </a>
          </Link>
          <HamburgerBtn />
        </div>
        <ul className="flex flex-col items-start">
          {(() => {
            if (!listMobileMenuItem.length) {
              return <p>There are no menu to render!</p>;
            }
            return listMobileMenuItem.map(({ href, name, symbol }) => (
              <MobileNavItem href={href} name={name} symbol={symbol} />
            ));
          })()}
        </ul>
      </motion.div>
      {/* <style jsx>{``}</style> */}
    </>
  );
};
