import dayjs from 'dayjs';
import { ReactElement } from 'react';

type Props = {
  date: Date;
};

export const Date = ({ date }: Props): ReactElement => {
  return (
    <time dateTime={dayjs(date).toISOString()}>
      <span className="text-gray-500">{dayjs(date).format(`MMM D, YYYY`)}</span>
    </time>
  );
};
