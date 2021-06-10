import books from '../../yaml/books.yml';

export type BookProps = {
  readonly name: string;
  readonly image: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly excerpt: string;
};

export const getBooks = (): BookProps[] => books;
