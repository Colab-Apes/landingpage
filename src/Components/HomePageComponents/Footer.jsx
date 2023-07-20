import React from "react";
import "../../App.css";
import ape from "../../assets/homepageicons/footerimages/apehead.png";
import logo from "../../assets/homepageicons/footerimages/footerlogo.png";
import SocialLogo from "./SocialLogo";
import { CgCopyright } from "react-icons/cg";
const Footer = () => {
  return (
    <div>
      <footer className=" min-h-[30rem] font-lato px-5 lg:px-10 w-full rounded-[15px]  graid relative mb-4 z-[1]  ">
        <img
          src={ape}
          alt=""
          className="bottom-0 lg:top-0 absolute object-contain w-[26rem] rounded-l-[15px] left-0 z-[1] "
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 z-[10] text-white pt-10 h-full gap-x-8 gap-y-10 lg:gap-y-0 ">
          <div className="flex flex-col w-fit mx-auto   text-sm text-left z-[3] gap-y-5">
            <p className="text-lg font-bold ">Co_lab Apes</p>
            <p className=" mt-5">About Us</p>
            <p className="ss">About Us</p>
            <p className="ss">Privacy policy</p>
            <p className="ss">Terms of Use</p> <p className="ss">Legal</p>
          </div>
          <div className="flex flex-col w-fit mx-auto   text-sm text-left z-[3] gap-y-5">
            <p className="text-lg font-bold">Features</p>
            <p className=" mt-5">Home</p>
            <p className="ss">Top 10 projects</p>
            <p className="ss">Learning pool</p> <p className="ss">Join </p>
            <p className="ss">Create project</p>
          </div>
          <div className="flex flex-col w-fit mx-auto   text-sm text-left z-[3] gap-y-5">
            <p className="text-lg font-bold">Learning pool</p>
            <p className="mt-5">Analytics</p>
            <p className="ss">Artificial intelligence</p>{" "}
            <p className="ss">Animation </p>
            <p className="ss">Coding</p>
            <p className="ss">Content writing</p>
            <p className="ss">Data science</p>
            <p className="ss">Video editting</p>
            <p className="ss">3D modelling</p>
          </div>
          <div className="flex flex-col items-center z-[3] text-sm">
            <img src={logo} alt="" className="z-[2]" />
            <a className="mt-5">help@colabapes.com</a>
            <SocialLogo className="mt-2" />
            <button className=" w-full lg:px-12 py-8 mt-8 z-[3] text-main bg-white rounded-[30px] font-lato font-bold text-xl">
              Contact Us
            </button>
          </div>
          <div className="h-[0.1rem] rounded w-full bg-white z-[3] col-span-2 lg:col-span-4 "></div>
          <div className="col-span-2 lg:col-span-4 flex justify-center items-center">
            <div className="flex items-center">
              {" "}
              <div className="text-2xl">
                <CgCopyright />
              </div>
              <div className="ss">2023, all rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
