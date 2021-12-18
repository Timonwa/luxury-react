import React from "react";
import "./login.scss";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-cntr">
      <form action="/message.html" onsubmit="" className="login-form">
        <h3>LOGIN</h3>
        <div className="group1">
          <input
            className="email"
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <label className="email-lbl" htmlFor="email"></label>
          <input
            className="password"
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <label className="password-lbl" htmlFor="password"></label>
          <button className="signin-btn" type="submit">
            Login
          </button>
        </div>
        <div className="group2">
          {/* remember me checkbox */}
          <input className="rmmbr-me" type="checkbox" />
          <label htmlFor="form-check-input">remember me</label>
          {/* forgot password */}
          <p className="forgot-password">
            <Link to="/forgot-password">forgot password?</Link>
          </p>
        </div>
        <div className="group3">
          {/* sign up link  */}
          <p>
            not registered?{" "}
            <Link to="/signup" className="signup" href="/html/signup.html">
              Sign Up
            </Link>
          </p>
          {/* sign in/sign up using facebook, twitter or google */}
          <p>or sign in using</p>
          <p className="social-signin">
            <a href="https://example.com">
              <FaTwitter className="icon twitter-signin" />
            </a>
            <a href="https://example.com">
              <FaFacebook className="icon fb-signin" />
            </a>
            <a href="https://example.com">
              <FaGoogle className="icon google-signin" />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
