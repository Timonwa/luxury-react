import React from "react";
import "./NotFound.scss";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const NotFound = () => {
  return (
    <section className="notfound-page">
      <NavBar />
      <div className="notfound-message">Page Not Found</div>;
      <ChatBubble />
      <Footer />
    </section>
  );
};

export default NotFound;
