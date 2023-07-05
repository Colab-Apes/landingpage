import React from "react";
import NavBarComp from "../Components/HomePageComponents/NavBarComp";
import Project from "../Components/HomePageComponents/Project";
import img1 from "../assets/projectimages/1.png";
import img2 from "../assets/projectimages/2.png";
import img3 from "../assets/projectimages/3.png";
import img4 from "../assets/projectimages/4.png";
const Home = () => {
  return (
    <div className=" font-lato  bg-white">
      <NavBarComp />

      <div className=" px-8 sm:px-20 lg:px-24 mt-20 sm:mt-32  lg:mt-[9rem]   ">
        <div className="h-[5rem] sm:text-2xl flex items-center justify-evenly w-full mx-auto bg-white rounded-[10px] shad lg:hidden">
          <p className=" border-b-4 font-bold border-b-[#054E12] pb-4">Home</p>
          <p className=" pb-4 text-[#333]/[50%]">Learning Pool</p>
          <p className=" pb-4 text-[#333]/[50%]">Create project</p>
        </div>
        <p className="text-left font-inter text-[#333] mt-4">
          <p className="text-3xl font-semibold">
            Discover Amazing Projects From Around The World
          </p>
          <p className="text-left mt-8 lg:mt8">
            Join Projects That Interests You And Be A Part Of Their Success
            Story
          </p>
        </p>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-y-10 sm:gap-y-20 md:gap-y-32 lg:gap-y-10  mx-auto justify-center w-full place-items-center">
          <Project image={img1} name="Mobile game" />
          <Project image={img2} name="Product design" />
          <Project image={img3} name="Video game" />
          <Project image={img4} name="data analyst" />
          <Project image={img1} name="Mobile game" />
          <Project image={img2} name="Product design" />
          <Project image={img3} name="Video game" />
          <Project image={img4} name="data analyst" />{" "}
          <Project image={img1} name="Mobile game" />
          <Project image={img2} name="Product design" />
          <Project image={img3} name="Video game" />
          <Project image={img4} name="data analyst" />
        </div>
      </div>
      <button className="h-[2rem] mx-auto w-[8rem] sm:h-[3rem] sm:w-[12rem] lg:h-[2rem] lg:w-[6rem] border border-solid border-[#999] rounded-[15px] hover:text-white hover:bg-gradient-to-bl hover:from-[#054E12] hover:to-[#3B8004]">
        Join project
      </button>
    </div>
  );
};

export default Home;
