import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import "./ListingsPage.scss";

const ListingsPage = () => {
  return (
    <div className="listings-page">
      <NavBar />
      <header className="header-section">
        <div class="header-wrapper">
          <div class="header-space"></div>
          <SearchCard />
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default ListingsPage;
