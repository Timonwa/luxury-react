import React from "react";
import "./PostCard.scss";
import PostBadges from "../PostBadges/PostBadges";
import image1 from "../../assets/imgs/post_images/living-room-couch.jpg";
import image2 from "../../assets/imgs/post_images/modern-kitchen.jpg";
import image3 from "../../assets/imgs/post_images/bohemian-bedroom.jpg";
import { FaToilet, FaBath, FaBed, FaCar } from "react-icons/fa";
import LikeButton from "../hooks/LikeButton/LikeButton";
import PostTags from "../hooks/PostTags/PostTags";
import PostCardTable from "../PostCardTable/PostCardTable";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch/useFetch";


const PostCard = () => {
  const { id } = useParams();
  const {
    data: post,
    isPending,
    error,
  } = useFetch("https://luxury-react-api.herokuapp.com/posts/" + id);
  // const {
  //   data: post,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:3000/posts/" + id);

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      src: image1,
      altText: "Slide One",
    },
    {
      src: image2,
      altText: "Slide Two",
    },
    {
      src: image3,
      altText: "Slide Three",
    },
  ];

  // Items array length
  const itemLength = items.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}>
        <img className="ad-pic" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <main className="post-section">
      <div className="post-section-wrapper">
        {error && <div>{error}</div>}
        {isPending && <h3>Loading...</h3>}
        {post && (<div className="post-card">
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
            <PostBadges verified={post.verified} review={post.review} />
            <Carousel
              previous={previousButton}
              next={nextButton}
              activeIndex={activeIndex}
              interval={null}
              slide={false}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={(newIndex) => {
                  if (animating) return;
                  setActiveIndex(newIndex);
                }}
              />
              {carouselItemData}
              <CarouselControl
                directionText="Prev"
                direction="prev"
                onClickHandler={previousButton}
              />
              <CarouselControl
                directionText="Next"
                direction="next"
                onClickHandler={nextButton}
              />
            </Carousel>
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
              <LikeButton />
            </div>
          </div>
          <div className="post-card-body">
            {/* <!-- title --> */}
            <h4 className="post-title">{`${post.title} | ${post.location}`}</h4>

            {/* <!-- price --> */}
            <p className="ad-price">
              <span className="price">{post.features.price}</span>{` `}{post.features.duration}
            </p>
            {/* <!-- description title --> */}
            <h4 className="post-body-title">Property Description</h4>
            {/* <!-- description  --> */}
            <p className="post-body">
              {post.description}
            </p>
          </div>
          <PostCardTable />
          <PostTags />
        </div>)}
        
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
