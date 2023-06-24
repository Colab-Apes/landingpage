import React from "react";
import img from "../../assets/ModalImages/authbg.png";
import img1 from "../../assets/ModalImages/sidebar.png";
import logo from "../../assets/ModalImages/logo.png";
import { TfiClose } from "react-icons/tfi";
const Signup = () => {
  return (
    <div className="bg-black/[25%] fixed h-screen w-full z-10  left-0 flex justify-center items-center ">
      <div className="rounded-2xl bg-[#F5FFF7] h-[30rem] w-[50rem] px-10 pt-4 relative">
        <img
          src={img}
          alt=""
          className="bg-cover h-full w-full fixed top-0 left-0 z-[1] hidden lg:block rounded-2xl"
        />
        <TfiClose className="text-xl text-[#999999] font-bold cursor-pointer absolute top-4 right-4" />
        <div className="grid grid-cols-2  jus">
          <img src={img1} alt="" className=" z-[1] h-[27rem] " />
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-[8rem] " />
            <p className="text-[#555555] font-bold text-center">
              Sign up to Get Started
            </p>
            <form className="w-full" action="">
              <div className="mt-4  bg-red-500">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="mt-4  bg-red-500">
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input type="email" id="email" className="w-full" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
