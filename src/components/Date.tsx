import dayjs from 'dayjs';

type Props = {
  date: Date;
};

export const Date: React.FC<Props> = ({ date }) => {
  return (
    <time dateTime={dayjs(date).toISOString()}>
      <span className="dark:text-gray-300 text-gray-500 text-sm">
        {dayjs(date).format(`MMM D, YYYY`)}
      </span>
    </time>
  );
};
