import React from 'react';
import { Seo, ExternalLink, CodeBlock } from '@/components';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import mdxPrism from 'mdx-prism';

const components = { ExternalLink, CodeBlock, Image };

export default function Home({ markup, meta }): JSX.Element {
  const router = useRouter();

  const content = hydrate({ ...markup }, { components });

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Seo title={meta.title} description="" />
      <article className="leading-7 mb-24">{content}</article>
    </>
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const mdxSource = await fs.promises.readFile(
    path.join(process.cwd(), `content`, `notes.mdx`),
    `utf-8`,
  );
  const { content, data } = matter(mdxSource);
  const markup = await renderToString(content, {
    scope: data,
    mdxOptions: { rehypePlugins: [mdxPrism] },
    components,
  });
  return {
    props: {
      markup,
      meta: data,
    },
  };
};
