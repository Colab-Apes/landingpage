import React from "react";
import heroimage from "../assets/waitlist.svg";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 px-20 mt-20 justify-items-center ">
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-x-4 ">
          <p className="text-main text-2xl font-bold">Coming soon</p>
          <div className=" bg-[#3B8004] w-[20rem] h-[0.2rem]"></div>
        </div>
        <p className="text-4xl text-main mt-3 font-bold leading-[1.5]">
          Unlock Your Digital Team: Find, Collaborate, and Build the Future
          Together
        </p>
        <div className="flex flex-col">
          <p className=" text-main">Join the wait list</p>
          <div className="relative">
            <input
              type="text"
              className="h-[3rem] w-[20rem] rounded-[20px] focus:outline-none border-[#3B8004] border-2"
            />
          </div>
        </div>
      </div>
      <img src={heroimage} alt="" className="w-[25rem] object-contain" />
    </div>
  );
};

export default Hero;
