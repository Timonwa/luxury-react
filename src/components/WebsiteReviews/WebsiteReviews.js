import React, { useState, useEffect } from "react";
import "./WebsiteReviews.scss";
import ReviewCarousel from "./ReviewCarousel";

const WebsiteReviews = () => {
  // Sample items for Carousel
  const [items, setItems] = useState(null);

  // Items array length
  const [itemLength, setItemLength] = useState(null);

  useEffect(() => {
    fetch("https://luxury-react-api.herokuapp.com/websiteReviews")
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setItemLength(items.length - 1);
      });
  }, []);
  return (
    <section className="company-reviews-section">
      <div className="company-reviews-section-wrapper">
        <h3 className="section-title">Reviews</h3>
        {/* <!-- reviews by the users --> */}
        <div className="company-reviews-cntr">
          {items && itemLength && (
            <ReviewCarousel items={items} itemLength={itemLength} />
          )}
        </div>
      </div>
    </section>
  );
};

export default WebsiteReviews;
