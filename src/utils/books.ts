import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

interface BookMetadata {
  slug: string;
  title: string;
  published: string;
  startDate: string;
  finishDate: string;
}

export async function getBooks(): Promise<fs.Dirent[]> {
  return (
    await fs.promises.readdir(path.join(process.cwd(), `content/books`), {
      withFileTypes: true,
    })
  ).filter((ent) => ent.isFile() && ent.name.endsWith(`.mdx`));
}

export async function getBookList(): Promise<BookMetadata[]> {
  const books = await getBooks();

  return Promise.all(
    books.map(async (book) => {
      const contents = await fs.promises.readFile(
        path.join(process.cwd(), `content/books`, book.name),
        `utf-8`,
      );

      return {
        slug: book.name.replace(/\.mdx$/, ``),
        ...grayMatter(contents).data,
      } as BookMetadata;
    }),
  );
}
