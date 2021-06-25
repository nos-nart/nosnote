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
    <motion.div variants={mbNavVariants} className="w-full">
      <Link href={href} passHref>
        <a className="flex items-center py-3 w-full">
          <Emoji symbol={symbol} />
          <span className="ml-1">{name}</span>
        </a>
      </Link>
    </motion.div>
  );
};

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <>
      <motion.div
        className="px-2 py-4 top-0 left-0 fixed w-64 dark:bg-gray-800 bg-gray-200 dark:text-white text-black z-50 h-screen overflow-auto"
        variants={navVariants}
      >
        <div className="flex justify-between mb-3">
          <Link href="/">
            <a>
              <Logo className="w-16 h-16 cursor-pointer" />
            </a>
          </Link>
          <HamburgerBtn />
        </div>
        <div className="flex flex-col items-start">
          {(() => {
            if (!listMobileMenuItem.length) {
              return <p>There are no menu to render!</p>;
            }
            return listMobileMenuItem.map(({ href, name, symbol }, index) => (
              <MobileNavItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                href={href}
                name={name}
                symbol={symbol}
              />
            ));
          })()}
        </div>
      </motion.div>
      {/* <style jsx>{``}</style> */}
    </>
  );
};
