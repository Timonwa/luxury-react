import React, { useState } from "react";
import "./LikeButton.scss";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [likeButton, setLikeButton] = useState(false);
  const handleLikeButton = () => {
    setLikeButton(!likeButton);
  };

  return (
    <div
      className={`save-btn  ${likeButton ? "button-liked" : ""}`}
      onClick={handleLikeButton}>
      <span>
        <FaHeart className="feature-icon" />
      </span>
    </div>
  );
};

export default LikeButton;
