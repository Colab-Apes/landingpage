import React, { useState } from "react";
import Signup from "./Signup";
import OtpModal from "./OtpModal";
import img from "../../assets/ModalImages/authbg.png";

import { TfiClose } from "react-icons/tfi";
import VerifiedModal from "./VerifiedModal";
import ForgotPassword from "./RecoverPassword/ForgotPassword";
// import ResetPassword from "./RecoverPassword/ResetPassword";
// import Success from "./RecoverPassword/Success";
// import Signin from "./Signin";
const Overlay = ({ value, changeValue }) => {
  const [signinmodal, setsigninmodal] = useState(false);
  // const [success, setsuccess] = useState(true);
  // const [resetpassword, setresetpassword] = useState(false);
  const [forgotpassword, setforgotpassword] = useState(false);
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  const [openverifiedmodal, setopenverifiedmodal] = useState(false);
  const [opensignupmodal, setopensignupmodal] = useState(true);

  return (
    <div
      className={
        value
          ? "bg-black/[25%] fixed h-screen w-full z-10  px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato duration-300 ease-in-out "
          : "bg-black/[25%] fixed h-screen w-full z-[-1] px-4 sm:px-32 md:px-32 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
      <div
        className={
          value
            ? " rounded-2xl lg:rounded-[40px] bg-[#F5FFF7] flex items-center justify-center h-[33rem]  w-full py-4  sm:pb-0 md:py-4  lg:py-4  sm:h-[35rem] lg:h-[32rem] lg:w-[54rem] xl:h-[34.5rem] xl:w-[56rem]   md:w-full      px-4 sm:px-8 md:px-[3rem] opacity-100  relative duration-[800ms] ease-in-out"
            : " rounded-2xl lg:rounded-[40px] bg-[#F5FFF7] flex items-center justify-center h-[33rem] w-full py-4  sm:pb-0  md:py-4 lg:py-4 sm:h-[35rem]  lg:h-[32rem] lg:w-[54rem] xl:h-[34.5rem] xl:w-[56rem]   px-4 sm:px-8 md:px-[3rem] opacity-0  relative duration-[100ms] ease-in-out"
        }
      >
        <img
          src={img}
          alt=""
          className="bg-cover h-full w-full fixed top-0 left-0 z-[-1]  rounded-2xl lg:rounded-[40px] hidden lg:block"
        />
        <TfiClose
          onClick={() => {
            changeValue(false);
            setopensignupmodal(true);
            setopenverifiedmodal(false);
            setopenOtpmodal(false);
          }}
          className="text-2xl lg:text-xl xl:text-lg text-[#999999] font-bold cursor-pointer absolute right-6 top-6  md:top-8 lg:top-6 md:right-8 lg:right-10 "
        />

        <Signup
          setopenOtpmodalprop={setopenOtpmodal}
          setopensignupmodalprop={setopensignupmodal}
          opensignupmodalprop={opensignupmodal}
          setsigninmodalprop={setsigninmodal}
        />
        <OtpModal
          openOtpmodalprop={openOtpmodal}
          setopenOtpmodalprop={setopenOtpmodal}
          setopenverifiedmodalprop={setopenverifiedmodal}
        />
        <VerifiedModal openverifiedmodalprop={openverifiedmodal} />
        <ForgotPassword
          forgotpasswordprop={forgotpassword}
          setforgotpasswordprop={setforgotpassword}
          setsigninmodalprop={setsigninmodal}
        />
        {/* <ResetPassword
          resetpasswordprop={resetpassword}
          setresetpasswordprop={setresetpassword}
        /> */}
        {/* <Success setsuccessprop={setsuccess} successprop={success} /> */}
        {/* <Signin setsigninmodalprop={setsigninmodal} signinprop={signinmodal} /> */}
        {signinmodal ? "" : ""}
      </div>
    </div>
  );
};

export default Overlay;
