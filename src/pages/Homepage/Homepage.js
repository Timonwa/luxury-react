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
  // fetch url
  const url = "http://localhost:3002/posts";
  // const url = "https://luxury-react-api.herokuapp.com/posts";

  // use fetch to get data from the api
  const { data: posts, isPending, error } = useFetch(url);

  let allPosts = posts;
  const [allPosts, setAllPosts] = useState(posts);

  let searchPosts;

  // search function
  const handleSearch = (data) => {
    const location = data.location;
    const type = "hostel";
    const sortBy = "old";
    const price = "low";
    const bedroom = "1";
    const toilet = "1";
    const bathroom = "1";
    const serviced = "Yes";
    const minPrice = "150000";
    const maxPrice = "200000";
    console.log(location);

    searchPosts = posts.filter(function (post) {
      return (
        post.location.toLowerCase().includes(location.toLowerCase()) &&
        post.features.type === type &&
        post.features.serviced_apartment === serviced &&
        post.features.price > minPrice &&
        post.features.price < maxPrice &&
        post.features.bathroom === bathroom &&
        post.features.bedroom === bedroom &&
        post.features.toilet === toilet &&
        post.features.bathroom === bathroom
      );
    });

    // if (searchPosts.length === 0) {
    //   return console.log("No posts found");
    // }

    // return console.log(`all posts: ${allPosts}`);
  };

  console.log("all posts: " + allPosts, "search posts: " + searchPosts);

  // setAllPosts(searchPosts);
  // allPosts = searchPosts;
  // console.log("all posts: " + allPosts, "search posts: " + searchPosts);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
          <SearchCard handleSearch={handleSearch} />
        </div>
      </header>
      <WebsiteReviews />
      <FeaturedPosts posts={allPosts} isPending={isPending} error={error} />
      <AboutUs />
      <HowItWorks />
      <RegisterCTA />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Homepage;
