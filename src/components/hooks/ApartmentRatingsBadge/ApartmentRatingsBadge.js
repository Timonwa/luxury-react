import React from "react";
import "./ApartmentRatingsBadge.scss";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const RatingsBadge = ({ ratings }) => {
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
