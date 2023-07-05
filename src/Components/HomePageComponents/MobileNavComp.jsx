import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/logo.svg";
// import sidenavlogo from "../assets/sidenavlogo.png";
import { TfiClose } from "react-icons/tfi";
import "../../App.css";

const MobileNavComp = () => {
  return (
    <div >
      <nav className="flex lg:hidden px-4 justify-between fixed bg-white top-0 w-screen items-center min-h-[10vh] sm:pt-8 pt-3 lg:pt-0">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt=""
            className="object-contain w-[10rem] md:w-[15rem] lg:w-[14rem]"
          />
        </a>

        <BiMenuAltRight
          // onClick={() => setopensidenav(true)}
          className="text-5xl md:text-5xl text-main lg:hidden"
        />
      </nav>
    
    </div>
  );
};

export default MobileNavComp;
