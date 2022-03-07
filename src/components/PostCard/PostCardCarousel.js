import React from "react";
import "./PostCard.scss";
// import image1 from "../../assets/imgs/post_images/living-room-couch.jpg";
// import image2 from "../../assets/imgs/post_images/modern-kitchen.jpg";
// import image3 from "../../assets/imgs/post_images/bohemian-bedroom.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const PostCardCarousel = ({ images }) => {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Items array length
  const imagesLength = images.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? imagesLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === imagesLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = images.map((image) => {
    return (
      <CarouselItem
        key={image}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}>
        <img className="ad-pic" src={image} alt={image} />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
        interval={null}
        slide={false}>
        <CarouselIndicators
          items={images}
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
    </>
  );
};

export default PostCardCarousel;
