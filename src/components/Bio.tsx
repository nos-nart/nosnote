/* eslint-disable global-require */
import { getSiteMetaData } from '@/utils/get-site-meta-data';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Emoji } from './Emoji';

export const Bio: React.FC = () => {
  const { author } = getSiteMetaData();

  return (
    <>
      <h2 className="-mt-12 text-purple-500 flex">
        Hi{` `}
        <motion.div
          animate={{ rotate: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: `reverse`,
            duration: 0.3,
            delay: 1,
            type: `tween`,
            ease: `easeInOut`,
          }}
        >
          <Emoji symbol="👋" />
        </motion.div>
      </h2>
      <h2 className="text-purple-500">
        I&#39;m{` `}
        {author.name}, and this is my notes
      </h2>
      <div className="grid sm:grid-cols-6 grid-cols-1 grid-flow-row md:grid-flow-col">
        <ul className="col-span-4">
          <li className="mb-4">{author.summary}</li>
          <li className="mb-4">{author.work}</li>
          <li className="mb-4">{author.hobby}</li>
        </ul>
        <div className="col-span-2 sm:justify-self-end justify-self-center sm:row-auto row-start-1 sm:mb-0 mb-4">
          <Image
            className="md:rounded-full rounded-none overflow-hidden object-cover"
            src="/coca.jpg"
            layout="intrinsic"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
};
