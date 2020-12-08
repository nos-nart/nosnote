/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Seo, Date } from '@/components';
import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getNotes } from '@/utils/notes';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import renderToString from 'next-mdx-remote/render-to-string';

const fetcher = (url: RequestInfo, options: RequestInit) =>
  fetch(url, options).then((res) => res.json());

export default function Note({ markup, meta }) {
  const router = useRouter();

  const content = hydrate(markup, {});
  return (
    <>
      <Seo title="note 1" description="" />
      <h1>{meta.title}</h1>
      <p>
        <Date date={meta.published} />
      </p>
      {content}
      <div className="article-footer">
        <Link href="/notes">
          <a className="text-gray-500">Back to notes</a>
        </Link>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const noteId = ctx.params.note as string;
  const mdxSource = await fs.promises.readFile(
    path.join(process.cwd(), `content`, `${noteId}.mdx`),
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

export async function getStaticPaths() {
  const paths = (await getNotes()).map((ent) => ({
    params: { post: ent.name.split(`.`)[0] },
  }));

  return {
    paths,
    fallback: true,
  };
}
