import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import RegisterCTA from "../../components/RegisterCTA/RegisterCTA";
import "./Homepage.scss";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import WebsiteReviews from "../../components/WebsiteReviews/WebsiteReviews";
import FeaturedPosts from "../../components/FeaturedPosts/FeaturedPosts";

const Homepage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <header className="header-section">
        <div className="header-wrapper">
          <div className="greeting-cntr">
            <h1 className="greeting">Welcome to LUXURY</h1>
            <h4 className="motto">
              <small>Your one stop to the home of your dreams.</small>
            </h4>
          </div>

          <SearchCard />
        </div>
      </header>
      <WebsiteReviews />
      <FeaturedPosts />
      <WhatWeDo />
      <RegisterCTA />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Homepage;
