import React from "react";
import img from "../../assets/ModalImages/authbg.png";
import img1 from "../../assets/ModalImages/sidebar.png";
import logo from "../../assets/ModalImages/logo.png";
import { TfiClose } from "react-icons/tfi";
import { TbMail } from "react-icons/tb";
import { Lock, Message } from "react-iconly";
const Signup = () => {
  return (
    <div className="bg-black/[25%] fixed h-screen w-full z-10  left-0 flex justify-center items-center font-lato ">
      <div className="rounded-2xl bg-[#F5FFF7] h-[32rem] w-[50rem] px-10 pt-4 relative">
        <img
          src={img}
          alt=""
          className="bg-cover h-full w-full fixed top-0 left-0 z-[-1] hidden lg:block rounded-2xl"
        />
        <TfiClose className="text-xl text-[#999999] font-bold cursor-pointer absolute top-4 right-4" />
        <div className="grid grid-cols-2  jus">
          <img src={img1} alt="" className=" z-[1] h-[27rem] " />
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-[5.8rem] " />
            <p className="text-[#555555] font-bold text-center">
              Sign up to Get Started
            </p>
            <form
              onSubmit=""
              className="w-full relative flex flex-col gap-y-1"
              action=""
            >
              <div className="relative">
                <span>
                  {" "}
                  <Message
                    set="curved"
                    primaryColor="#999999"
                    className="inset-y-10 left-1 absolute "
                  />
                </span>
                <label htmlFor="email" className="block font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 bg-[#FFFFFF] rounded-[5px] pl-8 mt-1 border border-[#999999] focus:outline-none"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="mt-2  relative">
                <span>
                  <Lock
                    set="curved"
                    primaryColor="#999999"
                    className="absolute inset-y-10 left-1"
                  />
                </span>
                <label htmlFor="password" className="block font-bold">
                  Create password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full py-2 bg-[#FFFFFF] rounded-[5px] pl-8 mt-1 border border-[#999999] focus:outline-none"
                  placeholder="● ● ● ● ●"
                />
              </div>

              <div className="flex items-start gap-x-3 mt-2 font-normal text-sm">
                <input type="checkbox" class="accent-[#3B8004]" />
                <p className="text-[#999999]">
                  By registering, you are agreeing with our{" "}
                  <span className="underline text-[#3B8004]">
                    Terms of Use{" "}
                  </span>
                  and{" "}
                  <span className="underline text-[#3B8004]">
                    Privacy Policy
                  </span>
                </p>
              </div>
              <button className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] rounded-[10px] h-[2.6rem] mt-4  text-white ">
                Verify email
              </button>
            </form>{" "}
            <div className="flex flex-col w-full mt-2">
              <p className="text-[#999999] text-center">Or Continue with</p>
              <div className="flex justify-evenly mt-2">
                <div className="flex justify-center items-center h-[3rem] w-[3rem] border-2 border-solid border-[#DDDDDD] rounded-[10px]"></div>{" "}
                <div className="flex justify-center items-center h-[3rem] w-[3rem] border-2 border-solid border-[#DDDDDD] rounded-[10px]"></div>{" "}
                <div className="flex justify-center items-center h-[3rem] w-[3rem] border-2 border-solid border-[#DDDDDD] rounded-[10px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
