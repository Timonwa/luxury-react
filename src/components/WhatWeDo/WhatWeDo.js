import React from "react";
import "./WhatWeDo.scss";
import search from "../../assets/imgs/about/search.png";
import save from "../../assets/imgs/about/save.png";
import book from "../../assets/imgs/about/book.png";
import payment from "../../assets/imgs/about/payment.png";
import move from "../../assets/imgs/about/move-in.png";

const WhatWeDo = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-section-wrapper">
        <h3 className="section-title">About</h3>
        <div className="about-us">
          {/* about us: search */}
          <div className="about-us-ctnr">
            {/* search img */}
            <img className="about-us-img" src={search} alt="" />
            {/* search description */}
            <div className="about-us-description">
              <h4 className="about-us-title">Search</h4>
              <p className="about-us-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          {/* about  us: save */}
          <div className="about-us-ctnr">
            {/* search description */}
            <div className="about-us-description">
              <h4 className="about-us-title">Save</h4>
              <p className="about-us-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            {/* search img */}
            <img className="about-us-img" src={save} alt="" />
          </div>
          {/* about us: book visitation */}
          <div className="about-us-ctnr">
            {/* search img */}
            <img className="about-us-img" src={book} alt="" />
            {/* search description */}
            <div className="about-us-description">
              <h4 className="about-us-title">Book Visitation</h4>
              <p className="about-us-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          {/* about  us: make secure payment */}
          <div className="about-us-ctnr">
            {/* search description */}
            <div className="about-us-description">
              <h4 className="about-us-title">Secure Payment</h4>
              <p className="about-us-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            {/* search img */}
            <img className="about-us-img" src={payment} alt="" />
          </div>
          {/* about us: get your key */}
          <div className="about-us-ctnr">
            {/* search img */}
            <img className="about-us-img" src={move} alt="" />
            {/* search description */}
            <div className="about-us-description">
              <h4 className="about-us-title">Move In</h4>
              <p className="about-us-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
