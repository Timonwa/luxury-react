import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        {/* webpage logo */}
        <div className="nav-bar__logo">
          <NavLink to="/" className="nav-bar__NavLink">
            Luxury
          </NavLink>
        </div>
        {/* webpage nav-bar__NavLinks */}
        <div className="nav-bar__NavLinks">
          <ul>
            <li>
              <HashLink smooth to="/#about" className="nav-bar__NavLink">
                About
              </HashLink>
            </li>
            <li>
              <NavLink to="/listings" className="nav-bar__NavLink">
                Listings
              </NavLink>
            </li>
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
