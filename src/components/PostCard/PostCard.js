import React from "react";
import "./PostCard.scss";
import PostCardCarousel from "./PostCardCarousel";
import PostBadges from "../PostBadges/PostBadges";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostTags from "../hooks/PostTags/PostTags";
import PostCardTable from "../WebsiteReviews/PostCardTable/PostCardTable";
import { useParams } from "react-router";
import ApartmentReviews from "../ApartmentReviews/ApartmentReviews";
import { allPosts } from "../../database/db";

const PostCard = () => {
  const { id } = useParams();

  const post = allPosts[id - 1];

  return (
    <>
      {post && (
        <>
          <main className="post-section">
            <div className="post-section-wrapper">
              <div className="post-card">
                {/* <!-- name of the advert --> */}
                <div className="post-card-title">
                  <span>
                    <p>{post.name}</p>
                    <span className="price">{post.features.price}</span>
                  </span>
                  <span>
                    <p>Posted by {post.agent}</p>
                    <p>{post.date}</p>
                  </span>
                </div>
                <div className="post-card-image">
                  {/* <PostBadges /> */}
                  <PostBadges verified={post.verified} reviews={post.reviews} />
                  <PostCardCarousel images={post.images} />
                </div>
                <div className="post-card-features">
                  <div className="features-cntr">
                    <div className="feature">
                      <span>
                        {`${post.features.toilet} `}
                        <FaToilet className="feature-icon" />
                      </span>
                      <span>toilet</span>
                    </div>
                    <div className="feature">
                      <span>
                        {`${post.features.bathroom} `}
                        <FaBath className="feature-icon" />
                      </span>
                      <span>bathroom</span>
                    </div>
                    <div className="feature">
                      <span>
                        {`${post.features.bedroom} `}
                        <FaBed className="feature-icon" />
                      </span>
                      <span>bedroom</span>
                    </div>
                    <div className="feature">
                      <span>
                        {`${post.features.car_space} `}
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
                  <h4 className="post-title">{`${post.title} | ${post.location}`}</h4>

                  {/* <!-- price --> */}
                  <p className="ad-price">
                    <span className="price">{post.features.price}</span>
                    {` `}
                    {post.features.duration}
                  </p>
                  {/* <!-- description title --> */}
                  <h4 className="post-body-title">Property Description</h4>
                  {/* <!-- description  --> */}
                  <p className="post-body">{post.description}</p>
                </div>
                <PostCardTable features={post.features} />
                <PostTags tags={post.tags} />
              </div>

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
          <ApartmentReviews reviews={post.reviews} />
        </>
      )}
    </>
  );
};

export default PostCard;
