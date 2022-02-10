import React, { useState, useEffect } from "react";
import "./Listings.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";

const Listings = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://luxury-react-api.herokuapp.com/posts")
    // fetch("http://localhost:3000/posts")
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <main className="listings-section">
      <div className="listings-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div className="listings-cntr">
          {posts && <PostCardPreview posts={posts} />}
        </div>
      </div>
    </main>
  );
};

export default Listings;
