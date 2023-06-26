import React, { useState } from "react";
import Signup from "./Signup";
import OtpModal from "./OtpModal";
import img from "../../assets/ModalImages/authbg.png";

import { TfiClose } from "react-icons/tfi";
import VerifiedModal from "./VerifiedModal";
import ForgotPassword from "./RecoverPassword/ForgotPassword";
import ResetPassword from "./RecoverPassword/ResetPassword";
import Success from "./RecoverPassword/Success";
const Overlay = ({ value, changeValue }) => {
  const [success, setsuccess] = useState(true);
  const [resetpassword, setresetpassword] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  const [openverifiedmodal, setopenverifiedmodal] = useState(false);
  const [opensignupmodal, setopensignupmodal] = useState(true);

  return (
    <div
      className={
        value
          ? "bg-black/[25%] fixed h-screen w-full z-10 px-12 md:px-20 left-0 flex justify-center items-center font-lato duration-300 ease-in-out "
          : "bg-black/[25%] fixed h-screen w-full z-[-1] px-12 md:px-20 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
      <div
        className={
          value
            ? "rounded-2xl bg-[#F5FFF7] flex items-center justify-center h-[34rem] sm:h-[40rem] md:h-[45rem] lg:h-[32rem] xl:h-[34rem] w-[40rem] md:w-[52rem] px-8 md:px-[3rem] opacity-100  relative duration-[800ms] ease-in-out"
            : "rounded-2xl bg-[#F5FFF7] flex items-center justify-center h-[34rem] sm:h-[40rem] md:h-[45rem] lg:h-[32rem] xl:h-[34rem] w-[40rem] md:w-[52rem] px-8 md:px-[3rem] opacity-0  relative duration-[100ms] ease-in-out"
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
            setopensignupmodal(true);
            setopenverifiedmodal(false);
            setopenOtpmodal(false);
          }}
          className="text-2xl lg:text-xl text-[#999999] font-bold cursor-pointer absolute right-3 top-3 md:top-8 lg:top-4 md:right-8 lg:right-4"
        />

        {/* <Signup
          setopenOtpmodalprop={setopenOtpmodal}
          setopensignupmodalprop={setopensignupmodal}
          opensignupmodalprop={opensignupmodal}
        />
        <OtpModal
          openOtpmodalprop={openOtpmodal}
          setopenOtpmodalprop={setopenOtpmodal}
          setopenverifiedmodalprop={setopenverifiedmodal}
        />
        <VerifiedModal openverifiedmodalprop={openverifiedmodal} /> */}
        {/* <ForgotPassword
          forgotpasswordprop={forgotpassword}
          setforgotpasswordprop={setforgotpassword}
        /> */}
        {/* <ResetPassword
          resetpasswordprop={resetpassword}
          setresetpasswordprop={setresetpassword}
        /> */}
        <Success setsuccessprop={setsuccess} successprop={success} />
      </div>
    </div>
  );
};

export default Overlay;
