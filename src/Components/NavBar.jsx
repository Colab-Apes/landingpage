import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/logo.svg";
import sidenavlogo from "../assets/sidenavlogo.png";
import { TfiClose } from "react-icons/tfi";
import "../App.css";
const NavBar = () => {
  const [opensidenav, setopensidenav] = useState(false);
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
      <BiMenuAltRight
        onClick={() => setopensidenav(true)}
        className="text-4xl text-main lg:hidden "
      />
      <div className="fixed top-0 right-0 bottom-0 h-[100vh] w-full bg-black/[25%] z-30 ">
        <div
          className={
            opensidenav
              ? "fixed top-0 right-0 bottom-0 h-[100vh] w-[70%] px-4 pt-3 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px]"
              : "fixed top-0 right-0 bottom-0 h-[100vh] w-[70%] px-4 pt-3 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px]"
          }
        >
          <div className="flex w-full justify-between items-center ">
            <img
              src={sidenavlogo}
              alt=""
              className="object-contain w-[10rem]"
            />
            <TfiClose
              onClick={() => setopensidenav(false)}
              className="text-2xl text-[#999999]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
