import React, { useEffect } from 'react'
import Footer from "../../../components/Footer/Footer";
import SignUp from "../../../components/forms/SignUp/SignUp";
import NavBar from "../../../components/NavBar/NavBar"
import "./SignUpPage.scss";


const SignUpPage = () => {
  useEffect(() => {
    window.scroll(0,0)
  }, [])

    return (
    <div className="signup-page">
      <NavBar />
      <SignUp />
      <Footer />
    </div>
  );
}

export default SignUpPage
