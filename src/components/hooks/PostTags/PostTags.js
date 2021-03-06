import React from "react";
import "./PostTags.scss";

const PostTags = ({tags}) => {
  return (
    <div className="post-card-tags">
      {tags.map((tag) => (
        <span className="tags" key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default PostTags;
