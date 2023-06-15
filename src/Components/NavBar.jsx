import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/logo.svg";
import "../App.css";
const NavBar = () => {
  return (
    <nav className="flex justify-between  md:pt-8 pt-3">
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
      <div className="fixed top-0 right-0 bottom-0 h-[100vh] w-full bg-black/[25%] z-30 ">
        <div className="fixed top-0 right-0 bottom-0 h-[100vh] w-[58%] bg-[#F8F8F8] z-30 rounded-l-[20px]">
          <div className="h-[20rem] w-[20rem] rounded-full bg-[#054E124D]/[30%] t absolute blur-[500px]  "></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
