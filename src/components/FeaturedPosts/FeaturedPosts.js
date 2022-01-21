import React from "react";
import "./FeaturedPosts.scss";
import PostCard from "../PostCard/PostCard";

const FeaturedPosts = () => {
  return (
    <main className="feature-posts-section">
      <div className="feature-posts-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div className="feature-posts-cntr">
          <PostCard />
        </div>
      </div>
    </main>
  );
};

export default FeaturedPosts;
