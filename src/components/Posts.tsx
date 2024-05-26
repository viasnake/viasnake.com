import React from "react";

export default function Posts({ num }) {
  const Posts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
  return (
    <ul className="post-list">
      {Posts.items.slice(0, num).map((item, index) => {
        const date = item.permalink.split("/").slice(2, 5).join("-");
        return (
          <li key={index} className="post-item">
            <a href={`${item.permalink}`} className="post-link">
              {item.title}
            </a>
            <span className="post-date">{new Date(date).toLocaleDateString()}</span>
          </li>
        );
      })}
    </ul>
  );
}
