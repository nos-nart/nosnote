import { GetStaticProps } from 'next';
import { Seo, PostList } from '@/components';
import { getPostList, PostMetadata } from '@/utils/posts';
import dayjs from 'dayjs';
import { listTags } from '@/utils/tags';

interface IPost {
  posts: PostMetadata[];
  tags: any;
}

export default function PostIndex({ posts, tags }: IPost): JSX.Element {
  return (
    <>
      <Seo title="posts" description="" />
      <PostList posts={posts} tags={tags} />
    </>
  );
}

export const getStaticProps: GetStaticProps<IPost> = async () => {
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
