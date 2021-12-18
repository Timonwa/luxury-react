import React from "react";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/login/Login";
import NavBar from "../../components/navBar/NavBar";
import "./loginPage.scss"

const LoginPage = () => {
  return (
    <div className="login-page">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
