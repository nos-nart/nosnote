/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const sunBeamsVariants = {
  inactive: {
    rotate: 0,
  },
  active: {
    rotate: 360,
    transition: {
      delay: 1,
      duration: 10,
      repeat: Infinity,
      ease: [0.3, 0.3, 0.3, 0.3],
    },
  },
};

const pathVariants = {
  inactive: {
    pathLength: 0,
  },
  active: {
    pathLength: 1,
    transition: {
      duration: 1,
      type: `tween`,
    },
  },
};

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatePresence>
      <button
        type="button"
        onClick={() => toggleTheme()}
        className="cursor-pointer focus:outline-none dark:text-white text-gray-900"
      >
        <svg
          className="w-10 h-10"
          viewBox="0 0 258 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariants}
            initial={false}
            animate={theme !== `light` ? `active` : `inactive`}
            d="M104.5 57C99.3333 68.5 96 109.5 118.92 131C145.027 155.489 178 154.5 202 149.5"
            stroke="currentColor"
            strokeWidth="10"
          />
          <path
            d="M201.552 149.44C192.021 179.603 163.814 201.47 130.5 201.47C89.3548 201.47 56 168.115 56 126.97C56 94.8349 76.3459 67.4519 104.859 57"
            stroke="currentColor"
            strokeWidth="10"
          />
          <motion.path
            variants={pathVariants}
            initial={false}
            animate={theme === `light` ? `active` : `inactive`}
            d="M104 57.0634C112.386 53.7941 121.509 52 131.052 52C172.197 52 205.552 85.3548 205.552 126.5C205.552 134.342 203.746 142.401 201.5 149.5"
            stroke="currentColor"
            strokeWidth="10"
          />
          {theme === `light` && (
            <motion.g
              variants={sunBeamsVariants}
              initial={`inactive`}
              animate={`active`}
            >
              <path
                d="M128.577 1.5C128.962 0.833336 129.924 0.833333 130.309 1.5L150.356 36.2223C150.741 36.889 150.26 37.7224 149.49 37.7224H109.396C108.626 37.7224 108.145 36.889 108.53 36.2224L128.577 1.5Z"
                fill="currentColor"
              />
              <path
                d="M192.295 18.4214C192.961 18.0365 193.795 18.5176 193.795 19.2874L193.795 59.3813C193.795 60.1511 192.961 60.6323 192.295 60.2474L157.572 40.2004C156.906 39.8155 156.906 38.8533 157.572 38.4684L192.295 18.4214Z"
                fill="currentColor"
              />
              <path
                d="M238.4 62.779C239.17 62.779 239.651 63.6123 239.266 64.279L219.219 99.0014C218.834 99.668 217.872 99.668 217.487 99.0014L197.44 64.279C197.055 63.6123 197.536 62.779 198.306 62.779L238.4 62.779Z"
                fill="currentColor"
              />
              <path
                d="M256.22 125.577C256.887 125.962 256.887 126.924 256.22 127.309L221.498 147.356C220.831 147.741 219.998 147.26 219.998 146.49L219.998 106.396C219.998 105.626 220.831 105.145 221.498 105.53L256.22 125.577Z"
                fill="currentColor"
              />
              <path
                d="M240.799 189.697C241.184 190.363 240.702 191.197 239.933 191.197L199.839 191.197C199.069 191.197 198.588 190.363 198.973 189.697L219.02 154.974C219.405 154.308 220.367 154.308 220.752 154.974L240.799 189.697Z"
                fill="currentColor"
              />
              <path
                d="M196.927 238.4C196.927 239.17 196.094 239.651 195.427 239.266L160.705 219.219C160.038 218.834 160.038 217.872 160.705 217.487L195.427 197.44C196.094 197.055 196.927 197.536 196.927 198.306L196.927 238.4Z"
                fill="currentColor"
              />
              <path
                d="M130.026 256.015C129.636 256.678 128.673 256.67 128.294 256L108.541 221.109C108.162 220.44 108.65 219.61 109.42 219.617L149.513 219.956C150.282 219.962 150.756 220.8 150.366 221.463L130.026 256.015Z"
                fill="currentColor"
              />
              <path
                d="M66.2924 239.562C65.6225 239.941 64.7933 239.453 64.7998 238.684L65.1389 198.591C65.1454 197.821 65.9828 197.347 66.6462 197.738L101.198 218.078C101.861 218.468 101.853 219.43 101.183 219.81L66.2924 239.562Z"
                fill="currentColor"
              />
              <path
                d="M19.1215 189.745C18.3517 189.738 17.8776 188.901 18.2682 188.238L38.608 153.686C38.9986 153.023 39.9608 153.031 40.34 153.701L60.0926 188.591C60.4719 189.261 59.9837 190.091 59.2139 190.084L19.1215 189.745Z"
                fill="currentColor"
              />
              <path
                d="M1.7053 127.026C1.04191 126.636 1.05005 125.673 1.71995 125.294L36.6106 105.541C37.2805 105.162 38.1097 105.65 38.1032 106.42L37.7641 146.513C37.7576 147.282 36.9203 147.756 36.2569 147.366L1.7053 127.026Z"
                fill="currentColor"
              />
              <path
                d="M19.6578 63.6943C19.2785 63.0244 19.7667 62.1952 20.5365 62.2017L60.6289 62.5408C61.3987 62.5473 61.8728 63.3847 61.4823 64.048L41.1424 98.5996C40.7519 99.263 39.7896 99.2549 39.4104 98.585L19.6578 63.6943Z"
                fill="currentColor"
              />
              <path
                d="M66.0594 18.3611C66.0647 17.5913 66.9013 17.116 67.5653 17.5055L102.148 37.7921C102.812 38.1816 102.806 39.1438 102.136 39.5241L67.276 59.3304C66.6067 59.7107 65.7767 59.2238 65.7821 58.454L66.0594 18.3611Z"
                fill="currentColor"
              />
            </motion.g>
          )}
        </svg>
      </button>
    </AnimatePresence>
  );
};
