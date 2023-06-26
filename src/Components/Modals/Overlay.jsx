import React, { useState } from "react";
import Signup from "./Signup";
import OtpModal from "./OtpModal";

const Overlay = ({ value, changeValue }) => {
  const [openOtpmodal, setopenOtpmodal] = useState(false);
  return (
    <div
      className={
        value
          ? "bg-black/[25%] fixed h-screen w-full z-10 px-12 md:px-20 left-0 flex justify-center items-center font-lato duration-300 ease-in-out "
          : "bg-black/[25%] fixed h-screen w-full z-[-1] px-12 md:px-20 left-0 flex justify-center items-center font-lato  duration-300 ease-in-out"
      }
    >
      {openOtpmodal ? (
        <OtpModal
          setopenOtpmodalprop={setopenOtpmodal}
          openOtpmodalprop={openOtpmodal}
        />
      ) : (
        <Signup value={value} changeValue={changeValue} />
      )}
    </div>
  );
};

export default Overlay;
