import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import RegisterCTA from "../../components/RegisterCTA/RegisterCTA";
import "./PostPage.scss";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const PostPage = () => {
  return (
    <div className="listings-page">
      <NavBar />
      <header className="header-section">
        <div className="header-wrapper">
          <div className="header-space"></div>
          <SearchCard />
        </div>
      </header>
      <RegisterCTA />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default PostPage;
