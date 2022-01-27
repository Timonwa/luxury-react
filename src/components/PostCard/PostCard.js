import React from "react";
import "./PostCard.scss";
import PostBadges from "../PostBadges/PostBadges";
import image1 from "../../assets/imgs/post_images/living-room-couch.jpg";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostTags from "../hooks/PostTags/PostTags";

const PostCard = () => {
  return (
    <main className="post-section">
      <div className="post-section-wrapper">
        <div className="post-card">
          {/* <!-- name of the advert --> */}
          <div className="post-card-title">
            <span>
              <p>Grey Hostel</p>
              <span className="price">200,000</span>
            </span>
            <span>
              <p>Posted by Mr. Lorem ipsum</p>
              <p>21/03/2021</p>
            </span>
          </div>
          <div className="post-card-image">
            <PostBadges />
            {/* <!-- images of the adverts --> */}
            <img className="ad-pic" src={image1} alt="" />
          </div>
          <div className="post-card-features">
            {/* <!-- ad basic features --> */}
            <div className="features-cntr">
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
          <div className="post-card-body">
            {/* <!-- title --> */}
            <h4 className="post-title">Grey Hostel serviced apartment</h4>
            <h4>Akoka road, Yaba, Lagos</h4>

            {/* <!-- price --> */}
            <p className="ad-price">
              <span className="price">200,000</span> per session
            </p>
            {/* <!-- description title --> */}
            <h4 className="post-body-title">Property Description</h4>
            {/* <!-- description  --> */}
            <p className="post-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              iure atque animi? Odio doloribus sint dolorem harum atque nobis
              repellendus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Rerum, voluptatem nesciunt molestias modi voluptates atque
              sed quas maxime tenetur aliquid deleniti totam repellendus ab
              obcaecati dolorem nostrum distinctio quisquam. Id!
            </p>
          </div>
          <PostTags />
        </div>
        {/* <!-- cta --> */}
        <div className="post-cta-btns">
          {/* <!-- the chat with agent button --> */}
          <button className="cta-btn chat-btn" type="button">
            <a href="https://example.com">Chat</a>
          </button>
          {/* <!-- the book a video call inspection button --> */}
          <button className="cta-btn video-btn" type="button">
            <a href="https://example.com">Video Call</a>
          </button>
          {/* <!-- the book a physical inspection button --> */}
          <button className="cta-btn book-btn" type="button">
            <a href="https://example.com">Book Inspection</a>
          </button>
        </div>
      </div>
    </main>
  );
};

export default PostCard;
