import React from "react";
import "./login.scss";
import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Login = () => {
  return (
    <div className='form-cntr'>
      <form action='/message.html' onsubmit='' className='login-form'>
        <h3>LOGIN</h3>
        <div className='group1'>
          <input
            className='email'
            name='email'
            type='email'
            placeholder='email'
            required
          />
          <label className='email-lbl' htmlFor='email'></label>
          <input
            className='password'
            name='password'
            type='password'
            placeholder='password'
            required
          />
          <label className='password-lbl' htmlFor='password'></label>
          <button className='signin-btn' type='submit'>
            Login
          </button>
        </div>
        <div className='group2'>
          {/* remember me checkbox */}
          <input className='rmmbr-me' type='checkbox' />
          <label htmlFor='form-check-input'>remember me</label>
          {/* forgot password */}
          <p className='forgot-pswd'>
            <a href='#'>forgot password?</a>
          </p>
        </div>
        <div className='group3'>
          {/* sign up link  */}
          <p>
            not registered?{" "}
            <a className='signup' href='/html/signup.html'>
              Sign Up
            </a>
          </p>
          {/* sign in/sign up using facebook, twitter or google */}
          <p>or sign in using</p>
          <p className='social-signin'>
            <a>
              <FaTwitter className='icon twitter-signin' />
            </a>
            <a>
              <FaFacebook className='icon fb-signin' />
            </a>
            <a>
              <FaGoogle className='icon google-signin' />
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
