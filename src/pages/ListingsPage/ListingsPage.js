import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import Listings from "../../components/Listings/Listings";
import RegisterCTA from "../../components/RegisterCTA/RegisterCTA";
import "./ListingsPage.scss";
import ChatBubble from "../../components/ChatBubble/ChatBubble";
import { posts } from "../../database/db";

const ListingsPage = () => {
  return (
    <div className="listings-page">
      <NavBar />
      <header className="header-section">
        <div className="header-wrapper">
          <div className="header-space"></div>
          <SearchCard posts={posts} />
        </div>
      </header>
      <Listings posts={posts} />
      <RegisterCTA />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default ListingsPage;
