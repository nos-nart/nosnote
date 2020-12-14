/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getTools, ToolProps } from '@/utils/tools';
import { GetStaticProps } from 'next';
import { ToolItem } from '@/components';

export default function Tools({ tools }) {
  return (
    <>
      <h1 className="text-purple-500 -mt-12">Tools</h1>
      <div className="flex items-center">
        <h3>Javascript</h3>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-3">
        {tools.javascript.map((js: ToolProps, index: number) => (
          <ToolItem key={index} url={js.url} name={js.name} image={js.image} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tools = getTools();

  return {
    props: {
      tools,
    },
  };
};
