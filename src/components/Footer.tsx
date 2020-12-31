import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-24">
      <span>
        © {new Date().getFullYear()},{` `}
        <span className="text-purple-500 font-bold tracking-wide">nosnart</span>
      </span>
    </footer>
  );
};
