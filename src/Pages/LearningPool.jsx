import React from "react";
import Learn from "../Components/HomePageComponents/Learn";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../assets/Learnimages/BulkImport";

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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 sm:mt-20 lg:mt-8 xl:mt-10 gap-y-10 sm:gap-y-20 md:gap-x-20 sm:gap-x-10 md:gap-y-32 lg:gap-y-10  lg:gap-x-4  xl:gap-x-6 xl:gap-y-10  mx-auto justify-center w-full ">
        <Learn image={img1} name="Analytics" />
        <Learn image={img2} name="Artificial Intelligence" />
        <Learn image={img3} name="Animation" />
        <Learn image={img4} name="Coding" />
        <Learn image={img5} name="Data Science" />
        <Learn image={img6} name="Content Writing" />
        <Learn image={img7} name="Video Editting" />
        <Learn image={img8} name="3D Modelling" />
        <Learn image={img1} name="Analytics" />
        <Learn image={img2} name="Artificial Intelligence" />
        <Learn image={img3} name="Animation" />
        <Learn image={img4} name="Coding" />
        <Learn image={img5} name="Data Science" />
        <Learn image={img6} name="Content Writing" />
        <Learn image={img7} name="Video Editting" />
        <Learn image={img8} name="3D Modelling" />
        <Learn image={img1} name="Analytics" />
        <Learn image={img2} name="Artificial Intelligence" />
        <Learn image={img3} name="Animation" />
        <Learn image={img4} name="Coding" />
      </div>
      <div className="w-full flex justify-center items-center  mt-10 mb-10">
        <button className="h-[2rem] mx-auto  w-[8rem] sm:h-[3rem] sm:w-[12rem] lg:h-[2.6rem] lg:w-[10rem] border border-solid border-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004]">
          Load more...
        </button>
      </div>
    </div>
  );
};

export default LearningPool;
