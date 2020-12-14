import books from '../../yaml/books.yml';

export type BookProps = {
  readonly title: string;
  readonly img: string;
};

export const getReadingBook = (): BookProps[] => books.books.reading;
export const getReadBook = (): BookProps[] => books.books.read;
