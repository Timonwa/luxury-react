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
  } = useForm({
    mode: "onTouched",
  });

  const handleLogin = (event, data) => {
    event.preventDefault();
    console.log("data:", data);
    alert(
      `userEmail: "${data.userEmail}" \n
      userPassword: "${data.userPassword}" \n
      remember user: "${data.rmmbrUser}"`
    );
  };

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email",
      },
    },
    password: { required: "Password is required" },
  };

  return (
    <div className="form-cntr">
      <form onSubmit={handleSubmit(handleLogin)} className="login-form">
        <h3>LOGIN</h3>
        <div className="group1">
          <label className="email-lbl" for="email" hidden></label>
          <input
            className="email"
            type="email"
            placeholder="email"
            {...register("userEmail", registerOptions.email)}
          />
          <p className="error-message">
            {errors.userEmail && errors.userEmail.message}
          </p>

          <label className="password-lbl" for="password" hidden></label>
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
          <label for="form-check-input">remember me</label>
          
          {/* forgot password */}
          <p className="forgot-password">
            <Link to="/forgot-password">forgot password?</Link>
          </p>
        </div>

        <div className="group3">
          {/* sign up link  */}
          <p>
            not registered?{" "}
            <Link to="/signup" className="signup">
              Sign Up
            </Link>
          </p>
          {/* sign in/sign up using facebook, twitter or google */}
          <p>or sign in using</p>
          <p className="social-signin">
            <a className="twitter-signin" href="https://example.com">
              <FaTwitter className="icon" />
            </a>
            <a className="fb-signin" href="https://example.com">
              <FaFacebook className="icon" />
            </a>
            <a className="google-signin" href="https://example.com">
              <FaGoogle className="icon" />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
