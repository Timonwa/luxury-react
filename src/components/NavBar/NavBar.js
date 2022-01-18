import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        {/* webpage logo */}
        <div className="nav-bar__logo">
          <span>
            <Link to="/" className="nav-bar__link">
              Luxury
            </Link>
          </span>
        </div>
        {/* webpage nav-bar__links */}
        <div className="nav-bar__links">
          <ul>
            <li>
              <Link to="/about" className="nav-bar__link">
                About
              </Link>
            </li>
            <li>
              <Link to="/listings" className="nav-bar__link">
                Listings
              </Link>
            </li>
            {/* <li>
              <Link to="/signup" className="nav-bar__link" >
                SignUp
              </Link>
            </li> */}
            <li>
              <Link to="/login" className="nav-bar__link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
