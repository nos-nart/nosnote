import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto py-4 mt-12">
      <span>
        © {new Date().getFullYear()},{` `}
        <span className="text-purple-500 font-bold tracking-wide">nosnart</span>
      </span>
    </footer>
  );
};
