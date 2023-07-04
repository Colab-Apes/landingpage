import React from "react";
// import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/logo.svg";
import icon from "../../assets/homepageicons/images/group-50.svg";
import avatar from "../../assets/homepageicons/images/avatar.png";
import { BsChevronDown } from "react-icons/bs";
const NavBarComp = () => {
  return (
    <nav className="font-lato bg-white z-20 flex justify-between items-center shadow-xl fixed top-0  h-[8rem] w-full px-10">
      <a href="/">
        <img
          src={logo}
          alt=""
          className="object-contain w-[10rem] md:w-[15rem] lg:w-[14rem]"
        />
      </a>
      <div className=" z-[20]  flex items-center gap-x-20 text-xl text-center mt-4">
        <p className=" border-b-4 border-b-[#054E12] w-[4rem] pb-4 cursor-pointer">
          Home
        </p>
        <p className="text-[#33333380]  pb-4 cursor-pointer">Learning pool</p>{" "}
        <p className=" text-[#33333380]  pb-4 cursor-pointer">Create project</p>
      </div>
      <div className="flex items-center gap-x-6">
        <img src={icon} alt="" className="w-[4rem] object-contain" />
        <div className="flex items-center gap-x-4 ">
          {" "}
          <img src={avatar} alt="" />
          <BsChevronDown />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComp;
