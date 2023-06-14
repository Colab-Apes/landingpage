import React from "react";
import heroimage from "../assets/waitlist.svg";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 px-20 mt-32 justify-center">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-4 ">
          <p className="text-main text-2xl font-bold">Coming soon</p>
          <div className=" bg-[#3B8004] w-[20rem] h-[0.2rem]"></div>
        </div>
        <p className="text-4xl text-main mt-3 font-bold leading-[1.5]">
          Unlock Your Digital Team: Find, Collaborate, and Build the Future
          Together
        </p>
      </div>
      <img src={heroimage} alt="" />
    </div>
  );
};

export default Hero;
