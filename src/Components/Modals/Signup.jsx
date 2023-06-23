import React from "react";
import img from "../../assets/ModalImages/authbg.png";
import { TfiClose } from "react-icons/tfi";
const Signup = () => {
  return (
    <div className="bg-black/[25%] fixed h-screen w-full z-10  left-0 flex justify-center items-center ">
      <div className="rounded-2xl bg-[#F5FFF7] h-[30rem] w-[50rem] absolute">
        <img
          src={img}
          alt=""
          className="bg-cover h-full w-full top-0 left-0 z-[1] hidden lg:block rounded-2xl"
        />
        <TfiClose className="text-xl text-[#999999] top-6 absolute right-4 font-bold " />
      </div>
    </div>
  );
};

export default Signup;
