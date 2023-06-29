import React from "react";

import otpmodal from "../../../assets/ModalImages/success.png";
import logo from "../../../assets/ModalImages/logo.png";

const Success = ({ setsuccessprop, successprop }) => {
  return (
    <div className={successprop ? "grid lg:grid-cols-2 gap-x-10  " : "hidden"}>
      <img
        src={otpmodal}
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
            Successful
          </p>
        </div>
        <div className="mt-8 text-[#3B8004] text-sm text-center font-semibold">
          Your password reset is successful You may now Sign In to your account
        </div>
        <button
          onClick={() => {
            // setopenOtpmodalprop(false);
            // setopenverifiedmodalprop(true);
            setsuccessprop(false);
          }}
          className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] w-full rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-8  text-white "
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Success;
