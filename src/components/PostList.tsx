/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PostMetadata } from '@/utils/posts';
import { Date } from './Date';

type Props = {
  posts: PostMetadata[];
  tags: string[];
};

const postWrapperVariants = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const postVariants = {
  hide: { x: 250 },
  show: { x: 0, transition: { duration: 0.2, type: `spring`, stiffness: 300 } },
};

export const PostList: React.FC<Props> = ({ posts, tags }) => {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <h1 className="text-purple-500">Posts</h1>
        <motion.div
          className="mt-3"
          variants={postWrapperVariants}
          initial="hide"
          animate="show"
        >
          {(() => {
            if (!posts.length) {
              return <p>There are no post to render!</p>;
            }
            return posts.map((note, index) => (
              <motion.div key={index} className="mb-6" variants={postVariants}>
                <div>
                  <Date date={note.published} />
                </div>
                <Link href={`/posts/${note.slug}`}>
                  <a className="text-xl font-bold hover:text-purple-500">
                    {note.title}
                  </a>
                </Link>
              </motion.div>
            ));
          })()}
        </motion.div>
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
