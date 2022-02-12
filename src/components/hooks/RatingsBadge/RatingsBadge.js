import React, { useState } from "react";
import "./RatingsBadge.scss";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const RatingsBadge = ({ ratings }) => {
  const [star5, setStar5] = useState();
  const [star4half, setStar4half] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star3half, setStar3half] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star2half, setStar2half] = useState(true);
  const [star2, setStar2] = useState(false);
  const [star1half, setStar1half] = useState(false);
  const [star1, setStar1] = useState(false);
  const [starHalf, setStarHalf] = useState(false);
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
      {star4half && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">4.5</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="star" />
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
            <FaRegStar className="star" />
          </p>
        </>
      )}
      {star3half && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">3.5</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalf className="star" />
            <FaRegStar className="star" />
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
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </p>
        </>
      )}
      {star2half && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">2.5</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star " />
            <FaStar className="star" />
            <FaStarHalf className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
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
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </p>
        </>
      )}
      {star1half && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">1.5</span>/5
          </p>

          <p className="ratings-star">
            <FaStar className="star" />
            <FaStarHalf className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
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
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </p>
        </>
      )}
      {starHalf && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">0.5</span>/5
          </p>

          <p className="ratings-star">
            <FaStarHalf className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </p>
        </>
      )}
      {star0 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">0</span>/5
          </p>

          <p className="ratings-star">
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
            <FaRegStar className="star" />
          </p>
        </>
      )}
    </div>
  );
};

export default RatingsBadge;
