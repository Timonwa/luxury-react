import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <header className="header-section">
        <div class="header-wrapper">
          <div class="greeting-cntr">
            <h1 class="greeting">Welcome to LUXURY</h1>
            <h4 class="motto">
              <small>Your one stop to the home of your dreams.</small>
            </h4>
          </div>

          <SearchCard />
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Homepage;
