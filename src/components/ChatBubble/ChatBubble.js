import React from "react";
import { FaComment } from "react-icons/fa";
import "./ChatBubble.scss"

const ChatBubble = () => {
  return (
    //   <!--* chat button -->
    <button className="chat-with-us">
      <a
        alt="button to chat with customer representative"
        href="https://wa.me"
        target="_blank"
        rel="noreferrer">
        <FaComment className="chat-btn" />
      </a>
    </button>
  );
};

export default ChatBubble;
