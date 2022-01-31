import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const ReviewCarousel = ({ items, itemLength }) => {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

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
    <div>
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
  );
};

export default ReviewCarousel;
