/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Seo, Date } from '@/components';
import { getNoteList } from '@/utils/notes';

export default function NoteIndex({ notes }) {
  return (
    <>
      <Seo title="notes" description="" />
      <h1 className="text-2xl text-purple-500">Notes 123</h1>
      {notes.map((note) => (
        <div key={note.title} className="note">
          <div className="published">
            <Date date={note.published} />
          </div>
          <Link href={`/notes/page/${note.slug}`}>
            <a>{note.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const notes = await getNoteList();

  return {
    props: {
      notes,
    },
  };
};
