import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.scss";
import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const handlePassword = () => {
    setViewPassword(!viewPassword);
  };
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleSignUp = (data) => {
    alert(JSON.stringify(data));
  };

  const password = watch("userPassword");

  const registerOptions = {
    name: {
      required: "Name is required",
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be longer than 8 characters",
      },
      maxLength: {
        value: 20,
        message: "Password must be less than 20 characters",
      },
      pattern: {
        value: /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/,
        message:
          "Password must contain 1 lowercase, 1 uppercase, and 1 numeric character",
      },
    },
    confirmPassword: {
      required: "Confirm password is required",
      validate: (value) => value === password || "Passwords must match",
    },
    acceptTerms: {
      required: "You must accept the terms and conditions",
    },
  };

  return (
    <div className="form-cntr">
      <form className="signup-form" onSubmit={handleSubmit(handleSignUp)}>
        <h3>SIGN UP</h3>
        <div className="group1">
          <div className="form-input-group">
            <label className="form-input-label" for="name" hidden></label>
            <input
              className="form-input"
              type="text"
              placeholder="name"
              {...register("userName", registerOptions.name)}
            />
          </div>
          <p className="error-message">
            {errors.userName && errors.userName.message}
          </p>
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
            <label
              className="form-input-label"
              for="confirm-password"
              hidden></label>
            <input
              className="form-input"
              type={!confirmPassword ? "password" : "text"}
              placeholder="confirm password"
              {...register("confirmPassword", registerOptions.confirmPassword)}
            />
            {!confirmPassword ? (
              <FaEyeSlash
                className="icon view-password"
                onClick={handleConfirmPassword}
              />
            ) : (
              <FaEye
                className="icon view-password"
                onClick={handleConfirmPassword}
              />
            )}
          </div>
          <p className="error-message">
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>

          <div className="form-input-group">
            <button className="signup-btn" type="submit">
              Sign Up
            </button>
          </div>
        </div>

        <div className="group2-signup">
          {/* terms and conditions checkbox */}
          <div className="form-input-group">
            <div className="terms">
              <input
                className="terms"
                type="checkbox"
                {...register("acceptTerms", registerOptions.acceptTerms)}
              />
              <label for="acceptTerms">
                I accept the{" "}
                <Link className="terms-cons" to="">
                  terms and conditions
                </Link>{" "}
                and{" "}
                <Link className="privacy-policy" to="">
                  privacy policy
                </Link>
              </label>
            </div>
            <p className="error-message">
              {errors.acceptTerms && errors.acceptTerms.message}
            </p>
          </div>

          <div className="form-input-group">
            {/* <!-- radio buttons services --> */}
            <div className="our-services">
              <span className="">I am: </span>
              <input
                className="signIn-radio"
                type="radio"
                value="looking"
                checked
                {...register("userService")}
              />
              <label className="">looking for accommodation.</label>

              <input
                className="signIn-radio"
                type="radio"
                value="offering"
                {...register("userService")}
              />
              <label className="">offering accommodation.</label>
            </div>
          </div>
        </div>

        <div className="group3">
          {/* <!-- sign up link --> */}
          <p>
            already registered?
            <Link className="signin" to="/login">
              {" "}
              Sign In
            </Link>
          </p>
          {/* <!-- sign in/sign up using facebook, twitter or google --> */}
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

export default SignUp;
