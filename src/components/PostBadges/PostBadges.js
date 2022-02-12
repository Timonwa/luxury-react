import React from "react";
import "./PostBadges.scss";
import VerifiedBadge from "../hooks/VerifiedBadge/VerifiedBadge";
import RatingsBadge from "../hooks/RatingsBadge/RatingsBadge";

const PostBadges = ({ verified, reviews }) => {
  return (
    <div className="post-badges">
      <VerifiedBadge verified={verified} />
      <RatingsBadge reviews={reviews} />
    </div>
  );
};

export default PostBadges;
