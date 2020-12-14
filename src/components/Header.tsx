/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Logo } from './svgs';
import { useTheme } from './ThemeProvider';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  // const [isOn, setIsOn] = React.useState(theme === `dark`);

  return (
    <>
      <header className="sticky top-0 z-50 bg-header-light dark:bg-header-dark">
        <nav className="max-w-6xl m-auto flex justify-between p-2">
          <Link href="/">
            <a>
              <Logo className="w-16 h-16 cursor-pointer" />
            </a>
          </Link>
          <button
            type="button"
            className={classNames(
              `p-1 flex cursor-pointer relative w-14 h-7 rounded-full z-50 focus:outline-none`,
              {
                'justify-end': theme !== `dark`,
                'bg-green-500': theme !== `dark`,
                'bg-gray-500': theme === `dark`,
              },
            )}
            onClick={() => toggleTheme()}
          >
            <motion.div
              className="w-5 h-5 bg-white rounded-full shadow-switch"
              layout
              transition={{
                type: `spring`,
                stiffness: 500,
                damping: 30,
              }}
            />
            <div
              className={classNames(`absolute left-1 -z-1 -translate-y-1/2`, {
                hidden: theme === `dark`,
              })}
            >
              <Image
                src="/sun.png"
                alt="sun"
                layout="intrinsic"
                width={20}
                height={20}
              />
            </div>
            <div
              className={classNames(`absolute right-1 -z-1 -translate-y-1/2`, {
                hidden: theme !== `dark`,
              })}
            >
              <Image
                src="/moon.png"
                alt="moon"
                layout="intrinsic"
                width={20}
                height={20}
              />
            </div>
          </button>
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
