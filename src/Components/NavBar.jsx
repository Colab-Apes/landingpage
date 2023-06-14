import React from "react";
import logo from "../assets/logo.svg";
import "../App.css";
const NavBar = () => {
  return (
    <nav className="flex justify-between font-lato mt-8">
      <img src={logo} alt="" className="object-contain" />
      <div className="text-lg flex gap-x-3 items-center">
        <button className=" text-main rounded-2xl  w-[8rem] h-[2rem] font-bold">
          Sign in
        </button>
        <button className="grad rounded-2xl  w-[8rem] h-[2rem] text-white  font-bold">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
