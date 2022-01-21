import React from "react";
import "./Listings.scss";
import PostCard from "../PostCard/PostCard";

const Listings = () => {
  return (
    <main className="listings-section">
      <div class="listings-section-wrapper">
        <h3 class="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div class="listings-cntr">
          <PostCard />
        </div>
      </div>
    </main>
  );
};

export default Listings;
