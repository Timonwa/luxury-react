import React from "react";
import "./Listings.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";

const Listings = ({ posts }) => {
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
