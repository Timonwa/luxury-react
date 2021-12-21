import React from 'react'
import Footer from "../../components/Footer/Footer";
import SignUp from "../../components/signUp/SignUp";
import NavBar from "../../components/navBar/NavBar"
import "./signUpPage.scss";


const SignUpPage = () => {
	return (
    <div className="signup-page">
      <NavBar />
      <SignUp />
      <Footer />
    </div>
  );
}

export default SignUpPage
