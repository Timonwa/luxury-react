import React from "react";
import "./RatingsBadge.scss";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const RatingsBadge = ({ reviews }) => {
  let totalRatings = 0;
  reviews.map((review) => (totalRatings += review.ratings));
  const ratings = parseFloat((totalRatings / reviews.length).toFixed(1));
  console.log(ratings);

  return (
    <div className="ratings-badge">
      {ratings === 5 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings > 4 && ratings < 5 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings === 4 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings > 3 && ratings < 4 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings === 3 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings > 2 && ratings < 3 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings === 2 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings > 1 && ratings < 2 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings === 1 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings > 0 && ratings < 1 && (
        <>
          <p className="ratings-title">
            Ratings <span className="rating-number">{ratings}</span>/5
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
      {ratings === isNaN || (ratings === 0 && <></>)}
    </div>
  );
};

export default RatingsBadge;
