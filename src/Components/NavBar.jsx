import React from "react";
import logo from "../assets/logo.svg";
const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <img src={logo} alt="" />
      <div className="na">
        <button className="text">Sign in</button>
      </div>
    </nav>
  );
};

export default NavBar;
