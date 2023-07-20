import React from "react";
import bag from "../../assets/homepageicons/images/bag.svg";
import group from "../../assets/homepageicons/images/user.svg";
import info from "../../assets/homepageicons/images/info.svg";

import hand from "../../assets/homepageicons/images/group-3.svg";
import like from "../../assets/homepageicons/images/like.svg";
const Project = ({ image, name }) => {
  return (
    <div className=" w-full  font-lato flex flex-col  shadow-[3px_15px_50px_0px_rgba(5,78,18,0.10)] hover:shadow-sm cursor-pointer ease-out hover:duration-200 min-h-[34rem] sm:min-h-[35rem] md:min-h-[35rem] lg:min-h-[30rem] xl:min-h-[34rem] rounded-[30px] ">
      <img src={image} alt="" className="object-cover w-full " />
      <div className="px-4 sm:px-4 lg:px-4 w-full text-lg lg:text-xs flex-1 rounded-b-[30px] flex flex-col justify-evenly">
        <div className="flex flex-col text-base sm:text-2xl lg:text-base gap-y-3 sm:gap-y-6  lg:gap-y-3 text-[#333]">
          <div className="flex gap-x-3 text-xl sm:text-3xl  lg:text-base">
            <img
              src={bag}
              alt=""
              className="object-contain sm:w-[1.9rem] lg:w-[1.3rem]"
            />
            <p className="font-bold text-xl">{name}</p>
          </div>
          <div className="flex gap-x-3">
            <img
              src={group}
              alt=""
              className="object-contain  sm:w-[1.9rem]  w-[1rem] lg:w-[1rem]"
            />
            <p className="text-[#999999] sm:text-base lg:text-sm">
              Multiple owners
            </p>
          </div>
          <div className="flex  lg:text-xs gap-x-3 items-start">
            <img
              src={info}
              alt=""
              className="object-contain  sm:w-[1.9rem]  w-[1rem] lg:w-[1rem]"
            />
            <p className="text-[#999999] sm:text-base lg:text-sm ">
              Lorem ipsum dolor sit amet consectetur. Justo feugiat pharetra eu
              eu enim...
            </p>
          </div>
        </div>
        <div className="flex text-[#999999] w-full items-center justify-between">
          <div className="flex items-center gap-x-1">
            <span className=" text-sm">
              <img
                src={like}
                alt=""
                className="object-contain w-[1rem] sm:w-[1.9rem] lg:w-full"
              />
            </span>
            <p>19+</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={hand}
              alt=""
              className="object-contain  sm:w-[2.2rem] lg:w-full"
            />
            <p>5</p>
          </div>
          <button className="h-[2rem] w-[8rem] sm:h-[2rem] sm:w-[8rem] lg:h-[2rem] lg:w-[6rem] border border-solid border-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004]">
            Join project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
