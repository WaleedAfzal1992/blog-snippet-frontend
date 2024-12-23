import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const renderContent = (content) => {
  const regex = /```(\w+)?\n([\s\S]+?)\n```/g;
  let lastIndex = 0;
  const parts = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<p key={lastIndex}>{content.slice(lastIndex, match.index)}</p>);
    }
    const language = match[1] || 'text';
    const code = match[2];
    parts.push(
      <SyntaxHighlighter key={match.index} language={language} style={dark}>
        {code}
      </SyntaxHighlighter>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < content.length) {
    parts.push(<p key={lastIndex}>{content.slice(lastIndex)}</p>);
  }
  return parts;
};

const BlogArticle = ({ title, content }) => {
  return (
    <div className="blog-article">
      <h1>{title}</h1>
      <div className="article-content">
        {renderContent(content)}
      </div>
    </div>
  );
};

export default BlogArticle;
