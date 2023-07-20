import React from "react";
// import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/logo.svg";
import icon from "../../assets/homepageicons/images/group-50.svg";
import avatar from "../../assets/homepageicons/images/avatar.png";
import { BsChevronDown } from "react-icons/bs";
import MobileNavComp from "./MobileNavComp";
import { useState } from "react";
import TabHook from "../../Hooks/TabHook";
const NavBarComp = ({ tabs, checkindex, setcheckindex }) => {
  return (
    <div>
      <nav className="font-lato lg:px-6 xl:px-10 bg-white z-20 hidden lg:flex justify-between items-center  fixed top-0  h-[9rem] w-full ">
        <a href="/">
          <img
            src={logo}
            alt=""
            className="object-contain w-[10rem] md:w-[15rem] lg:w-[14rem]"
          />
        </a>
        <div className=" z-[20]  flex items-center gap-x-20 text-xl text-center mt-8">
          {tabs.map((tab, index) => (
            <p
              onClick={() => setcheckindex(index)}
              key={index}
              className={
                index === checkindex
                  ? `border-b-2  border-b-[#054E12] ${
                      index == 0
                        ? "w-[3.7rem] "
                        : "w-[8rem] duration-500 ease-linear"
                    } pb-10 cursor-pointer`
                  : `text-[#33333380]  pb-10 cursor-pointer border-b-2 duration-200 ease-linear${
                      index == 0 ? "w-[3.7rem]" : "w-[8rem]"
                    }  border-b-white`
              }
            >
              {tab}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-x-14">
          <img src={icon} alt="" className="w-[4rem] object-contain" />
          <div className="flex items-center gap-x-4 ">
            <img src={avatar} alt="" />
            <BsChevronDown />
          </div>
        </div>
      </nav>
      <MobileNavComp />
    </div>
  );
};

export default NavBarComp;
