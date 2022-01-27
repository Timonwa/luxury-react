import React from "react";
import "./PostCardPreview.scss";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import postImage from "../../assets/imgs/post_images/living-room-blue-theme.jpg.jpg";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostBadges from "../PostBadges/PostBadges";
import { Link } from "react-router-dom";

const PostCardPreview = () => {
  return (
    <div className="post-card-preview">
      <div className="post-card-preview__image">
        <Link to="/post">
          <PostBadges />
          {/* <!-- images of the adverts --> */}
          <img className="ad-pic" src={postImage} alt="" />
        </Link>
      </div>
      <div className="post-card-preview__body">
        <div className="post-card-preview__brief">
          <Link to="/post">
            {/* <!-- name and location --> */}
            <h4 className="ad-link">
              <Link className="ad-title" to="/post">
                Kings's Lodge |{` `}
                <small className="ad-location">Ikoyi</small>
              </Link>
            </h4>
            {/* <!-- price --> */}
            <h4 className="ad-price">
              <span className="price">200,000</span> per night
            </h4>
            {/* <!--  description --> */}
            <p className="ad-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              iure atque animi? Odio doloribus sint dolorem harum atque nobis
              repellendus?
            </p>
          </Link>
        </div>
        {/* <!-- ad basic features --> */}
        <div className="post-card-preview__features">
          <div className="feature">
            <span>
              1{` `}
              <FaToilet className="feature-icon" />
            </span>
            <span>toilet</span>
          </div>
          <div className="feature">
            <span>
              1{` `}
              <FaBath className="feature-icon" />
            </span>
            <span>bathroom</span>
          </div>
          <div className="feature">
            <span>
              2{` `}
              <FaBed className="feature-icon" />
            </span>
            <span>bedroom</span>
          </div>
          <div className="feature">
            <span>
              1{` `}
              <FaCar className="feature-icon" />
            </span>
            <span>car space</span>
          </div>
          {/* <!-- save button --> */}
          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default PostCardPreview;
