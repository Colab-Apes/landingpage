import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/logo.svg";
// import sidenavlogo from "../assets/sidenavlogo.png";
import { TfiClose } from "react-icons/tfi";
import "../../App.css";

const NavBar = ({ changeValue }) => {
  const [opensidenav, setopensidenav] = useState(false);

  return (
    <nav className="flex justify-between items-center min-h-[10vh] sm:pt-8 pt-3 lg:pt-0">
      {/* Logo */}
      <a href="/">
        <img
          src={logo}
          alt=""
          className="object-contain w-[10rem] md:w-[15rem] lg:w-[14rem]"
        />
      </a>

      <div className="text-lg lg:flex gap-x-3 items-center hidden">
        {/* Sign In Button */}
        {/* <button className=" text-main rounded-[20px] text-[16px] w-[5.5rem] h-[2.5rem] font-bold">
          Sign in
        </button> */}

        {/* Sign Up Button */}
        <button
          onClick={() => changeValue(true)}
          className="grad rounded-[20px] text-[16px] w-[5.5rem] h-[2.5rem] text-white hover:text-main font-bold"
        >
          Sign up
        </button>
      </div>

      {/* Hamburger Menu Icon */}
      <BiMenuAltRight
        onClick={() => setopensidenav(true)}
        className="text-5xl md:text-5xl text-main lg:hidden"
      />

      {/* Background Overlay */}
      <div
        onClick={() => setopensidenav(false)}
        className={
          opensidenav
            ? "fixed top-0 right-0 bottom-0 h-[100vh] w-full bg-black/[25%] z-30 lg:hidden"
            : "hidden lg:hidden"
        }
      ></div>

      {/* Side Navigation */}
      <div
        className={
          opensidenav
            ? "fixed top-0 right-0 duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px] lg:hidden"
            : "fixed top-0 right-[-100%] duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px] lg:hidden"
        }
      >
        <div className="flex w-full justify-between items-center ">
          <img src={logo} alt="" className="object-cover w-[12rem] " />
          <TfiClose
            onClick={() => setopensidenav(false)}
            className="text-2xl text-[#999999]"
          />
        </div>

        <div className="flex flex-col mt-16 gap-y-10">
          {/* Signup Button */}
          <button
            onClick={() => {
              setopensidenav(false);
              changeValue(true);
            }}
            className="h-[3rem] w-full rounded-xl gradnav text-white font-semibold"
          >
            Signup
          </button>

          {/* Signin Button */}
          {/* <button className="h-[3rem] w-full rounded-xl text-main font-semibold">
            Signin
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
