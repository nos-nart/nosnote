/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink } from '.';

type Props = {
  url: string;
  name: string;
  image?: string;
};

export const ToolItem: React.FC<Props> = ({ url, name, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="shadow-md rounded p-2 relative dark:bg-gray-800 bg-white"
    >
      <Link href={url}>
        <a
          className="flex flex-col text-center dark:text-gray-400 text-gray-700 hover:text-purple-500"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`/${image}`}
            width="auto"
            height="auto"
            layout="responsive"
          />
          <span className="mt-2 text-xs">{name}</span>
          <ExternalLink className="w-4 h-4 ml-2 absolute top-1 right-1" />
        </a>
      </Link>
    </motion.div>
  );
};
