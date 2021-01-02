/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps, Prism } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import classNames from 'classnames';

type CodeProps = {
  language?: any;
  children?: any;
  codeString?: any;
  metastring?: any;
};

export const Code: React.FC<CodeProps> = ({
  codeString,
  language,
  metastring,
  ...props
}) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={nightOwl}
      {...props}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              return (
                <div>
                  <span className="line-number-style">{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </Highlight>
  );
};
