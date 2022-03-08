import React, { useState } from "react";
import "./ApartmentReviews.scss";
import ApartmentRatingsBadge from "../hooks/ApartmentRatingsBadge/ApartmentRatingsBadge";

const ApartmentReviews = ({ reviews }) => {
  const [showViewMore, setShowViewMore] = useState(false);
  if (reviews.length !== 0) {
    setShowViewMore(true);
  }

  return (
    <section className="ad-reviews-section">
      <div className="ad-reviews-wrapper">
        <h3 className="section-title">Reviews</h3>
        <div className="ad-reviews-cntr">
          {reviews.map((review) => (
            <div div className="user-ad-review" key={review.id}>
              <div className="user-ad-review-heading">
                {/* <!-- user star ratings --> */}
                <ApartmentRatingsBadge ratings={review.ratings} />
                <div className="user-name-date">
                  {/* <!-- user name --> */}
                  <h3 className="user-ad-name">{review.userName}</h3>
                  {/* <!-- date the post was made --> */}
                  <p className="user-ad-review-date">
                    <small>{review.date}</small>
                  </p>
                </div>
              </div>
              {/* <!-- user review --> */}
              <div className="user-ad-review-body">
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
        {showViewMore && <p className="load-more-btn">view more...</p>}
      </div>
    </section>
  );
};
export default ApartmentReviews;
