import React from "react";
import pen from "../../assets/Learnimages/icons/pen.svg";
import book from "../../assets/Learnimages/icons/book.svg";
import group from "../../assets/Learnimages/icons/group.svg";
const Learn = ({ image, name }) => {
  return (
    <div className=" w-full  font-lato flex flex-col shadow-[3px_15px_50px_0px_rgba(5,_78,_18,_0.10)] hover:shadow-sm cursor-pointer ease-out hover:duration-200 min-h-[28rem] sm:min-h-[26rem] md:min-h-[2rem] lg:min-h-[22rem] xl:min-h-[26rem] rounded-[30px] pb-8">
      <img src={image} alt="" className="object-cover w-full " />

      <div className="flex flex-col text-base sm:text-2xl lg:text-base gap-y-3 px-4 sm:gap-y-6  lg:gap-y-4 text-[#333] xl:px-4">
        <div className="flex gap-x-3 pt-4">
          <img
            src={pen}
            alt=""
            className="object-contain w-[1rem] xl:w-[1.2rem]"
          />
          <p className="font-bold text-lg md:text-sm  xl:text-2xl ">{name}</p>
        </div>
        <div className="flex gap-x-3 text-xl sm:text-3xl  lg:text-base">
          <img
            src={book}
            alt=""
            className="object-contain w-[1rem] xl:w-[1.2rem]"
          />
          <p className="text-[#999999] text-sm  xl:text-[1rem] xl:font-semibold">
            310,000 resources
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 ">
          <div className="flex gap-x-2 md:gap-x-3 lg:gap-x-2">
            <img
              src={group}
              alt=""
              className="object-contain  w-[1rem] xl:w-[1.3rem]"
            />
            <p className="text-[#999999] text-sm lg:text-xs xl:text-[0.8rem] xl:font-semibold">
              10K+ members
            </p>
          </div>
          <button className="h-[2rem] w-[8rem] sm:h-[2rem] sm:w-[8rem] lg:h-[2rem] lg:w-[6rem] xl:w-[7rem] xl:h-[2.3rem] border-[1px] border-solid border-[#999]  text-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004] xl:text-sm xl:font-bold">
            Join group
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
