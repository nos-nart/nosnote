import React, { ReactElement } from 'react';

type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = (props): ReactElement => (
  <svg
    {...props}
    viewBox="0 0 93 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="93" height="93" rx="10" fill="#7C3AED" />
    <path
      d="M37.1744 26.7795L37.3385 28.9456C37.8198 35.3128 38.0605 40.4109 38.0605 44.24V66H32.1528V20.7733H40.7846L56.2103 60.0923L56.1118 58.7467C55.5867 52.5108 55.3241 47.1063 55.3241 42.5333V20.7733H61.2318V66H52.4359L37.1744 26.7795Z"
      fill="white"
    />
  </svg>
);
