import dayjs from 'dayjs';

type Props = {
  date: Date;
};

export const Date: React.FC<Props> = ({ date }) => {
  return (
    <time dateTime={dayjs(date).toISOString()}>
      <span className="text-gray-500">{dayjs(date).format(`MMM D, YYYY`)}</span>
    </time>
  );
};
