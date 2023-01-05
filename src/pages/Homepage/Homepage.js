import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import RegisterCTA from "../../components/RegisterCTA/RegisterCTA";
import "./Homepage.scss";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import WebsiteReviews from "../../components/WebsiteReviews/WebsiteReviews";
import FeaturedPosts from "../../components/FeaturedPosts/FeaturedPosts";
import AboutUs from "../../components/AboutUs/AboutUs";
import { allPosts } from "../../database/db";

const Homepage = () => {
  const [posts, setPosts] = useState(allPosts);

  let searchPosts;

  // search function
  const handleSearch = (data) => {
    const location = data.location;
    const type = data.type;
    const sortBy = data.sortBy;
    const price = data.price;
    const bedroom = data.bedroom;
    const toilet = data.toilet;
    const bathroom = data.bathroom;
    const serviced = data.serviced;
    const minPrice = data.minRange;
    const maxPrice = data.maxRange;

    searchPosts = posts.filter(function (post) {
      return (
        post.location.toLowerCase().includes(location.toLowerCase()) &&
        post.features.type === type &&
        post.features.serviced_apartment === serviced &&
        post.features.price > minPrice - 1 &&
        post.features.price < maxPrice - 1 &&
        post.features.bathroom === bathroom &&
        post.features.bedroom === bedroom &&
        post.features.toilet === toilet &&
        post.features.bathroom === bathroom
      );
    });

    if (searchPosts.length === 0) {
      return console.log("No posts found");
    }

    return setPosts(searchPosts);
  };

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
          <SearchCard posts={posts} handleSearch={handleSearch} />
        </div>
      </header>
      <WebsiteReviews />
      <FeaturedPosts posts={posts} />
      <AboutUs />
      <HowItWorks />
      <RegisterCTA />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Homepage;
