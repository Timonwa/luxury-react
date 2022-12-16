import React from "react";
import "./FeaturedPosts.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";
// import useFetch from "../hooks/useFetch/useFetch";

const FeaturedPosts = ({ posts, isPending, error }) => {
  return (
    <main className="feature-posts-section">
      <div className="feature-posts-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        {/* {error && <div className="error">{error}</div>}
        {isPending && <h3 className="loading">Loading...</h3>} */}
        <div className="feature-posts-cntr">
          {posts && <PostCardPreview posts={posts} />}
        </div>
      </div>
    </main>
  );
};

export default FeaturedPosts;
