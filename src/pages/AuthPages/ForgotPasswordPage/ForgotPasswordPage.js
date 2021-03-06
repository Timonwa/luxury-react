import React, { useEffect } from "react";
import ForgotPassword from "../../../components/forms/ForgotPassword/ForgotPassword";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import "./ForgotPasswordPage.scss";

const ForgotPasswordPage = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])

  return (
    <div className="forgot-password-page">
      <NavBar />
      <ForgotPassword />
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
