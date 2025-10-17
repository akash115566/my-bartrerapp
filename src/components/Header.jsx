import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <img src="/bb6.jpeg" alt="Logo" className="logo" />

      <div className="nav-container">
        <div
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link to="/whatwe" onClick={() => setIsOpen(false)}>WHAT WE DO</Link>
          {/* <Link to="/product" onClick={() => setIsOpen(false)}>BARTER PRODUCT</Link>
          <Link to="/tvshow" onClick={() => setIsOpen(false)}>TV SHOW</Link>
          <Link to="/ott" onClick={() => setIsOpen(false)}>OTT PLATFORM</Link> */}
          {/* <Link to="/ipl" onClick={() => setIsOpen(false)}>IPL SHOW</Link> */}

          {/* SERVICE dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setServiceDropdown(true)}
            onMouseLeave={() => setServiceDropdown(false)}
          >
            <span className="dropdown-toggle">SERVICE ▾</span>
            {serviceDropdown && (
              <div className="dropdown-menu">
                <Link to="/service/ipl" onClick={() => setIsOpen(false)}>IPL</Link>
                <Link to="/service/ott" onClick={() => setIsOpen(false)}>OTT</Link>
                <Link to="/service/tvshow" onClick={() => setIsOpen(false)}>TV SHOW</Link>
                <Link to="/service/product" onClick={() => setIsOpen(false)}>BARTER PRODUCT</Link>
                  <Link to="/service/channel" onClick={() => setIsOpen(false)}>CHANNEL</Link>
                    <Link to="/service/founder" onClick={() => setIsOpen(false)}>FOUNDER</Link>
              </div>
            )}
          </div>
            <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
