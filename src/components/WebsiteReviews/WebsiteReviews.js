import React from "react";
import "./WebsiteReviews.scss";
import ReviewCarousel from "./ReviewCarousel";
import useFetch from "../hooks/useFetch/useFetch";

const WebsiteReviews = () => {
  // const {
  //   data: items,
  //   isPending,
  //   error,
  // } = useFetch("https://luxury-react-api.herokuapp.com/websiteReviews");
  const {
    data: items,
    isPending,
    error,
  } = useFetch("http://localhost:3000/websiteReviews");

  return (
    <section className="company-reviews-section">
      <div className="company-reviews-section-wrapper">
        <h3 className="section-title">Reviews</h3>
        <div className="company-reviews-cntr">
          {error && <div>{error}</div>}
          {isPending && <h3>Loading...</h3>}
          {items && <ReviewCarousel items={items} />}
        </div>
      </div>
    </section>
  );
};

export default WebsiteReviews;
