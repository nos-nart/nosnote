/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Date } from './Date';

type Props = {
  notes: any;
};

export const NoteList: React.FC<Props> = ({ notes }) => {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <h1 className="text-3xl text-purple-500 -mt-12">Notes</h1>
        <div className="mt-3">
          {notes.map((note) => (
            <div key={note.title} className="mb-6">
              <div>
                <Date date={note.published} />
              </div>
              <Link href={`/notes/page/${note.slug}`}>
                <a className="text-xl font-bold hover:text-purple-500">
                  {note.title}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ul className="ml-8 w-32 flex flex-col p-4">
        {[`react`, `next`, `css`].map((tag) => (
          <li className="cursor-pointer hover:text-purple-600">{`#${tag}`}</li>
        ))}
      </ul>
    </div>
  );
};
