import React from "react";
import Footer from "../../../components/Footer/Footer";
import Login from "../../../components/forms/Login/Login";
import NavBar from "../../../components/NavBar/NavBar";
import "./LoginPage.scss"

const LoginPage = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])

  return (
    <div className="login-page">
      <NavBar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
