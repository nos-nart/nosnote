import { Seo, PostContent, ExternalLink, CodeBlock } from '@/components';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getPosts } from '@/utils/posts';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import mdxPrism from 'mdx-prism';

const components = { ExternalLink, CodeBlock, Image };

export default function Post({ markup, meta }): JSX.Element {
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
      <PostContent meta={meta} content={content} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const postId = ctx.params.post as string;

  const mdxSource = await fs.promises.readFile(
    path.join(process.cwd(), `content/posts`, `${postId}.mdx`),
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getPosts()).map((ent) => ({
    params: { post: ent.name.split(`.`)[0].toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};
