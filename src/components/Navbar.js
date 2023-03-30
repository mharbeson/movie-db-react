import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className={`navbar__menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/movies/popular" onClick={handleLinkClick}>
              Popular Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies/top_rated" onClick={handleLinkClick}>
              Top Rated Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies/upcoming" onClick={handleLinkClick}>
              Upcoming Movies
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`hamburger__line ${isOpen ? "open" : ""}`}></div>
        <div className={`hamburger__line ${isOpen ? "open" : ""}`}></div>
        <div className={`hamburger__line ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
