/* eslint-disable react/no-array-index-key */
import React from 'react';
import { GetStaticProps } from 'next';
import { BookItem, Emoji, ClientOnlyPortal, CloseIcon } from '@/components';
import { getBookList } from '@/utils/books';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Books({ books }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [slug, setSlug] = React.useState(``);

  const onShowReview = (book: any): void => {
    setOpen(true);
    setSlug(book);
    router.push(book);
  };

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
          <button
            className="focuse:outline-none mt-2"
            type="button"
            onClick={() => onShowReview(book.slug)}
          >
            <BookItem key={index} book={book} />
          </button>
        ))}
      </div>
      {open && (
        <ClientOnlyPortal selector="#modal">
          <div className="backdrop grid place-items-center z">
            <motion.div
              className="modal p-6 bg-white text-gray-900 relative shadow rounded"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: `spring`, stiffness: 300, duration: 0.2 }}
              style={{ width: `800px` }}
            >
              <button
                className="absolute top-2 right-2 focus:outline-none"
                type="button"
                onClick={() => setOpen(false)}
              >
                <CloseIcon className="w-5 h-5" />
              </button>
              What I have learn from this book!!!
            </motion.div>
          </div>
          <style jsx>{`
            :global(body) {
              overflow: hidden;
            }
            .backdrop {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 99;
            }
          `}</style>
        </ClientOnlyPortal>
      )}
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
