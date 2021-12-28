import React, { useState } from "react";
import "./Login.scss";
import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const handlePassword = () => {
    setViewPassword(!viewPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleLogin = (data) => {
    alert(JSON.stringify(data));
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
          <div className="form-input-group">
            <label className="form-input-label" for="email" hidden></label>
            <input
              className="form-input"
              type="email"
              placeholder="email"
              {...register("userEmail", registerOptions.email)}
            />
          </div>
          <p className="error-message">
            {errors.userEmail && errors.userEmail.message}
          </p>

          <div className="form-input-group">
            <label className="form-input-label" for="password" hidden></label>
            <input
              className="form-input"
              type={!viewPassword ? "password" : "text"}
              placeholder="password"
              {...register("userPassword", registerOptions.password)}
            />
            {!viewPassword ? (
              <FaEyeSlash
                className="icon view-password"
                onClick={handlePassword}
              />
            ) : (
              <FaEye className="icon view-password" onClick={handlePassword} />
            )}
          </div>
          <p className="error-message">
            {errors.userPassword && errors.userPassword.message}
          </p>

          <div className="form-input-group">
            <button className="signin-btn" type="submit">
              Login
            </button>
          </div>
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
