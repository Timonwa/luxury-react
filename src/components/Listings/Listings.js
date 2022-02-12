import React from "react";
import "./Listings.scss";
import PostCardPreview from "../PostCardPreview/PostCardPreview";
import useFetch from "../hooks/useFetch/useFetch";

const Listings = () => {
  // const {
  //   data: posts,
  //   isPending,
  //   error,
  // } = useFetch("https://luxury-react-api.herokuapp.com/posts");
  const {
    data: posts,
    isPending,
    error,
  } = useFetch("http://localhost:3000/posts");

  return (
    <main className="listings-section">
      <div className="listings-section-wrapper">
        <h3 className="section-title">Posts</h3>
        {/* <!-- the ads --> */}
        <div className="listings-cntr">
          {error && <div>{error}</div>}
          {isPending && <h3>Loading...</h3>}
          {posts && <PostCardPreview posts={posts} />}
        </div>
      </div>
    </main>
  );
};

export default Listings;
