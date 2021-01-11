/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

type CodeBlockProps = {
  children: any;
  language: any;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => {
            if (line.length === 1 && line[0].content === ``) {
              // eslint-disable-next-line no-param-reassign
              line[0].content = ` `;
            }
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span>
                  {i + 1} {` `}
                </span>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};
