import React, { useState } from "react";
import img from "../../assets/ModalImages/authbg.png";
import img1 from "../../assets/ModalImages/sidebar.png";
import logo from "../../assets/ModalImages/logo.png";
import { TfiClose } from "react-icons/tfi";
import { Lock, Message } from "react-iconly";
import google from "../../assets/ModalImages/social/Google logo.png";
import facebook from "../../assets/ModalImages/social/Facbook.png";
import apple from "../../assets/ModalImages/social/Vector.svg";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const Signup = ({
  setopenOtpmodalprop,
  setopensignupmodalprop,
  opensignupmodalprop,
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);

  return (
    <div
      className={
        opensignupmodalprop ? "grid lg:grid-cols-2 gap-x-10" : "hidden"
      }
    >
      <img
        src={img1}
        alt=""
        className=" object-cover hidden lg:block lg:h-[30rem] xl:h-[30rem] rounded-2xl"
      />
      <div className="flex flex-col items-center w-[19rem] h-[30rem] md:w-full md:h-full">
        <img
          src={logo}
          alt=""
          className="w-[5rem] sm:w-[6rem] object-contain "
        />
        <p className="text-[#555555] font-bold text-center mt-1 md:mt-4 lg:mt-1">
          Sign up to Get Started
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setopensignupmodalprop(false);
            setopenOtpmodalprop(true);
          }}
          className="w-full relative flex flex-col  justify-evenly   text-sm"
          action=""
        >
          <div className="relative  mt-4 md:mt-8 lg:mt-4">
            <span>
              {" "}
              <Message
                set="curved"
                primaryColor="#999999"
                className="inset-y-[2rem] left-1 absolute px-[0.2rem] "
              />
            </span>
            <label htmlFor="email" className="block font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-2 bg-[#FFFFFF] rounded-[5px] font-lato px-8 mt-1 border border-[#999999] focus:outline-none"
              placeholder="johndoe@email.com"
            />
          </div>
          <div className="relative  mt-4 md:mt-8 lg:mt-4">
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
              className="w-full py-2 bg-[#FFFFFF] rounded-[5px] px-8 mt-1 border border-[#999999] focus:outline-none"
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

          <div className="flex items-start gap-x-3 mt-4 font-normal text-sm">
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
          <button className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-4  text-white ">
            Verify email
          </button>
        </form>{" "}
        <div className="flex flex-col w-full mt-4 md:mt-8 lg:mt-4">
          <p className="text-[#999999] text-center text-sm">Or Continue with</p>
          <div className="flex justify-evenly mt-4">
            <div className="flex justify-center cursor-pointer items-center h-[2.4rem] w-[6rem] border border-solid border-[#DDDDDD] rounded-[10px]">
              <img src={google} alt="" />
            </div>{" "}
            <div className="flex justify-center cursor-pointer items-center h-[2.4rem] w-[6rem] border border-solid border-[#DDDDDD] rounded-[10px]">
              <img src={facebook} alt="" />
            </div>{" "}
            <div className="flex justify-center cursor-pointer items-center h-[2.4rem] w-[6rem] border border-solid border-[#DDDDDD] rounded-[10px]">
              <img src={apple} alt="" />
            </div>
          </div>
          <div className="mt-6  md:mt-8 lg:mt-4 text-sm">
            <p className=" text-center">
              <span className="text-[#999999]">Already have an account?</span>
              <span className="text-[#054E12] font-bold"> Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
