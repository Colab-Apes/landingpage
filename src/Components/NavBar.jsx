import React from "react";
import logo from "../assets/logo.svg";
const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <img src={logo} alt="" />
    </nav>
  );
};

export default NavBar;
