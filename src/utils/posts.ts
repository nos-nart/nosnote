import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

interface PostMetadata {
  slug: string;
  title: string;
  published: string;
}

export async function getPosts(): Promise<fs.Dirent[]> {
  return (
    await fs.promises.readdir(path.join(process.cwd(), `content/posts`), {
      withFileTypes: true,
    })
  ).filter((ent) => ent.isFile() && ent.name.endsWith(`.mdx`));
}

export async function getPostList(): Promise<PostMetadata[]> {
  const posts = await getPosts();

  return Promise.all(
    posts.map(async (post) => {
      const contents = await fs.promises.readFile(
        path.join(process.cwd(), `content/posts`, post.name),
        `utf-8`,
      );

      return {
        slug: post.name.replace(/\.mdx$/, ``),
        ...grayMatter(contents).data,
      } as PostMetadata;
    }),
  );
}
