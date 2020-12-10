/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Date, ArrowLeft } from './index';

type Props = {
  meta: any;
  content: any;
};

export const NoteItem: React.FC<Props> = ({ meta, content }) => {
  return (
    <article>
      <Link href="/notes">
        <a className="text-gray-300 -mt-12 flex hover:text-purple-600">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back to notes</span>
        </a>
      </Link>
      <div className="my-6">
        <h1 className="text-2xl text-purple-500">{meta.title}</h1>
        <p>
          <Date date={meta.published} />
        </p>
      </div>
      {content}
    </article>
  );
};
