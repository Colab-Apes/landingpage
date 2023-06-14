import React from "react";
import heroimage from "../assets/waitlist.svg";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 px-20 mt-20 justify-items-center ">
      <div className="flex flex-col justify-around">
        <div className="flex items-center gap-x-4 ">
          <p className="text-main text-2xl font-bold">Coming soon</p>
          <div className=" bg-[#3B8004] w-[20rem] h-[0.2rem]"></div>
        </div>
        <p className="text-4xl text-main mt-3 font-bold leading-[1.5]">
          Unlock Your Digital Team: Find, Collaborate, and Build the Future
          Together
        </p>
        <div className="flex flex-col">
          <p className=" text-main font-lato font-medium">Join the wait list</p>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="enter your email address..."
              className="h-[3.8rem] placeholder:text-[#999999] text-lg font-medium w-[24rem] px-[1.3rem] rounded-[16px] focus:outline-none border-[#3B8004] border-2 bg-transparent"
            />
            <button className="join font-lato font-semibold h-[2rem] w-[8rem] text-white">Join</button>
          </div>
        </div>
      </div>
      <img src={heroimage} alt="" className="w-[25rem] object-contain" />
    </div>
  );
};

export default Hero;
