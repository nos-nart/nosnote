/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

type Props = {
  name: string;
};

export const TagButton: React.FC<Props> = ({ name }) => {
  const [background, setBackground] = React.useState(``);
  React.useEffect(() => {
    setBackground(`bg-${name}`);
  }, []);

  return (
    <Link href={`/notes/tags/${name}`}>
      <a
        className={classNames(`ml-1 text-sm px-2 ${background} text-gray-200`)}
      >
        {`#${name}`}
      </a>
    </Link>
  );
};
