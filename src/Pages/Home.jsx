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

      <div className=" px-8 lg:px-24 mt-8 lg:mt-[9rem]  z-[-10] ">
        <div className="h-[5rem] w-full mx-auto bg-white rounded-[10px] mt-32 shad lg:hidden"></div>
        <p className="text-left font-inter text-[#333333] mt-4">
          <p className="text-3xl font-semibold">
            Discover Amazing Projects From Around The World
          </p>
          <p className="text-left mt-8 lg:mt8">
            Join Projects That Interests You And Be A Part Of Their Success
            Story
          </p>
        </p>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 mt-20 gap-y-10 mx-auto justify-center w-full place-items-center">
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
    </div>
  );
};

export default Home;
