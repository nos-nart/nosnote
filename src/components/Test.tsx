import React from 'react';

type TestProps = {
  children: any;
};

export const Test: React.FC<TestProps> = ({ children }) => {
  return <>{children}</>;
};
