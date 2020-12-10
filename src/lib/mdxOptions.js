const codeTitle = require(`remark-code-titles`);
const mdxPrism = require(`mdx-prism`);

const mdxOptions = {
  remarkPlugins: [codeTitle],
  rehypePlugins: [mdxPrism, { showLineNumbers: true }],
};

module.exports = mdxOptions;
