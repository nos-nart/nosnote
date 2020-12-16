/* eslint-disable react/no-array-index-key */
import React from 'react';
import { GetStaticProps } from 'next';
import { BookItem, Emoji } from '@/components';
import { getBookList } from '@/utils/books';

export default function Books({ books }) {
  return (
    <>
      <h1 className="text-purple-500 -mt-12">Books</h1>
      <h3 className="text-green-500 font-bold">
        Currently I&#39;m reading <Emoji symbol="🔍" />
      </h3>
      {/* <ul className="grid grid-flow-row gap-2">
        {booksReading.map((book, index: number) => (
          <BookItem key={index} title={book.title} slug={book.slug} />
        ))}
      </ul> */}
      <h3 className="text-blue-500 font-bold mt-6">
        Books I&#39;ve read <Emoji symbol="📚" />
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {books.map((book, index: number) => (
          <BookItem key={index} book={book} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const books = await getBookList();

  return {
    props: {
      books,
    },
  };
};
