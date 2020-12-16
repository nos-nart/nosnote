import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

interface NoteMetadata {
  slug: string;
  title: string;
  published: string;
}

export async function getNotes(): Promise<fs.Dirent[]> {
  return (
    await fs.promises.readdir(path.join(process.cwd(), `content/notes`), {
      withFileTypes: true,
    })
  ).filter((ent) => ent.isFile() && ent.name.endsWith(`.mdx`));
}

export async function getNoteList(): Promise<NoteMetadata[]> {
  const notes = await getNotes();

  return Promise.all(
    notes.map(async (note) => {
      const contents = await fs.promises.readFile(
        path.join(process.cwd(), `content/notes`, note.name),
        `utf-8`,
      );

      return {
        slug: note.name.replace(/\.mdx$/, ``),
        ...grayMatter(contents).data,
      } as NoteMetadata;
    }),
  );
}

export {};
