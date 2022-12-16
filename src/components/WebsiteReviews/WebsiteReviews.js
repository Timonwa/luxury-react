import React from "react";
import "./WebsiteReviews.scss";
import ReviewCarousel from "./ReviewCarousel";
import useFetch from "../hooks/useFetch/useFetch";

const WebsiteReviews = () => {
  // const {
  //   data: items,
  //   isPending,
  //   error,
  // } = useFetch("https://luxury-react-api.herokuapp.com/websiteReviews");
  // const {
  //   data: items,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:3000/websiteReviews");

  const websiteReviews = [
    {
      id: 1,
      name: "Omolara Fakeye",
      src: "https://i.ibb.co/T25m51D/lucas-lenzi-6-QCZgqodrx-I-unsplash.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure aspernatur beatae optio tempora dolorem, mollitia rerum blanditiis!",
    },
    {
      id: 2,
      name: "Johnson Nkem",
      src: "https://i.ibb.co/8221SDF/20220210-123700.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
    },
    {
      id: 3,
      name: "Peculiar Ekom",
      src: "https://i.ibb.co/HnvhQfP/andra-c-taylor-jr-k0-m-BMCOT10-unsplash.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
    },
    {
      id: 4,
      name: "Jide Sanwolu",
      src: "https://i.ibb.co/bW5q6Sr/auston-mtabane-7-Zn1-Sr-Nzy-R8-unsplash.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
    },
    {
      id: 5,
      name: "Ndubuisi Steven",
      src: "https://i.ibb.co/0JJtNzG/korie-cull-f-Slay1r8u-JQ-unsplash.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam laborum ducimus corrupti inventore illum a!",
    },
  ];
  return (
    <section className="company-reviews-section">
      <div className="company-reviews-section-wrapper">
        <h3 className="section-title">Reviews</h3>
        <div className="company-reviews-cntr">
          {/* {error && <div className="error">{error}</div>} */}
          {/* {isPending && <h3 className="loading">Loading...</h3>} */}
          {websiteReviews && <ReviewCarousel items={websiteReviews} />}
        </div>
      </div>
    </section>
  );
};

export default WebsiteReviews;
