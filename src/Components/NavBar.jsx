import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/logo.svg";
import "../App.css";
const NavBar = () => {
  return (
    <nav className="flex justify-between  pt-8">
      <img src={logo} alt="" className="object-contain" />
      <div className="text-lg lg:flex gap-x-3 items-center hidden">
        <button className=" text-main rounded-2xl  w-[8rem] h-[2rem] font-bold">
          Sign in
        </button>
        <button className="grad rounded-2xl  w-[8rem] h-[3rem] text-white hover:text-main  font-bold">
          Sign up
        </button>
      </div>
      <BiMenuAltRight className="text-4xl text-main lg:hidden " />
    </nav>
  );
};

export default NavBar;
