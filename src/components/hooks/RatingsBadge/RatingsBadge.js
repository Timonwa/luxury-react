import React, { useState } from "react";
import "./RatingsBadge.scss";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const RatingsBadge = ({ reviews }) => {
  const [star5, setStar5] = useState(false);
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

  let totalRatings = 0;
  reviews.map((review) => (totalRatings += review.ratings));
  const ratings = parseFloat((totalRatings / reviews.length).toFixed(1));
  console.log(ratings);

  // if (ratings === 5) {
  //   console.log("5 star");
  //   setStar5(true);
  // } else if (ratings > 4 && ratings < 5) {
  //   console.log("4.5 star");
  //   setStar4half(true);
  // } else if (ratings === 4) {
  //   console.log("4 star");
  //   setStar4(true);
  // } else if (ratings > 3 && ratings < 4) {
  //   console.log("3.5 star");
  //   setStar3half(true);
  // } else if (ratings === 3) {
  //   console.log("3 star");
  //   setStar3(true);
  // } else if (ratings > 2 && ratings < 3) {
  //   console.log("2.5 star");
  //   setStar2half(true);
  // } else if (ratings === 2) {
  //   console.log("2 star");
  //   setStar2(true);
  // } else if (ratings > 1 && ratings < 2) {
  //   console.log("1.5 star");
  //   setStar1half(true);
  // } else if (ratings === 1) {
  //   console.log("1 star");
  //   setStar1(true);
  // } else if (ratings > 0 && ratings < 1) {
  //   console.log("0.5 star");
  //   setStarHalf(true);
  // } else if (ratings === isNaN || ratings === 0) {
  //   console.log("0 star");
  //   setStar0(true);
  // }

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
