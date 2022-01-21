import React from "react";
import "./PostCard.scss";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import postImage from "../../assets/imgs/post_images/living-room-blue-theme.jpg.jpg";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostBadges from "../PostBadges/PostBadges";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card__image">
        <PostBadges />
        {/* <!-- images of the adverts --> */}
        <img className="ad-pic" src={postImage} alt="" />
      </div>
      <div className="post-card__body">
        <div className="post-card__brief">
          {/* <!-- name and location --> */}
          <h4 className="ad-link">
            <a className="ad-title" href="/html/post.html">
              Kings's Lodge |{` `}
              <small className="ad-location">Ikoyi</small>
            </a>
          </h4>
          {/* <!-- price --> */}
          <h4 className="ad-price">
            <price>200,000</price> per night
          </h4>
          {/* <!--  description --> */}
          <p className="ad-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil iure
            atque animi? Odio doloribus sint dolorem harum atque nobis
            repellendus?
          </p>
        </div>
        {/* <!-- ad basic features --> */}
        <div className="post-card__features">
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

export default PostCard;
