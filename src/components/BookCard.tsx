import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookProps } from '@/utils/books';

export const BookCard: React.FC<BookProps> = ({ title, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="rounded p-2 flex flex-col shadow-lg bg-white dark:bg-gray-800"
    >
      <Image width="auto" height="auto" layout="responsive" src={img} />
      <p className="text-sm text-gray-500 mt-2">{title}</p>
    </motion.div>
  );
};
