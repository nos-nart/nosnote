/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Date, ArrowLeft, TagButton } from './index';

type Props = {
  meta: any;
  content: any;
};

export const NoteItem: React.FC<Props> = ({ meta, content }) => {
  return (
    <article>
      <Link href="/notes">
        <a className="dark:text-gray-300 text-gray-500  -mt-12 flex hover:text-purple-600 w-40">
          <ArrowLeft className="w-6 h-6 mr-2" />
          <span>Back to notes</span>
        </a>
      </Link>
      <div className="my-6 flex justify-between">
        <div>
          <h1 className="text-2xl text-purple-500">{meta.title}</h1>
          <p>
            <Date date={meta.published} />
          </p>
        </div>
        <div>
          {meta.tags.map((t) => (
            <TagButton key={t} name={t} />
          ))}
        </div>
      </div>
      {content}
    </article>
  );
};