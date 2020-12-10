import { Seo, NoteItem } from '@/components';
import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getNotes } from '@/utils/notes';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import mdxOptions from '@/lib/mdxOptions';
import renderToString from 'next-mdx-remote/render-to-string';

const fetcher = (url: RequestInfo, options: RequestInit) =>
  fetch(url, options).then((res) => res.json());

export default function Note({ markup, meta }) {
  const router = useRouter();

  const content = hydrate(markup, {});

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Seo title="note 1" description="" />
      <NoteItem meta={meta} content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const noteId = ctx.params.page as string;
  const mdxSource = await fs.promises.readFile(
    path.join(process.cwd(), `content`, `${noteId}.mdx`),
    `utf-8`,
  );
  const { content, data } = matter(mdxSource);
  const markup = await renderToString(content, {
    scope: data,
    mdxOptions,
  });
  return {
    props: {
      markup,
      meta: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getNotes()).map((ent) => ({
    params: { page: ent.name.split(`.`)[0].toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};
