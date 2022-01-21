import React from "react";
import "./FeaturedPosts.scss";
import PostCard from "../PostCard/PostCard";

const FeaturedPosts = () => {
  return (
    <main className="feature-posts-section">
      <div class="feature-posts-section-wrapper">
        <h3 class="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div class="feature-posts-cntr">
          <PostCard />
        </div>
      </div>
    </main>
  );
};

export default FeaturedPosts;
