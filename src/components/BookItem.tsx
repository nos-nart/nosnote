import React from 'react';
import dayjs from 'dayjs';
import { Emoji } from '.';

type Props = {
  book: any;
};

export const BookItem: React.FC<Props> = ({ book }) => {
  return (
    <div className="book--item bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg p-4 focus:outline-none">
      <div className="transition-all duration-200 absolute h-full w-1 bg-purple-500 left-0 top-full active" />
      <p className="font-bold overflow-ellipsis">{book.title}</p>
      <p className="mt-2 text-sm">{book.excerpt}</p>
      <p className="text-xs flex mt-2">
        <Emoji symbol="⏳" />
        <span className="ml-2">
          {book.startDate
            ? dayjs(book.startDate).format(`MMMM D, YYYY`)
            : `...`}
        </span>
        <span className="mx-1">-</span>
        <span>
          {book.finishDate
            ? dayjs(book.finishDate).format(`MMMM D, YYYY`)
            : `...`}
        </span>
      </p>
      <style jsx>{`
        .book--item {
          display: flex;
          flex-direction: column;
          align-items: start;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all;
          duration: 200ms;
        }
        .book--item:hover .active {
          top: 0;
        }
      `}</style>
    </div>
  );
};
