/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ExternalLinkIcon } from './svgs';

type Props = {
  href: string;
  title: string;
};

export const ExternalLink: React.FC<Props> = ({ href, title }) => {
  return (
    <a
      className="inline-block font-bold underline text-blue-500"
      href={href}
      target="_target"
    >
      <p className="flex items-center">
        <span>{title}</span>
        <ExternalLinkIcon className="w-4 h-4 ml-2" />
      </p>
    </a>
  );
};
