import React from "react";
import "./FeaturedPosts.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";

const FeaturedPosts = ({ posts }) => {
  return (
    <main className="feature-posts-section">
      <div className="feature-posts-section-wrapper">
        <h3 className="section-title">Posts</h3>
        <div className="feature-posts-cntr">
          {posts && <PostCardPreview posts={posts} />}
        </div>
      </div>
    </main>
  );
};

export default FeaturedPosts;
