import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        {/* webpage logo */}
        <div className="nav-bar__logo">
          <span>
            <NavLink to="/" className="nav-bar__NavLink">
              Luxury
            </NavLink>
          </span>
        </div>
        {/* webpage nav-bar__NavLinks */}
        <div className="nav-bar__NavLinks">
          <ul>
            <li>
              <NavLink to="/#about" className="nav-bar__NavLink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/listings" className="nav-bar__NavLink">
                Listings
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/signup" className="nav-bar__NavLink" >
                SignUp
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/login" className="nav-bar__NavLink">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
