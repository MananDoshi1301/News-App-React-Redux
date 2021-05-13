import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import "./Nav.css";
import appLogo from "../appLogo.png";

const Nav = () => {
  const [isScrolled, handleIsScrolled] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleIsScrolled(true);
    } else {
      handleIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${isScrolled ? "nav_dark nav_brandScrolled" : ""}`}>
      <Link to={'/'} className="nav_content">
        <img className={`nav_logo`} src={appLogo} alt="" />
        <div className={`nav_brand`}>News Express</div>
      </Link>
    </div>
  );
};

export default Nav;
