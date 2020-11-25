import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const toggle = () => setNavIcon(!navIcon);

  let hamburgerNav;

  if (openNavMenu) {
    hamburgerNav = (
      <ul className="header__hamburgernav">
        <li>
          <NavLink className="header__hamburgernav--item" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className="header__hamburgernav--item" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="header__hamburgernav--item" to="contacts">
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </NavLink>
      <div
        onClick={() => toggle(!navIcon)}
        onClick={() => setOpenNavMenu(!openNavMenu)}
      >
        <img
          className="header__hamburger"
          src={navIcon ? hamburger : close}
          alt="hamburger"
        />
      </div>

      {hamburgerNav}

      <ul className="header__nav">
        <li>
          <NavLink className="header__nav--item" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className="header__nav--item" to="/about">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink className="header__nav--item" to="contacts">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
