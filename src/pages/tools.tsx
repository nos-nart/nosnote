/* eslint-disable react/no-array-index-key */
import React from 'react';
import { getTools, ToolProps, ITool } from '@/utils/tools';
import { GetStaticProps } from 'next';
import { ToolItem } from '@/components';

interface Props {
  tools: ToolProps;
}

export default function Tools({ tools }: Props): JSX.Element {
  return (
    <>
      <h1 className="text-green-500 -mt-12">Tools 🛠</h1>
      <div className="flex items-center mt-6">
        <h3 className="text-yellow-500">Javascript</h3>
      </div>
      <div className="mb-4 flex flex-col">
        {tools.javascript.map((js: ITool, index: number) => (
          <ToolItem key={index} {...js} />
        ))}
      </div>
      <div className="flex items-center mt-6">
        <h3 className="text-purple-500">UI</h3>
      </div>
      <div className="mb-4 flex flex-col">
        {tools.ui.map((js: ITool, index: number) => (
          <ToolItem key={index} {...js} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const tools = await getTools();

  return {
    props: {
      tools,
    },
  };
};
