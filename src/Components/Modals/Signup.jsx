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
        <TfiClose className="text-2xl text-[#999999] font-bold cursor-pointer absolute top-4 right-4" />
        <div className="flex ">
          <img src={img1} alt="" className=" z-[1] h-[26rem] " />
          <div className="flex-col flex just">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
