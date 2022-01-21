import React from "react";
import "./PostBadges.scss"
import VerifiedBadge from "../hooks/VerifiedBadge/VerifiedBadge";

const PostBadges = () => {
  return (
    <div class="post-badges">
      <VerifiedBadge />
    </div>
  );
};

export default PostBadges;
