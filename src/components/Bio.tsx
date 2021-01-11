/* eslint-disable global-require */
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Emoji } from './Emoji';
import { CodeBlock } from './CodeBlock';

export const Bio: React.FC = () => {
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
      <h2 className="text-purple-500">I&#39;m nosnart, and this is my notes</h2>
      <div className="grid sm:grid-cols-6 grid-cols-1 grid-flow-row md:grid-flow-col">
        <div className="col-span-4 md:mb-0 mb-20 text-xs">
          <CodeBlock language="js">{`
const nosnart = {
  pronouns: "nát 😕",
  currentLocation: "Hanoi, Viet Nam",
  code: "javascript",
  technologies: {
    frontend: {
      js: [ "react", "redux" ],
      css: [ "tailwind", "antd", "sass" ]
    },
    backend: {
      js: [ "node.js", "express.js" ]
    },
    database: ["mongoDB"],
  },
  describe: [ "introvert", "long-life learner", "perfectionist" ],
  love: [ "history", "reading book", "chinese" ]
}
          `}</CodeBlock>
        </div>
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
