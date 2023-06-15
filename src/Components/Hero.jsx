import React from "react";
import heroimage from "../assets/waitlist.svg";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 lg:px-10 mt-10 xl:px-20 h-[75vh] w-full justify-center lg:gap-x-10 xl:gap-x-0 items-center justify-items-center ">
      <div className="flex flex-col lg:h-[30vh] justify-around ">
        <div className="flex items-center gap-x-4 ">
          <p className="text-main text-lg lg:text-lg xl:text-xl font-bold">
            Coming soon
          </p>
          <div className=" bg-[#3B8004] w-[10rem] xl:w-[20rem] h-[0.2rem]"></div>
        </div>
        <p className="text-3xl leading-[36px] lg:text-3xl xl:text-4xl text-main mt-4 font-bold lg:leading-[1.5]">
          Unlock Your Digital Team: Find, Collaborate, and Build the Future
          Together
        </p>
        <img
          src={heroimage}
          alt=""
          className="w-[20rem] object-contain  lg:hidden  mx-auto lg:mx-0 mt-4"
          loading="lazy"
        />
        <div className="flex flex-col mt-10 ">
          <p className=" text-[#054E12] text-xl font-lato font-medium">
            Join the wait list
          </p>

          <div className="relative  w-full mt-2  left-0 right-0">
            <input
              type="text"
              placeholder="enter your email address..."
              className="h-[4rem]  placeholder:text-[#999999] text-lg font-medium w-full lg:w-[24rem] xl:w-[26rem] px-[1.3rem] rounded-[20px] focus:outline-none border-[#3B8004] border-2 bg-transparent"
            />
            <button className="join absolute right-2 inset-y-2  font-lato font-semibold h-[3rem] w-[6rem] rounded-[15px] text-white">
              Join
            </button>
          </div>
        </div>
      </div>
      <img
        src={heroimage}
        alt=""
        className="xl:w-[25rem] object-contain lg:block hidden "
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
