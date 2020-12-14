/* eslint-disable global-require */
import { getSiteMetaData } from '@/utils/get-site-meta-data';
import React from 'react';
import Image from 'next/image';

export const Bio: React.FC = () => {
  const { author } = getSiteMetaData();

  return (
    <>
      <h1 className="-mt-12 text-purple-500">
        I&#39;m{` `}
        {author.name}
      </h1>
      <div className="grid grid-cols-6">
        <ul className="col-span-4">
          <li className="mb-4">{author.summary}</li>
          <li className="mb-4">{author.work}</li>
          <li className="mb-4">{author.hobby}</li>
        </ul>
        <div className="col-span-2 justify-self-end">
          <Image
            className="rounded-full overflow-hidden object-cover"
            src="/coca.jpg"
            layout="intrinsic"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
};
