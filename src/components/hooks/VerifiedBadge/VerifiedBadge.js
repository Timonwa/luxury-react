import React from "react";
import "./VerifiedBadge.scss";
import { FaCheckCircle } from "react-icons/fa";

const VerifiedBadge = () => {
  return (
    <div className="verified-badge">
      <p className="verified-title">
        <FaCheckCircle className="verified-icon" /> Verified
      </p>
    </div>
  );
};

export default VerifiedBadge;
