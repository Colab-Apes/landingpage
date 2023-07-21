import React, { useState } from "react";
import img1 from "../../assets/ModalImages/sidebar.png";
import logo from "../../assets/ModalImages/logo.png";

import { Lock, Message } from "react-iconly";
import google from "../../assets/ModalImages/social/Google logo.png";
import facebook from "../../assets/ModalImages/social/Facbook.png";
import apple from "../../assets/ModalImages/social/Vector.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Signup = ({
  setopenOtpmodalprop,
  setopensignupmodalprop,
  opensignupmodalprop,
  setsigninmodalprop,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  return (
    <div
      className={
        opensignupmodalprop
          ? "flex flex-col  w-full  lg:flex-row lg:gap-x-5  justify-center lg:justify-between h-full items-center   "
          : "hidden"
      }
    >
      <div className="w-full h-full lg:flex  justify-center hidden   lg:py-5 lg:rounded-[40px] ">
        <img src={img1} alt="" className=" object-cover lg:rounded-[40px] " />
      </div>
      <div className="flex flex-col  w-full justify-evenly h-full items-center  sm:w-[19rem] lg:w-full lg:h-full md:w-full md:h-full ">
        <div className=" flex flex-col justify-center items-center">
          <img
            src={logo}
            alt=""
            className="w-[5rem] sm:w-[6rem] object-contain "
          />
          <p className="text-[#555555] font-bold text-center mt-1 md:mt-4 lg:mt-1">
            Sign up to Get Started
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setopensignupmodalprop(false);
            setopenOtpmodalprop(true);
          }}
          className="w-full relative flex flex-col justify-between gap-y-4 mt-2 md:gap-y-4 text-sm"
          action=""
        >
          <div className="relative   ">
            <span>
              {" "}
              <Message
                set="curved"
                primaryColor="#999999"
                className="inset-y-[2rem] left-1 absolute px-[0.2rem] "
              />
            </span>
            <label htmlFor="emaile" className="block font-bold">
              Email
            </label>
            <input
              type="email"
              id="emaile"
              className="w-full py-2 bg-[#FFFFFF] rounded-[5px] font-lato px-8 mt-1 border focus:border-[#3B8004] border-[#999999] focus:outline-none"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="relative   md:mt-0 lg:mt-4">
            <span>
              <Lock
                set="curved"
                primaryColor="#999999"
                className="absolute inset-y-[2rem] left-1 px-[0.2rem]"
              />
            </span>
            <label htmlFor="password" className="block font-bold">
              Create password
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="w-full py-2 bg-[#FFFFFF] rounded-[5px] px-8 mt-1 border border-[#999999] focus:border-[#3B8004] focus:outline-none"
              placeholder="● ● ● ● ● ● "
            />

            {isPasswordVisible ? (
              <MdOutlineVisibilityOff
                onClick={() => setisPasswordVisible(!isPasswordVisible)}
                className="absolute inset-y-[2rem] right-1 px-[0.2rem] text-2xl text-[#333333]"
              />
            ) : (
              <MdOutlineVisibility
                onClick={() => setisPasswordVisible(!isPasswordVisible)}
                className="absolute inset-y-[2rem] right-1 px-[0.2rem] text-2xl text-[#333333]"
              />
            )}
          </div>

          <div className="flex items-start gap-x-3 mt-0  lg:mt-4 font-normal text-sm">
            <input
              type="checkbox"
              className="accent-[#3B8004] hover:accent-[#3B8004] font-lato"
            />
            <p className="text-[#999999]">
              By registering, you are agreeing with our{" "}
              <span className="underline text-[#3B8004]">Terms of Use </span>
              and{" "}
              <span className="underline text-[#3B8004]">Privacy Policy</span>
            </p>
          </div>
          <button className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] rounded-[10px] h-[2.6rem] lg:mt-4  text-white ">
            Verify email
          </button>
        </form>{" "}
        <p className="text-[#999999] text-center text-sm mt-2">
          Or Continue with
        </p>
        <div className="flex flex-col w-full  md:mt-0 lg:mt-0">
          <div className="flex justify-evenly mt-4 w-full gap-x-4 lg:gap-x-0  lg:mt-0">
            <div className="flex justify-center cursor-pointer items-center h-[2.4rem] w-full  sm:w-[6rem] border border-solid border-[#DDDDDD] rounded-[10px]">
              <img src={google} alt="" />
            </div>{" "}
            <div className="flex justify-center cursor-pointer items-center h-[2.4rem] w-full  sm:w-[6rem] border border-solid border-[#DDDDDD] rounded-[10px]">
              <img src={facebook} alt="" />
            </div>{" "}
            <div className="flex justify-center cursor-pointer items-center h-[2.4rem] w-full  sm:w-[6rem] border border-solid border-[#DDDDDD] rounded-[10px]">
              <img src={apple} alt="" />
            </div>
          </div>
          <div className="mt-2  md:mt-8 lg:mt-4 text-sm">
            <p className=" text-center">
              <span className="text-[#999999]">Already have an account?</span>
              <p
                onClick={() => {
                  setopensignupmodalprop(false);
                  setsigninmodalprop(true);
                }}
                className="text-[#054E12] font-bold cursor-pointer ml-1"
                href="/"
              >
                Sign In
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
