import React from "react";
import "./WebsiteReviews.scss";
import profile1 from "../../assets/imgs/reviews/profile1.jpg";
import profile2 from "../../assets/imgs/reviews/profile2.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const WebsiteReviews = () => {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      id: 1,
      src: profile1,
      name: "Johanne Doe",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure beatae optio tempora , mollitia rerum blanditiis!",
    },
    {
      id: 2,
      src: profile2,
      name: "Jane Doe",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure beatae optio tempora , mollitia rerum adipisicing elit blanditiis!",
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
        key={item.id}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}>
        <div className="user-company-review">
          <div className="user-review">
            <p className="user-comment">
              <FaQuoteLeft className="quote-left" />
              {item.review}
              <FaQuoteRight className="quote-right" />
            </p>
          </div>
          <div className="user-img">
            <img className="user-image" src={item.src} alt={item.name} />
            <h6 className="user-name">{item.name}</h6>
          </div>
        </div>
      </CarouselItem>
    );
  });
  return (
    <section className="company-reviews-section">
      <div className="company-reviews-section-wrapper">
        <h3 className="section-title">Reviews</h3>
        {/* <!-- reviews by the users --> */}
        <div className="company-reviews-cntr">
          <Carousel
            previous={previousButton}
            next={nextButton}
            activeIndex={activeIndex}
            // interval={null}
            dark>
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
      </div>
    </section>
  );
};

export default WebsiteReviews;
