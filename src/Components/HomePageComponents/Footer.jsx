import React from "react";
import "../../App.css";
import ape from "../../assets/homepageicons/footerimages/apehead.png";
import logo from "../../assets/homepageicons/footerimages/footerlogo.png";
import SocialLogo from "./SocialLogo";
import { CgCopyright } from "react-icons/cg";
const Footer = () => {
  return (
    <div>
      <footer className=" h-[28rem] px-10 w-full rounded-[15px]  graid relative mb-4  ">
        <img
          src={ape}
          alt=""
          className="top-0 absolute object-contain w-[24.2rem] rounded-l-[15px] left-0 z-[1] "
        />
        <div className="grid grid-cols-4 z-[10] text-white pt-8 h-full gap-x-8 ">
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
          <div className="flex flex-col items-center">
            <img src={logo} alt="" />
            <a className="mt-5">help@colabapes.com</a>
            <SocialLogo className="mt-2" />
            <button className="px-12 py-8 mt-5 text-main bg-white rounded-[30px] font-lato font-bold text-xl">
              Contact Us
            </button>
          </div>
          <div className="h-[0.1rem] stroke w-full bg-white z-[3] col-span-4 "></div>
          <div className="col-span-4 flex justify-center items-center">
            <div className="flex items-center">
              {" "}
              <div className="md">
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
