import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Ensure CSS is properly linked
import logo from "../image.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="CommunionHub Logo" />
      </div>

      Desktop Nav Links (Always Visible)
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      <div className={`mobile-nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
