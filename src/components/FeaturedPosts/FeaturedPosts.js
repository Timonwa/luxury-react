import React, { useState, useEffect } from "react";
import "./FeaturedPosts.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <main className="feature-posts-section">
      <div className="feature-posts-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div className="feature-posts-cntr">
          {posts && <PostCardPreview posts={posts} />}
        </div>
      </div>
    </main>
  );
};

export default FeaturedPosts;
