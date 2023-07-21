import React from "react";
import bag from "../../assets/homepageicons/images/bag.svg";
import group from "../../assets/homepageicons/images/user.svg";
import info from "../../assets/homepageicons/images/info.svg";

import hand from "../../assets/homepageicons/images/group-3.svg";
import like from "../../assets/homepageicons/images/like.svg";
const Project = ({ image, name }) => {
  return (
    <div className=" w-full  font-lato flex flex-col  shadow-[3px_15px_50px_0px_rgba(5,78,18,0.10)] hover:shadow-sm cursor-pointer ease-out hover:duration-200 min-h-[34rem] sm:min-h-[26rem] md:min-h-[36rem] lg:min-h-[30rem] xl:min-h-[35rem] rounded-[30px] pb-8">
      <img src={image} alt="" className="object-cover w-full " />
      <div className="px-4 sm:px-4 lg:px-4 w-full text-lg lg:text-xs flex-1 rounded-b-[30px] flex flex-col justify-evenly xl:px-6">
        <div className="flex flex-col text-base sm:text-2xl lg:text-base gap-y-3 sm:gap-y-6  lg:gap-y-3 text-[#333]">
          <div className="flex gap-x-3 text-xl sm:text-3xl mt-4  lg:text-base">
            <img
              src={bag}
              alt=""
              className="object-contain sm:w-[1.9rem] lg:w-[1rem] xl:w-[1.5rem]"
            />
            <p className="font-bold text-xl xl:text-2xl">{name}</p>
          </div>
          <div className="flex gap-x-3">
            <img
              src={group}
              alt=""
              className="object-contain  sm:w-[1.9rem]  w-[1rem] lg:w-[1.2rem] xl:w-[1.5rem]"
            />
            <p className="text-[#999] font-semibold sm:text-base lg:text-base xl:text-lg">
              Multiple owners
            </p>
          </div>
          <div className="flex  lg:text-xs gap-x-3 items-start">
            <img
              src={info}
              alt=""
              className="object-contain  sm:w-[1.9rem]  w-[1rem] lg:w-[1rem] xl:w-[1.5rem]"
            />
            <p className="text-[#999999] sm:text-base lg:text-sm  font-medium xl:text-[1rem] xl:leading-[1.5rem] ">
              Lorem ipsum dolor sit amet consectetur. Justo feugiat pharetra eu
              eu enim...
            </p>
          </div>
        </div>
        <div className="flex text-[#999999] w-full items-center  justify-between md:mt-2">
          <div className="flex items-center gap-x-1">
            <span className=" text-sm">
              <img
                src={like}
                alt=""
                className="object-contain w-[1rem] sm:w-[1.9rem] lg:w-full"
              />
            </span>
            <p className=" font-bold text-sm">19+</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img
              src={hand}
              alt=""
              className="object-contain  sm:w-[2.2rem] lg:w-full xl:w-[1.2rem]"
            />
            <p className="font-bold text-sm">5</p>
          </div>
          <button className="h-[2rem] w-[8rem] sm:h-[2rem] sm:w-[8rem] lg:h-[2rem] lg:w-[6rem] xl:w-[8rem] xl:h-[2.5rem] border-[1px] border-solid border-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004] xl:text-base font-">
            Join project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
