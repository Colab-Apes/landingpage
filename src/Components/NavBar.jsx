import React from "react";
import logo from "../assets/logo.svg";
import "./App.css";
const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <img src={logo} alt="" />
      <div className="na">
        <button className=" text-main ">Sign in</button>
        <button className="grad  text-main ">Sign up</button>
      </div>
    </nav>
  );
};

export default NavBar;
