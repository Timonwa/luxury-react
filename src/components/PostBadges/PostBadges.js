import React from "react";
import "./PostBadges.scss";
import VerifiedBadge from "../hooks/VerifiedBadge/VerifiedBadge";
import RatingsBadge from "../hooks/RatingsBadge/RatingsBadge";

const PostBadges = () => {
  return (
    <div className="post-badges">
      <VerifiedBadge />
      <RatingsBadge />
    </div>
  );
};

export default PostBadges;
