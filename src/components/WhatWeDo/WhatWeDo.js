import React from "react";
import "./WhatWeDo.scss";
import search from "../../assets/imgs/about/search.png";
import save from "../../assets/imgs/about/save.png";
import book from "../../assets/imgs/about/book.png";
import payment from "../../assets/imgs/about/payment.png";
import move from "../../assets/imgs/about/move-in.png";

const WhatWeDo = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-wrapper">
        <h3 className="section-title">How It Works</h3>
        <div className="how-it-works">
          {/* about us: search */}
          <div className="how-it-works-ctnr">
            {/* search img */}
            <img className="how-it-works-img" src={search} alt="" />
            {/* search description */}
            <div className="how-it-works-description">
              <h4 className="how-it-works-title">Search</h4>
              <p className="how-it-works-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          {/* about  us: save */}
          <div className="how-it-works-ctnr">
            {/* search description */}
            <div className="how-it-works-description">
              <h4 className="how-it-works-title">Save</h4>
              <p className="how-it-works-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            {/* search img */}
            <img className="how-it-works-img" src={save} alt="" />
          </div>
          {/* about us: book visitation */}
          <div className="how-it-works-ctnr">
            {/* search img */}
            <img className="how-it-works-img" src={book} alt="" />
            {/* search description */}
            <div className="how-it-works-description">
              <h4 className="how-it-works-title">Book Visitation</h4>
              <p className="how-it-works-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          {/* about  us: make secure payment */}
          <div className="how-it-works-ctnr">
            {/* search description */}
            <div className="how-it-works-description">
              <h4 className="how-it-works-title">Secure Payment</h4>
              <p className="how-it-works-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            {/* search img */}
            <img className="how-it-works-img" src={payment} alt="" />
          </div>
          {/* about us: get your key */}
          <div className="how-it-works-ctnr">
            {/* search img */}
            <img className="how-it-works-img" src={move} alt="" />
            {/* search description */}
            <div className="how-it-works-description">
              <h4 className="how-it-works-title">Move In</h4>
              <p className="how-it-works-body">
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
