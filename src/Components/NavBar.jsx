import React from "react";
import logo from "../assets/logo.svg";
import "../App.css";
const NavBar = () => {
  return (
    <nav className="flex justify-between font-lato">
      <img src={logo} alt="" />
      <div className="na">
        <button className=" text-main rounded-2xl  w-[10rem] h-[2rem]">
          Sign in
        </button>
        <button className="grad rounded-2xl  w-[10rem] h-[2rem] text-white font-">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
