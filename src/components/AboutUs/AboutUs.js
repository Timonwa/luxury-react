import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us-wrapper">
        <h3 className="section-title">About Us</h3>
        <div className="about-us__body">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos vel
            pariatur temporibus soluta beatae numquam tempore ut dolore
            architecto maxime aspernatur cumque, quibusdam a quia omnis rem sed
            excepturi veritatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos vel
            pariatur temporibus soluta beatae numquam tempore ut dolore
            architecto maxime aspernatur cumque, quibusdam a quia omnis rem sed
            excepturi veritatis.
          </p>
          <div className="about-us__stats">
            <div className="about-us__stats-card">
              <p className="about-us__stats-title">Agents and Hosts</p>
              <p className="about-us__stats-nos">350</p>
            </div>
            <div className="about-us__stats-card">
              <p className="about-us__stats-title">Property Listings</p>
              <p className="about-us__stats-nos">1,500</p>
            </div>
            <div className="about-us__stats-card">
              <p className="about-us__stats-title">Areas Covered</p>
              <p className="about-us__stats-nos">75</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
