import React from "react";
import bag from "../../assets/homepageicons/images/bag.svg";
import group from "../../assets/homepageicons/images/user.svg";
import info from "../../assets/homepageicons/images/info.svg";
import { Heart2 } from "react-iconly";
const Project = ({ image }) => {
  return (
    <div className="w-[15rem]   font-lato flex flex-col  shadow-[15px_15px_50px_0px_rgba(5,78,18,0.10);] hover:shadow-sm cursor-pointer ease-out hover:duration-200 h-[24rem] rounded-[30px] ">
      <img src={image} alt="" className="object-cover w-[15rem] " />
      <div className="px-4 w-full text-xs flex-1 rounded-b-[30px] flex flex-col justify-evenly">
        <div className="f">
          <div className="flex gap-x-3">
            <img src={bag} alt="" className="object-contain w-[1rem]" />
            <p className="font-bold">Mobile game</p>
          </div>
          <div className="flex gap-x-3">
            <img src={group} alt="" className="object-contain w-[1rem]" />
            <p className="text-[#999999]">Multiple owners</p>
          </div>
          <div className="flex text-xs gap-x-3 items-start">
            <img src={info} alt="" className="object-contain w-[1rem]" />
            <p className="text-[#999999]">
              Lorem ipsum dolor sit amet consectetur. Justo feugiat pharetra eu
              eu enim...
            </p>
          </div>
        </div>
        <div className="flex">
          <span>
            <Heart2 set="bold" primaryColor="blueviolet" />
          </span>
          <p>19+</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
