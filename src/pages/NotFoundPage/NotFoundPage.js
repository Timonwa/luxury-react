import React from "react";
import "./NotFoundPage.scss";
import Footer from "../../components/Footer/Footer";
import NotFound from "../../components/NotFound/NotFound";
import NavBar from "../../components/NavBar/NavBar";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const NotFoundPage = () => {
  return (
    <section className="notfound-page">
      <NavBar />
      <NotFound />
      <ChatBubble />
      <Footer />
    </section>
  );
};

export default NotFoundPage;
