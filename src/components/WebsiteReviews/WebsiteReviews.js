import React from "react";
import "./WebsiteReviews.scss";
import ReviewCarousel from "./ReviewCarousel";
import { websiteReviews } from "../../database/db";

const WebsiteReviews = () => {
  return (
    <section className="company-reviews-section">
      <div className="company-reviews-section-wrapper">
        <h3 className="section-title">Reviews</h3>
        <div className="company-reviews-cntr">
          {websiteReviews && <ReviewCarousel items={websiteReviews} />}
        </div>
      </div>
    </section>
  );
};

export default WebsiteReviews;
