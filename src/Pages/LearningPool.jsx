import React from "react";

const LearningPool = () => {
  return (
    <div>
      {" "}
      <p className="text-left font-inter text-[#333] mt-4 ">
        <p className=" text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-semibold">
          Get A New Skill Or Master An Existing One
        </p>
        <p className="text-left mt-4 text-sm sm:text-base lg:mt-2 xl:mt-4 ">
          Join A Learning Pool Group to Start Learning And Interacting With
          Other Learners
        </p>
      </p>
      <div className="w-full flex justify-center items-center  mt-10 mb-10">
        <button className="h-[2rem] mx-auto  w-[8rem] sm:h-[3rem] sm:w-[12rem] lg:h-[2.6rem] lg:w-[10rem] border border-solid border-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004]">
          Load more...
        </button>
      </div>
    </div>
  );
};

export default LearningPool;
