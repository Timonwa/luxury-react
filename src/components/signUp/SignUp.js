import React from "react";
import { Link } from "react-router-dom";
import "./signUp.scss";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const handleSignUp = (event, data) => {
    event.preventDefault();
    console.log("data:", data);
    alert(
      `userEmail: "${data.userEmail}" \n
      userPassword: "${data.userPassword}" \n
      remember user: "${data.rmmbrUser}"`
    );
  };

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 8,
        message: "Name must be longer than 8 characters",
      },
      maxLength: {
        value: 20,
        message: "Name must be less than 20 characters",
      },
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
      pattern: "",
    },
    confirmPassword: {
      required: "Confirm password is required",
    },
    acceptTerms: {
      required: "You must accept the terms and conditions",
    },
    userService: {
      required: "Please pick a service",
    },
  };

  return (
    <div className="form-cntr">
      <form className="signup-form" onSubmit={handleSubmit(handleSignUp)}>
        <h3>SIGN UP</h3>
        <div className="group1">
          <label className="name-lbl" for="name" hidden></label>
          <input
            className="name"
            type="text"
            placeholder="name"
            {...register("userName", registerOptions.name)}
          />
          <p className="error-message">
            {errors.userName && errors.userName.message}
          </p>

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

          <label
            className="confirm-password-lbl"
            for="confirm-password"
            hidden></label>
          <input
            className="confirm-password"
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword", registerOptions.confirmPassword)}
          />
          <p className="error-message">
            {errors.confirmPassword && errors.confirmPassword.message}
          </p>

          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </div>

        <div className="group2-signup">
          {/* terms and conditions checkbox */}
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

          {/* <!-- radio buttons services --> */}
          <div className="our-services">
            <span className="">I am: </span>
            <input
              className="signIn-radio"
              type="radio"
              value="looking"
              {...register("userService", registerOptions.userService)}
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
          <p className="error-message">
            {errors.userService && errors.userService.message}
          </p>
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
