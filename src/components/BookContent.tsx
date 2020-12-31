/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from '.';

type Props = {
  meta: any;
  content: any;
};

export const BookContent: React.FC<Props> = ({ meta, content }) => {
  return (
    <>
      <Link href="/books">
        <a className="dark:text-gray-300 text-gray-500 -mt-12 flex hover:text-purple-600 w-40 items-center">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back to books</span>
        </a>
      </Link>
      <article className="flex flex-col items-start leading-7">
        <h3 className="text-purple-500">{meta.title}</h3>
        <div className="flex flex-wrap">
          {meta.tags.map((tag, index) => (
            <span className="mr-2" key={index}>{`#${tag}`}</span>
          ))}
        </div>
        <hr />
        {content}
      </article>
    </>
  );
};
