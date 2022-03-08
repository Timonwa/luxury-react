import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import image404 from "../../assets/imgs/404image.png";

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-section-wrapper">
        <div className="notfound-image">
          <img src={image404} alt="404 page" />
        </div>
        <div className="notfound-body">
          <div className="notfound-body__items">
            <h1>Oh No...</h1>
            <p>It seems the page you are looking for is lost.</p>
          </div>
          <div className="notfound-link">
            <Link to="/">Return Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
