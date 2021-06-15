/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Emoji } from '.';

export const MobileNav: React.FC = () => {
  const router = useRouter();
  const pathname = router.pathname.split(`/`)[1];

  const ACTIVE_LINK = {
    POSTS: pathname === `posts` ? `active` : ``,
    TOOLS: pathname === `tools` ? `active` : ``,
    BOOKS: pathname === `books` ? `active` : ``,
    CSS: pathname === `css` ? `active` : ``,
    JS: pathname === `js` ? `active` : ``,
    GIT: pathname === `git` ? `active` : ``,
  };

  return (
    <>
      <div className="z-50 xl:hidden block fixed bottom-0 left-0 right-0 lg:px-6 px-2 dark:bg-gray-900 bg-white mobile-nav">
        <div className="grid grid-cols-6">
          <Link href="/notes" passHref>
            <a
              className={`flex flex-col items-center py-2 ${ACTIVE_LINK.POSTS}`}
            >
              <Emoji symbol="📰" />
              <span>posts</span>
            </a>
          </Link>
          <Link href="/tools" passHref>
            <a
              className={`flex flex-col items-center py-2 ${ACTIVE_LINK.TOOLS}`}
            >
              <Emoji symbol="🧰" />
              <span>tools</span>
            </a>
          </Link>
          <Link href="/books" passHref>
            <a
              className={`flex flex-col items-center py-2 ${ACTIVE_LINK.BOOKS}`}
            >
              <Emoji symbol="📖" />
              <span>books</span>
            </a>
          </Link>
          <Link href="/css" passHref>
            <a className={`flex flex-col items-center py-2 ${ACTIVE_LINK.CSS}`}>
              <Emoji symbol="💅" />
              <span>css</span>
            </a>
          </Link>
          <Link href="/js" passHref>
            <a className={`flex flex-col items-center py-2 ${ACTIVE_LINK.JS}`}>
              <Emoji symbol="🔮" />
              <span>js</span>
            </a>
          </Link>
          <Link href="/git" passHref>
            <a className={`flex flex-col items-center py-2 ${ACTIVE_LINK.GIT}`}>
              <Emoji symbol="🐙" />
              <span>git</span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .mobile-nav {
          backdrop-filter: blur(5px);
        }

        .active {
          border-bottom: 5px solid #7c3aed;
        }
      `}</style>
    </>
  );
};
