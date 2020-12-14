/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getReadingBook, getReadBook, BookProps } from '@/utils/books';
import { GetStaticProps } from 'next';
import { BookCard } from '@/components';

export default function Books({ booksReading, booksRead }) {
  return (
    <>
      <h1 className="text-purple-500 -mt-12">Books</h1>
      <h3 className="text-green-500 font-bold">Currently I&#39;m reading</h3>
      <div className="grid grid-cols-4 gap-4">
        {booksReading.map((book: BookProps, index: number) => (
          <BookCard key={index} title={book.title} img={book.img} />
        ))}
      </div>
      <h3 className="text-green-500 font-bold mt-6">Books I&#39;ve read</h3>
      <div className="grid grid-cols-4 gap-4">
        {booksRead.map((book: BookProps, index: number) => (
          <BookCard key={index} title={book.title} img={book.img} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const booksReading = getReadingBook();
  const booksRead = getReadBook();

  return {
    props: {
      booksReading,
      booksRead,
    },
  };
};
