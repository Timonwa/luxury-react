import React, { useState } from "react";
import "./ForgotPassword.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
  const [sendLink, SetSendLink] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleSubmitForm = (data) => {
    SetSendLink(true);
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
  };

  return (
    <div className="form-cntr">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="forgot-password-form">
        <Link to="/login">
          <FaArrowLeft className="back-btn" />
        </Link>

        <h3>FORGOT PASSWORD?</h3>
        <p>Please enter the email registered to your account.</p>
        <div className="group1">
          <div className="form-input-group">
            <label className="form-input-label" htmlFor="email" hidden></label>
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
            <button className="send-link-btn" type="submit">
              {!sendLink ? "Send Link" : "Link Sent"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
