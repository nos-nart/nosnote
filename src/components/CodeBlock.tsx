/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Highlight, { defaultProps, Prism } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
// import classNames from 'classnames';

type CodeBlockProps = {
  codeString: any;
  language: any;
};

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

export const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language,
}) => {
  return (
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={exampleCode}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
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
          ))}
        </pre>
      )}
    </Highlight>
  );
};
