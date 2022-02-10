import React from "react";
import "./PostCardPreview.scss";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostBadges from "../PostBadges/PostBadges";
import { Link } from "react-router-dom";

const PostCardPreview = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="post-card-preview">
          <div className="post-card-preview__image">
            <Link to="/post">
              <PostBadges />
              {/* <!-- images of the adverts --> */}
              <img className="ad-pic" src={post.images[0]} alt={post.title} />
            </Link>
          </div>
          <div className="post-card-preview__body">
            <div className="post-card-preview__brief">
              <Link to="/post">
                {/* <!-- name and location --> */}
                <h4 className="ad-link">
                  <Link className="ad-title" to="/post">
                    {post.title}
                    {` | `}
                    <small className="ad-location">{post.location}</small>
                  </Link>
                </h4>
                {/* <!-- price --> */}
                <h4 className="ad-price">
                  <span className="price">{post.features.price}</span>{" "}
                  {post.features.duration}
                </h4>
                {/* <!--  description --> */}
                <p className="ad-body">{post.description.slice(0, 100)}...</p>
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
      ))}
    </>
  );
};

export default PostCardPreview;
