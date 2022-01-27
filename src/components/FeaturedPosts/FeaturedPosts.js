import React from "react";
import "./FeaturedPosts.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";

const FeaturedPosts = () => {
  return (
    <main className="feature-posts-section">
      <div className="feature-posts-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div className="feature-posts-cntr">
          <PostCardPreview />
        </div>
      </div>
    </main>
  );
};

export default FeaturedPosts;
