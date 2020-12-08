/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Seo, Date } from '@/components';
import { getNoteList } from '@/utils/notes';

export default function NoteIndex({ notes }) {
  return (
    <>
      <Seo title="notes" description="" />
      <h1 className="text-2xl text-purple-500">Notes</h1>
      {notes.map((note) => (
        <div key={note.title} className="note">
          <div className="published">
            <Date date={note.published} />
          </div>
          <Link href={`/blog/${note.slug}`}>
            <a>{note.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const notes = await getNoteList();

  return {
    props: {
      notes,
    },
  };
}
