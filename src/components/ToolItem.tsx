/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ITool } from '../utils/tools';
import { Emoji } from './Emoji';

export const ToolItem: React.FC<ITool> = ({ name, url }) => {
  return (
    <Link href={url}>
      <motion.a
        whileHover={{
          scale: 1.2,
          originX: 0,
          transition: { type: `spring` },
        }}
        className="inline-block dark:text-gray-400 text-gray-700 hover:text-blue-500 underline cursor-pointer py-2"
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <Emoji symbol="🔗" /> {name}
        </span>
      </motion.a>
    </Link>
  );
};
