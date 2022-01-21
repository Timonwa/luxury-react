import React, { useState } from "react";
import "./RatingsBadge.scss";
import { FaStar } from "react-icons/fa";

const RatingsBadge = () => {
  const [star5, setstar5] = useState(true);
  const [star4, setstar4] = useState(false);
  const [star3, setstar3] = useState(false);
  const [star2, setstar2] = useState(false);
  const [star1, setstar1] = useState(false);


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
    </div>
  );
};

export default RatingsBadge;
