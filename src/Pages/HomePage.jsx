import React from "react";
import NavBarComp from "../Components/HomePageComponents/NavBarComp";
import Project from "../Components/HomePageComponents/Project";
import {
  img1,
  img2,
  img3,
  img4,
} from "../assets/homepageicons/homepageimages/BullkImport";

const HomePage = () => {
  return (
    <div>
      {/* <MobileTabs /> */}
      <p className="text-left font-inter text-[#333] mt-4 ">
        <p className=" text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-semibold">
          Discover Amazing Projects From Around The World
        </p>
        <p className="text-left mt-4 text-sm sm:text-base lg:mt-2 xl:mt-4 ">
          Join Projects That Interests You And Be A Part Of Their Success Story
        </p>
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-4 sm:mt-20 lg:mt-8 xl:mt-10 gap-y-10 sm:gap-y-20 md:gap-x-20 sm:gap-x-10 md:gap-y-32 lg:gap-y-10  lg:gap-x-4  xl:gap-x-6 xl:gap-y-10  mx-auto justify-center w-full ">
        <Project image={img1} name="Mobile game" />
        <Project image={img2} name="Product design" />
        <Project image={img3} name="Video game" />
        <Project image={img4} name="Data analysis" />
        <Project image={img1} name="Mobile game" />
        <Project image={img2} name="Product design" />
        <Project image={img3} name="Video game" />
        <Project image={img4} name="Data analysis" />{" "}
        <Project image={img1} name="Mobile game" />
        <Project image={img2} name="Product design" />
        <Project image={img3} name="Video game" />
        <Project image={img4} name="Data analysis" />
      </div>
      <div className="w-full flex justify-center items-center  mt-10 mb-10">
        <button className="h-[2rem] mx-auto  w-[8rem] sm:h-[3rem] sm:w-[12rem] lg:h-[2.6rem] lg:w-[8rem] border border-solid border-[#999] rounded-[15px] ">
          Load more...
        </button>
      </div>
    </div>
  );
};

export default HomePage;
