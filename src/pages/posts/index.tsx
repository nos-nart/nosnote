import { GetStaticProps } from 'next';
import { Seo, PostList } from '@/components';
import { getPostList } from '@/utils/posts';
import dayjs from 'dayjs';
import { listTags } from '@/utils/tags';

export default function PostIndex({ posts, tags }): JSX.Element {
  return (
    <>
      <Seo title="posts" description="" />
      <PostList posts={posts} tags={tags} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPostList()).sort((a, b) => {
    const isoA = dayjs(a.published).toISOString();
    const isoB = dayjs(b.published).toISOString();
    return dayjs(isoA).isBefore(dayjs(isoB)) ? 1 : -1;
  });

  const tags = listTags();

  return {
    props: {
      posts,
      tags,
    },
  };
};
