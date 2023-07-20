import React from "react";
import "../../App.css";
import ape from "../../assets/homepageicons/footerimages/apehead.png";
import logo from "../../assets/homepageicons/footerimages/footerlogo.png";
import SocialLogo from "./SocialLogo";
import { CgCopyright } from "react-icons/cg";
const Footer = () => {
  return (
    <div>
      <footer className=" font-lato min-h-[30rem]  px-5 lg:px-10 w-full rounded-[15px]  graid relative mb-4 z-[1] ">
        <img
          src={ape}
          alt=""
          className="bottom-0 lg:top-0 absolute object-contain w-[26rem] rounded-bl-[15px] lg:rounded-l-[15px] left-0 z-[1] "
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 z-[10] text-white pt-10 h-full gap-x-8 gap-y-10 lg:gap-y-0 ">
          <div className="flex flex-col w-fit mx-auto  text-sm lg:text-lg text-left z-[3] gap-y-5">
            <p className="text-lg font-bold ">Co_lab Apes</p>
            <p className="lg:mt-4 mt-2">About Us</p>
            <p className="">About Us</p>
            <p className="">Privacy policy</p>
            <p className="">Terms of Use</p> <p className="">Legal</p>
          </div>
          <div className="flex flex-col w-fit mx-auto    text-sm lg:text-lg text-left z-[3] gap-y-5">
            <p className="text-lg font-bold">Features</p>
            <p className="lg:mt-4 mt-2">Home</p>
            <p className="">Top 10 projects</p>
            <p className="">Learning pool</p> <p className="">Join </p>
            <p className="">Create project</p>
          </div>
          <div className="flex flex-col w-fit mx-auto  text-sm lg:text-lg text-left z-[3] gap-y-5">
            <p className="text-lg font-bold">Learning pool</p>
            <p className="lg:mt-4 mt-2">Analytics</p>
            <p className="">Artificial intelligence</p>{" "}
            <p className="">Animation </p>
            <p className="">Coding</p>
            <p className="">Content writing</p>
            <p className="">Data science</p>
            <p className="">Video editting</p>
            <p className="">3D modelling</p>
          </div>
          <div className="flex flex-col items-center z-[3] text-sm">
            <img src={logo} alt="" className="z-[2]" />
            <p className="mt-5">help@colabapes.com</p>
            <SocialLogo className="mt-2" />
            <button className=" w-full lg:px-12 py-8 mt-8 z-[3] text-main bg-white rounded-[30px] font-lato font-bold text-xl">
              Contact Us
            </button>
          </div>
          <div className="h-[0.1rem] rounded w-full bg-white z-[3] col-span-2 lg:col-span-4 lg:mt-6 "></div>
          <div className="col-span-2 lg:col-span-4 flex justify-center items-center lg:mt-4 z-[3] mb-2">
            <div className="flex items-center">
              {" "}
              <div className="text-2xl">
                <CgCopyright />
              </div>
              <div className="">2023, all rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
