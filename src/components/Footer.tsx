import React from 'react';
import { GithubLogo } from './svgs';

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between py-4">
      <span>
        © {new Date().getFullYear()},{` `}
        <span className="text-purple-500 font-bold tracking-wide">nosnart</span>
      </span>
      <div>
        <a
          href="https://github.com/nos-nart/nos-note"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
};
