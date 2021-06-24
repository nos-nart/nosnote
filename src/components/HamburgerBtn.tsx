/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export const HamburgerBtn: React.FC = () => {
  return (
    <button
      type="button"
      className="focus:outline-none dark:text-white text-gray-800"
    >
      <svg className="w-8 h-8" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: `M 2 2.5 L 20 2.5` },
            open: { d: `M 3 16.5 L 17 2.5` },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: `M 2 16.346 L 20 16.346` },
            open: { d: `M 3 2.5 L 17 16.346` },
          }}
        />
      </svg>
    </button>
  );
};
