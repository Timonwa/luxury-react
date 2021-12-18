import React from "react";
import "./login.scss";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => console.log("data:", data);

  const registerOptions = {
    email: { required: "Email is required" },
    password: { required: "Password is required" },
  };

  return (
    <div className="form-cntr">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="login-form">
        <h3>LOGIN</h3>
        <div className="group1">
          <label className="email-lbl" htmlFor="email" hidden></label>
          <input
            className="email"
            type="email"
            placeholder="email"
            {...register("userEmail", registerOptions.email)}
          />
          <p className="error-message">
            {errors.userEmail && errors.userEmail.message}
          </p>

          <label className="password-lbl" htmlFor="password" hidden></label>
          <input
            className="password"
            type="password"
            placeholder="password"
            {...register("userPassword", registerOptions.password)}
          />
          <p className="error-message">
            {errors.userPassword && errors.userPassword.message}
          </p>

          <button className="signin-btn" type="submit">
            Login
          </button>
        </div>
        <div className="group2">
          {/* remember me checkbox */}
          <input
            className="rmmbr-me"
            type="checkbox"
            {...register("rmmbrUser")}
          />
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
