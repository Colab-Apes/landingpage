import React from "react";
// import img from "../../assets/ModalImages/authbg.png";
import verifiedmodal from "../../assets/ModalImages/verifiedmodal.png";
import logo from "../../assets/ModalImages/logo.png";

const VerifiedModal = ({ openverifiedmodalprop }) => {
  return (
    <div
      className={
        openverifiedmodalprop ? "grid lg:grid-cols-2 gap-x-10  " : "hidden"
      }
    >
      <img
        src={verifiedmodal}
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
            You’re Verified!
          </p>
        </div>
        <div className="mt-4 text-[#3B8004] text-sm font-bold">
          Complete a quick profile to start creating
        </div>
        <button
          onClick={() => {}}
          className="font-semibold bg-gradient-to-bl from-[#054E12] to-[#3B8004] w-full rounded-[10px] h-[2.6rem] mt-6 md:mt-8 lg:mt-6  text-white "
        >
          Get Started
        </button>
        <p className="text-xs mt-6 font-semibold">
          Already have an account?
          <a className="text-[#054E12]" href="/">
            {" "}
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default VerifiedModal;
