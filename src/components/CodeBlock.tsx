/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

type CodeBlockProps = {
  children: string;
  language?: any;
  title?: string;
  highlightLines?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language,
  title,
  highlightLines,
}) => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

  const lineArr =
    (highlightLines && highlightLines.split(`,`).map((i) => +i)) || [];

  const copyToClipboard = (str: string): void => {
    const el = document.createElement(`textarea`);
    el.value = str;
    el.setAttribute(`readonly`, ``);
    el.style.position = `absolute`;
    el.style.left = `-9999px`;
    document.body.appendChild(el);
    el.select();
    document.execCommand(`copy`);
    document.body.removeChild(el);
  };

  return (
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <div className="relative">
            <div className="absolute -top-6 right-2 flex items-end">
              <span className="px-2 bg-code-flag text-white font-thin rounded-t-md">
                {language.toUpperCase()}
              </span>
              <button
                type="button"
                className="ml-2 px-2 bg-code-flag text-white font-thin rounded-t-md"
                onClick={() => {
                  copyToClipboard(children);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 3000);
                }}
              >
                {isCopied ? `🎉 Copied!` : `Copy 📋`}
              </button>
            </div>
          </div>
          {title !== `` && (
            <p className="w-full p-1 bg-code-flag text-white">{title}</p>
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
