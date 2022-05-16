import React, { useEffect, useState } from "react";
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
import useFetch from "../../components/hooks/useFetch/useFetch";

const Homepage = () => {
  const [url, setUrl] = useState(
    "https://luxury-react-api.herokuapp.com/posts"
  );
  const { data: posts, isPending, error } = useFetch(url);
  // const {
  //   data: posts,
  //   isPending,
  //   error,
  // } = useFetch(url);
  useEffect(() => {
    window.scroll(0, 0);
  }, [url]);

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
      <FeaturedPosts posts={posts} isPending={isPending} error={error} />
      <AboutUs />
      <HowItWorks />
      <RegisterCTA />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Homepage;
