import React from "react";
import "./PostTags.scss";

const PostTags = ({tags}) => {
  return (
    <div className="post-card-tags">
      {tags.map((tag) => (
        <span className="tags">{tag}</span>
      ))}
    </div>
  );
};

export default PostTags;
