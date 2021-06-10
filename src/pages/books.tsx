/* eslint-disable react/no-array-index-key */
import React from 'react';
import { GetStaticProps } from 'next';
import { BookItem, Emoji } from '@/components';
import { getBooks, BookProps } from '@/utils/books';

interface Props {
  books: BookProps[];
}

export default function Books({ books }: Props): JSX.Element {
  return (
    <>
      <h3 className="text-blue-500 font-bold mt-6">
        Books I&#39;ve read <Emoji symbol="📚" />
      </h3>
      <div className="mt-6">
        {books.map((book: BookProps, index: number) => (
          <BookItem key={index} {...book} />
        ))}
      </div>
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
