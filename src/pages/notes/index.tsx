import { GetStaticProps } from 'next';
import { Seo, NoteList } from '@/components';
import { getNoteList } from '@/utils/notes';
import dayjs from 'dayjs';

export default function NoteIndex({ notes }) {
  return (
    <>
      <Seo title="notes" description="" />
      <NoteList notes={notes} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const notes = (await getNoteList()).sort((a, b) => {
    const isoA = dayjs(a.published).toISOString();
    const isoB = dayjs(b.published).toISOString();
    return dayjs(isoA).isBefore(dayjs(isoB)) ? 1 : -1;
  });

  return {
    props: {
      notes,
    },
  };
};
