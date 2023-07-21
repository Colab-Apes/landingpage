import React from "react";

import password from "../../../assets/ModalImages/password.png";
import logo from "../../../assets/ModalImages/logo.png";
import { Message } from "react-iconly";
const ForgotPassword = ({ forgotpasswordprop, setforgotpasswordprop }) => {
  return (
    <div
      className={
        forgotpasswordprop
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
            Forgot password
          </p>
        </div>
        <div className="mt-6 text-[#3B8004] text-sm font-bold">
          Enter you email address
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // setopensignupmodalprop(false);
            // setopenOtpmodalprop(false);
            setforgotpasswordprop(false);
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
          <button className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] w-full rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-6  text-white ">
            Confirm email
          </button>
        </form>
        <p className="text-xs mt-6 font-semibold">
          Remember password?
          <a className="text-[#054E12]" href="/">
            {" "}
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
