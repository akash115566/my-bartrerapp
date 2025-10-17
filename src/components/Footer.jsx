import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "../style/footer.css"; // CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo / Company */}
        <div className="footer-brand">
          <img src="/bb6.jpeg" alt="Barter Media Logo" className="footer-logo" />
          <h2>Barter Media</h2>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/whatwe">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Subscribe</h3>
          <p>Get updates and offers from Barter Media</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
            <p>Add: Pooja Movie Creation, A-Block,Sector-63,Noida</p>
            <p>Email:Poojamoviecreation@gmail.com</p>
            <p>Mob:+91-1234567899</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Barter Media. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
