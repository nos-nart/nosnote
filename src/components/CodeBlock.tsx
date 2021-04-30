/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

type CodeBlockProps = {
  children: string;
  language: any;
  title: string;
  highlightLines: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language,
  title,
  highlightLines,
}) => {
  const lineArr =
    (highlightLines && highlightLines.split(`,`).map((i) => +i)) || [];
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {title !== `` && (
            <p className="w-full p-1 bg-indigo-500 text-white">{title}</p>
          )}
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i });
              if (line.length === 1 && line[0].content === ` `) {
                // eslint-disable-next-line no-param-reassign
                line[0].content = ` `;
              }
              if (lineArr.includes(i + 1)) {
                lineProps.className = `bg-gray-800 border-l-4 border-indigo-500`;
              }
              return (
                <div key={i} {...lineProps}>
                  <span className="ml-2 mr-4 text-gray-700">{i + 1}</span>
                  <span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        </>
      )}
    </Highlight>
  );
};
