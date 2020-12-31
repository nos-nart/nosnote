/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Date } from './Date';

type Props = {
  notes: any;
  tags: string[];
};

export const NoteList: React.FC<Props> = ({ notes, tags }) => {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <h1 className="text-purple-500 -mt-12">Notes</h1>
        <div className="mt-3">
          {notes.map((note, index) => (
            <div key={index} className="mb-6">
              <div>
                <Date date={note.published} />
              </div>
              <Link href={`/notes/${note.slug}`}>
                <a className="text-xl font-bold hover:text-purple-500">
                  {note.title}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* <ul className="ml-8 w-32 flex flex-col p-4">
        {tags.map((tag, index) => (
          <Link key={index} href={`/notes/tags/${tag}`}>
            <a className="hover:text-purple-500">{`# ${tag}`}</a>
          </Link>
        ))}
      </ul> */}
    </div>
  );
};
