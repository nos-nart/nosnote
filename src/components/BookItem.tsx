/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { Emoji } from '.';
import { BookProps } from '../utils/books';

const truncateString = (str, num) =>
  str.length > num ? `${str.slice(0, num > 3 ? num - 3 : num)}...` : str;

export const BookItem: React.FC<BookProps> = (book) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded shadow flex mb-3">
        <div className="flex-1 p-2">
          <p className="font-bold overflow-ellipsis text-2xl">{book?.name}</p>
          <p className="text-sm flex mt-2 text-green-500">
            <Emoji symbol="⏳" />
            <span className="ml-2">
              {book.startDate
                ? dayjs(book.startDate).format(`MMMM D, YYYY`)
                : `...`}
            </span>
            <span className="mx-1">-</span>
            <span>
              {(book.endDate && dayjs(book.endDate).format(`MMMM D, YYYY`)) ||
                `reading...`}
            </span>
          </p>
          <p className="text-sm mt-2">
            {(book.excerpt && truncateString(book.excerpt, 200)) || (
              <Emoji symbol="📝" />
            )}
          </p>
        </div>
        <div className="w-40 h-40">
          <Image
            src={book.image}
            alt="book_image"
            width=""
            height=""
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};
