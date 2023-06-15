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
      <div className="fixed top-0 right-0 bottom-0 h-[100vh] w-[56%] bg-[#F8F8F8] z-30">
        <div className="h-[13rem] w-[13rem] rounded-full bg-[#054E124D] absolute blur-[500px] rounded-l-[40px] shadow my-4"></div>
      </div>
    </nav>
  );
};

export default NavBar;
