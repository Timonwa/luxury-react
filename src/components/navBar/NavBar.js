import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div class="nav-bar__wrapper">
        {/* webpage logo */}
        <div class="nav-bar__logo">
          <span>
            <Link to="/" class="nav-bar__link">
              Luxury
            </Link>
          </span>
        </div>
        {/* webpage nav-bar__links */}
        <div class="nav-bar__links">
          <ul>
            <li>
              <Link to="/about" class="nav-bar__link">
                About
              </Link>
            </li>
            <li>
              <Link to="/listings" class="nav-bar__link">
                Listings
              </Link>
            </li>
            {/* <li>
              <Link to="/signup" class="nav-bar__link" >
                SignUp
              </Link>
            </li> */}
            <li>
              <Link to="/login" class="nav-bar__link">
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
