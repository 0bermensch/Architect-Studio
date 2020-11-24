import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";
import { NavLink } from "react-router-dom";

const HamburgerNav = () => {
  return (
    <ul className="header__hamburger">
      <li>
        <NavLink className="header__hamburger--item" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink className="header__hamburger--item" to="/about">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className="header__hamburger--item" to="contacts">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

const Header = () => {
  // const [openHamburger, setOpenHamburger] = useState(false);
  // const handleHamburger = setOpenHamburger(true);

  // if (openHamburger === true) {
  //   return { HamburgerNav };
  // }

  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} aalt="logo" />
      </NavLink>
      <img className="header__hamburger" src={hamburger} alt="hamburger" />

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
