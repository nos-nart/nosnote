/* eslint-disable react/no-array-index-key */
import React from 'react';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { BookItem, Emoji } from '@/components';
import { getBooks, BookProps } from '@/utils/books';

interface Props {
  books: BookProps[];
}

const bookContainer = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export default function Books({ books }: Props): JSX.Element {
  return (
    <>
      <h3 className="text-blue-500 font-bold">
        Books I&#39;ve read <Emoji symbol="📚" />
      </h3>
      <motion.div
        className="mt-6 mb-20"
        variants={bookContainer}
        initial="hide"
        animate="show"
      >
        {(() => {
          if (!books.length) {
            return <p>No books have been read!</p>;
          }
          return books.map((book: BookProps, index: number) => (
            <BookItem key={index} {...book} />
          ));
        })()}
      </motion.div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const books = await getBooks();

  return {
    props: {
      books,
    },
  };
};
