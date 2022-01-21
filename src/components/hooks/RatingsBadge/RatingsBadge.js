import React, { useState } from "react";
import "./RatingsBadge.scss";
import { FaStar } from "react-icons/fa";

const RatingsBadge = () => {
  const [star5, setStar5] = useState(true);
  const [star4, setStar4] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star1, setStar1] = useState(false);
  const [star0, setStar0] = useState(false);


  return (
    <div className="ratings-badge">
      {star5 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">5</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </p>
        </>
      )}
      {star4 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">4</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star disabled-star" />
          </p>
        </>
      )}
      {star3 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">3</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
          </p>
        </>
      )}
      {star2 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">2</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
          </p>
        </>
      )}
      {star1 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">1</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
          </p>
        </>
      )}
      {star0 && (
        <>
          <p className="ratings-title disabled-star">
            Ratings <span className="rating-number">0</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
            <FaStar className="star disabled-star" />
          </p>
        </>
      )}
    </div>
  );
};

export default RatingsBadge;
