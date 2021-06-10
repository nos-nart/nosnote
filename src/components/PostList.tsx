/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Date } from './Date';

type Props = {
  posts: any;
  tags: string[];
};

export const PostList: React.FC<Props> = ({ posts, tags }) => {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <h1 className="text-purple-500">Posts</h1>
        <div className="mt-3">
          {posts.map((note, index) => (
            <div key={index} className="mb-6">
              <div>
                <Date date={note.published} />
              </div>
              <Link href={`/posts/${note.slug}`}>
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
