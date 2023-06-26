import React from "react";
import img from "../../assets/ModalImages/authbg.png";
import img1 from "../../assets/ModalImages/img3.png";
import logo from "../../assets/ModalImages/logo.png";
import { TfiClose } from "react-icons/tfi";


const OtpModal = ({ setopenOtpmodalprop, openOtpmodalprop, changeValue }) => {
  return (
    <div
      className={
        openOtpmodalprop
          ? "rounded-2xl bg-[#F5FFF7] flex items-center justify-center h-[34rem] sm:h-[40rem] md:h-[45rem] lg:h-[32rem] xl:h-[34rem] w-[40rem] md:w-[52rem] px-8 md:px-[3rem] opacity-100  relative duration-[800ms] ease-in-out"
          : "rounded-2xl bg-[#F5FFF7] flex items-center justify-center h-[34rem] sm:h-[40rem] md:h-[45rem] lg:h-[32rem] xl:h-[34rem] w-[40rem] md:w-[52rem] px-8 md:px-[3rem] opacity-0  relative duration-[800ms] ease-in-out"
      }
    >
      <img
        src={img}
        alt=""
        className="bg-cover h-full w-full fixed top-0 left-0 z-[-1] hidden lg:block rounded-2xl"
      />

      <TfiClose
        onClick={() => {
          changeValue(false);
          setopenOtpmodalprop(false);
        }}
        className="text-2xl lg:text-xl text-[#999999] font-bold cursor-pointer absolute right-3 top-3 md:top-8 lg:top-4 md:right-8 lg:right-4"
      />
      <div className="grid lg:grid-cols-2 gap-x-10  ">
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
          <div className="flex">
            {" "}
            <p className="text-[#555555] font-bold text-center mt-1 md:mt-4 lg:mt-2">
              Verify Email
            </p>
          </div>
          <div className="mt-4 text-[#3B8004] text-sm font-semibold">
            Enter 4 - digit code sent to johndoe@email.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;
