import React from "react";
import img from "../../assets/projectimages/1.png";
import bag from "../../assets/homepageicons/images/bag.svg";
import group from "../../assets/homepageicons/images/user.svg";
import info from "../../assets/homepageicons/images/use";
const Project = () => {
  return (
    <div className="w-[15rem]  bg-red-300 shadow-xl h-[25rem] rounded-[30px]">
      <img src={img} alt="" className="object-cover w-[15rem] " />
      <div className="px-4 w-full bg-red-500 h-[12rem] rounded-b-[30px] flex flex-col justify-evenly">
        <div className="flex">
          <img src={bag} alt="" className="object-contain w-[1rem]" />
          <p>Mobile game</p>
        </div>
        <div className="flex">
          <img src={group} alt="" className="object-contain w-[1rem]" />
          <p>Multiple owners</p>
        </div>
        <div className="flex text-xs">
          <img src={bag} alt="" className="object-contain w-[1rem]" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Justo feugiat pharetra eu eu
            enim...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
