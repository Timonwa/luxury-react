import React from "react";
import "./WebsiteReviews.scss";
import profile1 from "../../assets/imgs/reviews/profile1.jpg";
import profile2 from "../../assets/imgs/reviews/profile2.jpg";
import {
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const WebsiteReviews = () => {
  return (
    <section className="company-reviews-section">
      <div className="company-reviews-section-wrapper">
        <h3 className="section-title">Reviews</h3>
        {/* <!-- reviews by the users --> */}
        <div className="company-reviews-cntr">
          <div className="user-company-review">
            <div className="user-review">
              {/* <!-- user review --> */}
              <p className="user-comment">
                <FaQuoteLeft className="quote-left" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                beatae optio tempora , mollitia rerum blanditiis!
                <FaQuoteRight className="quote-right" />
              </p>
            </div>
            <div className="user-img">
              {/* <!-- user img --> */}
              <img className="user-image" src={profile2} alt="user1" />
              {/* <!-- user name --> */}
              <h6 className="user-name">John Doe1</h6>
            </div>
          </div>

          <div className="user-company-review">
            <div className="user-review">
              {/* <!-- user review --> */}
              <p className="user-comment">
                <FaQuoteLeft className="quote-left" />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                aspernatur beatae optio tempora dolorem, mollitia rerum
                blanditiis!
                <FaQuoteRight className="quote-right" />
              </p>
            </div>
            <div className="user-img">
              {/* <!-- user img --> */}
              <img className="user-image" src={profile2} alt="user2" />
              {/* <!-- user name --> */}
              <h6 className="user-name">John Doe2</h6>
            </div>
          </div>

          <div className="user-company-review">
            <div className="user-review">
              {/* <!-- user review --> */}
              <p className="user-comment">
                <FaQuoteLeft className="quote-left" />
                Lorem ipsum dolor sit amet consectetu adipis, accusantium magnam
                laborum ducimus corrupti inventore illum a!
                <FaQuoteRight className="quote-right" />
              </p>
            </div>
            <div className="user-img">
              {/* <!-- user img --> */}
              <img className="user-image" src={profile1} alt="user3" />
              {/* <!-- user name --> */}
              <h6 className="user-name">John Doe3</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteReviews;
