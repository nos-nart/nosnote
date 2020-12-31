import { Seo, BookContent } from '@/components';
import fs from 'fs';
import path from 'path';
import { motion } from 'framer-motion';
import { getBooks } from '@/utils/books';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import mdxPrism from 'mdx-prism';

export default function Book({ markup, meta }) {
  const router = useRouter();

  const content = hydrate({ ...markup }, {});

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Seo title={meta.title} description="" />
      <BookContent meta={meta} content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const bookId = ctx.params.book as string;

  const mdxSource = await fs.promises.readFile(
    path.join(process.cwd(), `content/books`, `${bookId}.mdx`),
    `utf-8`,
  );
  const { content, data } = matter(mdxSource);
  const markup = await renderToString(content, {
    scope: data,
    mdxOptions: { rehypePlugins: [mdxPrism] },
  });
  return {
    props: {
      markup,
      meta: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getBooks()).map((ent) => ({
    params: { book: ent.name.split(`.`)[0].toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};
