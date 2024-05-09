import React, { useState } from "react";
import logo from "../../images/logo.png";
import Navigation from "./components/Navigation";

import "./style.css";
import Contact from "./components/Contact";
import bar from "../../images/bar.png";
import remove from "../../images/remove.png";

Header.propTypes = {};

function Header(props) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="header">
      <a href="/" class="header__logo">
        <img src={logo} alt="Tech Trend" className="header__image" />
      </a>
      <div className="bar-button-menu hide-on-laptop">
        <img src={menu ? remove : bar} alt="Menu button" onClick={toggleMenu} />
      </div>
      <div
        className={`wrapper-navigation navigation-in-mobile ${
          menu ? "active" : ""
        }`}
      >
        <Navigation />
        <Contact menu={menu} />
      </div>
    </header>
  );
}

export default Header;
