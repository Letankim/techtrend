import React from "react";

import "./style.css";

Navigation.propTypes = {};

function Navigation(props) {
  return (
    <nav className="navbar-basic">
      <ul className="nav-list">
        <li className="nav-item active">
          <a href="#" title="Home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" title="About" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" title="Services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" title="Pricing" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" title="Contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
