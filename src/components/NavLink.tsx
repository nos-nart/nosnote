/* eslint-disable jsx-a11y/anchor-is-valid */
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const NavLink: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();
  const activeStyle = router.pathname.includes(href as string) && `active`;

  return (
    <>
      <Link href={href} passHref>
        <a
          className={`my-1 leading-10 default-transition hover:text-purple-500 ${activeStyle}`}
        >
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          position: relative;
          transition: all 200ms linear;
          letter-spacing: 0.5px;
          overflow: hidden;
        }

        a::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 5px;
          background: #7c3aed;
          top: 0;
          right: -10px;
          transition: all 0.08s linear;
        }

        a:hover::before {
          right: 0;
        }

        .active::before {
          right: 0;
        }
      `}</style>
    </>
  );
};
