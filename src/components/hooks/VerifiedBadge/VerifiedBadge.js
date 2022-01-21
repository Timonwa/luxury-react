import React, { useState } from "react";
import "./VerifiedBadge.scss";
import { FaCheckCircle } from "react-icons/fa";

const VerifiedBadge = () => {
  const [verified, setVerified] = useState(true);

  return (
    <div className="verified-badge">
      {verified && (
        <p className="verified-title">
          <FaCheckCircle className="verified-icon" /> Verified
        </p>
      )}
    </div>
  );
};

export default VerifiedBadge;
