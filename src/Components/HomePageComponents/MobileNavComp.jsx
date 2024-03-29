import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/logo.svg";
import sidenavlogo from "../../assets/homepageicons/sidenavimages/logo.png";
import avatar from "../../assets/homepageicons/sidenavimages/avatar.png";
import award from "../../assets/homepageicons/sidenavimages/award.svg";
import { TfiClose } from "react-icons/tfi";
import {
  add,
  profile,
  project,
  learning,
  settings,
  help,
  signout,
} from "../../assets/homepageicons/sidenavimages/listtileimages/BulkImport";
import "../../App.css";

const MobileNavComp = () => {
  const [opensidenav, setopensidenav] = useState(false);

  return (
    <div>
      <nav className="flex lg:hidden px-4 justify-between fixed bg-white top-0 w-screen z-20 items-center min-h-[10vh] sm:pt-8 pt-3 lg:pt-0">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt=""
            className="object-contain w-[10rem]  sm:w-[18rem] z-[3] lg:w-[14rem]"
          />
        </a>

        <BiMenuAltRight
          onClick={() => setopensidenav(true)}
          className="text-5xl sm:text-6xl text-[#3B8004] lg:hidden"
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
              ? "fixed top-0 font-lato right-0 duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px] lg:hidden"
              : "fixed top-0 font-lato right-[-100%] duration-500 ease-in-out bottom-0 h-[100vh] w-[75%] sm:w-[60%] px-5 sm:px-16 md:px-20 pt-3 sm:pt-10 bg-[#F8F8F8] bg-sidenav bg-cover z-30 rounded-l-[20px] lg:hidden"
          }
        >
          {/* <div className="blur-[250px] bg-[rgba(194,_106,_170,_0.30)] absolute h-20 w-20"></div> */}
          <div className="flex w-full justify-between items-center mt-3 ">
            <img
              src={sidenavlogo}
              alt=""
              className="object-contain scale-75 z-[90] w-[30rem]"
            />
            <TfiClose
              onClick={() => setopensidenav(false)}
              className="text-4xl text-[#999999]"
            />
          </div>

          <div className="flex flex-col items-center mt-16 px-5 ">
            <img src={avatar} alt="" />
            <p className="font-semibold text-xl mt-1"> Sarah Lopez</p>
            <div className="flex gap-2 rounded-[10px] p-1 px-4 mt-1 items-center bg-[rgba(78,_175,_0,_0.10)]">
              <img src={award} alt="" className="object-contain w-[1.3rem]" />
              <p className="font-semibold text-[#4EAF00] text-lg ">Founder</p>
            </div>

            <div className="flex flex-col text-left w-full gap-y-6 mt-8">
              <div className="flex items-center mt-2">
                <img
                  src={add}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>Create New Project</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={profile}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>My Profile</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={project}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>My Projects</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={learning}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>My Learning Pool</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={settings}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>Settings</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={help}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>Help</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src={signout}
                  alt=""
                  className="object-contain w-[1.2rem] mr-2"
                />
                <p>Sign Out </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavComp;
