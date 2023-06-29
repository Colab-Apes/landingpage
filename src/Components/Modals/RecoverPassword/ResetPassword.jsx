import React, { useState } from "react";

import password from "../../../assets/ModalImages/reset.png";
import logo from "../../../assets/ModalImages/logo.png";
import { Lock } from "react-iconly";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
const ResetPassword = ({ resetpasswordprop, setresetpasswordprop }) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [isconfirmPasswordVisible, setisconfirmPasswordVisible] =
    useState(false);
  return (
    <div
      className={
        resetpasswordprop
          ? "flex flex-col  w-full lg:grid lg:grid-cols-2 gap-x-10"
          : "hidden"
      }
    >
      <img
        src={password}
        alt=""
        className=" object-cover hidden lg:block lg:h-[30rem] xl:h-[30rem] rounded-2xl"
      />
      <div className="flex flex-col w-full items-center sm:w-[19rem] h-[30rem] md:w-full md:h-full">
        <img
          src={logo}
          alt=""
          className="w-[5rem] sm:w-[6rem] object-contain "
        />
        <div className="flex">
          {" "}
          <p className="text-[#555555] font-bold text-center mt-1 md:mt-4 lg:mt-2">
            Reset password
          </p>
        </div>
        <div className="mt-6 text-[#3B8004] text-sm font-bold">
          Reset password to regain access into your account
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // setopensignupmodalprop(false);
            // setopenOtpmodalprop(false);
            setresetpasswordprop(false);
          }}
          className="w-full relative flex flex-col  justify-evenly   text-sm mt-8"
          action=""
        >
          <div className="relative  mt-4 md:mt-8 lg:mt-4">
            <span>
              <Lock
                set="curved"
                primaryColor="#999999"
                className="absolute inset-y-[2rem] left-1 px-[0.2rem]"
              />
            </span>
            <label htmlFor="password" className="block font-bold">
              New password
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
          <div className="relative  mt-4 md:mt-8 lg:mt-4">
            <span>
              <Lock
                set="curved"
                primaryColor="#999999"
                className="absolute inset-y-[2rem] left-1 px-[0.2rem]"
              />
            </span>
            <label htmlFor="password" className="block font-bold">
              Confirm password
            </label>
            <input
              type={isconfirmPasswordVisible ? "text" : "password"}
              id="password"
              className="w-full py-2 bg-[#FFFFFF] rounded-[5px] px-8 mt-1 border border-[#999999] focus:outline-none"
              placeholder="● ● ● ● ● ● "
            />

            {isconfirmPasswordVisible ? (
              <MdOutlineVisibilityOff
                onClick={() =>
                  setisconfirmPasswordVisible(!isconfirmPasswordVisible)
                }
                className="absolute inset-y-[2rem] right-1 px-[0.2rem] text-2xl text-[#333333]"
              />
            ) : (
              <MdOutlineVisibility
                onClick={() =>
                  setisconfirmPasswordVisible(!isconfirmPasswordVisible)
                }
                className="absolute inset-y-[2rem] right-1 px-[0.2rem] text-2xl text-[#333333]"
              />
            )}
          </div>
          <button className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] w-full rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-6  text-white ">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
