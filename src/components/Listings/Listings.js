import React from "react";
import "./Listings.scss";
import PostCard from "../PostCard/PostCard";

const Listings = () => {
  return (
    <main className="listings-section">
      <div className="listings-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div className="listings-cntr">
          <PostCard />
        </div>
      </div>
    </main>
  );
};

export default Listings;
