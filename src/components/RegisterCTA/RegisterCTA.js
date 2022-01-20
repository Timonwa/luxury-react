import React from "react";
import { Link } from "react-router-dom";
import "./RegisterCTA.scss";

const registerCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-section-wrapper">
        <div className="register-cntr">
          <span className="register-body">
            <p>
              Do you own a hostel or are you an estate agent or company?
              <br />
              List your property for FREE.
            </p>
          </span>
          <span className="register-btn-cntr">
            <button className="register-btn" type="button">
              <Link to="/signup" className="link">
                Register here!
              </Link>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default registerCTA;
