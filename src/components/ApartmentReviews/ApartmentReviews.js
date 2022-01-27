import React from "react";
import "./ApartmentReviews.scss";
import RatingsBadge from "../hooks/RatingsBadge/RatingsBadge";

const ApartmentReviews = () => {
  return (
    <section className="ad-reviews-section">
      <div className="ad-reviews-wrapper">
        <h3 className="section-title">Reviews</h3>
        {/* <!-- review posts --> */}
        <div className="ad-reviews-cntr">
          <div className="user-ad-review">
            <div className="user-ad-review-heading">
              {/* <!-- user star ratings --> */}
              <RatingsBadge />
              <div className="user-name-date">
                {/* <!-- user name --> */}
                <h3 className="user-ad-name">User1</h3>
                {/* <!-- date the post was made --> */}
                <p className="user-ad-review-date">
                  <small> January 6th, 2021</small>
                </p>
              </div>
            </div>
            {/* <!-- user review --> */}
            <div className="user-ad-review-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ipsam a sed aliquid. Quidem quam explicabo excepturi! Tempore
                esse doloribus quaerat. Odit perferendis quidem asperiores
                molestiae. Odio amet et iste.Est inventore dicta, iste nobis
                possimus cupiditate quasi saepe corrupti vitae velit natus
                necessitatibus architecto libero a ea voluptas, officiis, ipsa
                soluta optio quia molestias dolor cumque incidunt. Nesciunt,
                laborum?
              </p>
            </div>
          </div>
          
          <div className="user-ad-review">
            <div className="user-ad-review-heading">
              {/* <!-- user star ratings --> */}
              <RatingsBadge />
              <div className="user-name-date">
                {/* <!-- user name --> */}
                <h3 className="user-ad-name">User1</h3>
                {/* <!-- date the post was made --> */}
                <p className="user-ad-review-date">
                  <small> January 6th, 2021</small>
                </p>
              </div>
            </div>
            {/* <!-- user review --> */}
            <div className="user-ad-review-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ipsam a sed aliquid. Quidem quam explicabo excepturi! Tempore
                esse doloribus quaerat. Odit perferendis quidem asperiores
                molestiae. Odio amet et iste.Est inventore dicta, iste nobis
                possimus cupiditate quasi saepe corrupti vitae velit natus
                necessitatibus architecto libero a ea voluptas, officiis, ipsa
                soluta optio quia molestias dolor cumque incidunt. Nesciunt,
                laborum?
              </p>
            </div>
          </div>
          <div className="user-ad-review">
            <div className="user-ad-review-heading">
              {/* <!-- user star ratings --> */}
              <RatingsBadge />
              <div className="user-name-date">
                {/* <!-- user name --> */}
                <h3 className="user-ad-name">User1</h3>
                {/* <!-- date the post was made --> */}
                <p className="user-ad-review-date">
                  <small> January 6th, 2021</small>
                </p>
              </div>
            </div>
            {/* <!-- user review --> */}
            <div className="user-ad-review-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                ipsam a sed aliquid. Quidem quam explicabo excepturi! Tempore
                esse doloribus quaerat. Odit perferendis quidem asperiores
                molestiae. Odio amet et iste.Est inventore dicta, iste nobis
                possimus cupiditate quasi saepe corrupti vitae velit natus
                necessitatibus architecto libero a ea voluptas, officiis, ipsa
                soluta optio quia molestias dolor cumque incidunt. Nesciunt,
                laborum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ApartmentReviews;
