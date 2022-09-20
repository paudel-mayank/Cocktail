import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-link-title">
        <img src={logo} alt="site-logo" />
        <h3 className="site-title"> Cocktail</h3>
      </Link>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/" className="nav-link-title">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/about" className="nav-link-title">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
