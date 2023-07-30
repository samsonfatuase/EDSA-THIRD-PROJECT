import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/home" className="title">
      Ekiti Virtual <br /> 
        Learning Hub
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/service">Service</NavLink>
        </li>
      <li>
          <NavLink to="/bundle">Bundles</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        
        <li>
        <NavLink to="/signup">Sign Up</NavLink> 
        </li>
      </ul>
    </nav>
  );
};