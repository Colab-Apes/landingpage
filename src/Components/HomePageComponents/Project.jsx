import React from "react";
import bag from "../../assets/homepageicons/images/bag.svg";
import group from "../../assets/homepageicons/images/user.svg";
import info from "../../assets/homepageicons/images/info.svg";
import { Heart } from "react-iconly";
import hand from "../../assets/homepageicons/images/group-3.svg";
const Project = ({ image, name }) => {
  return (
    <div className="w-[15rem]   font-lato flex flex-col  shadow-[15px_15px_50px_0px_rgba(5,78,18,0.10)] hover:shadow-sm cursor-pointer ease-out hover:duration-200 h-[24rem] rounded-[30px] ">
      <img src={image} alt="" className="object-cover w-[15rem] " />
      <div className="px-4 w-full text-xs flex-1 rounded-b-[30px] flex flex-col justify-evenly">
        <div className="flex flex-col gap-y-3 ">
          <div className="flex gap-x-3">
            <img src={bag} alt="" className="object-contain w-[1rem]" />
            <p className="font-bold">{name}</p>
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
        <div className="flex text-[#999999] w-full items-center justify-between">
          <div className="flex items-center gap-x-1">
            <span className="text-sm">
              <Heart set="curved" size={20} primaryColor="#999999" />
            </span>
            <p>19+</p>
          </div>
          <div className="flex items-center gap-x-1">
            <img src={hand} alt="" />
            <p>5</p>
          </div>
          <button className="h-[2rem] w-[6rem] border border-solid border-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004]">
            Join project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
