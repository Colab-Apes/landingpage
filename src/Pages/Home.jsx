import React from "react";
import NavBarComp from "../Components/HomePageComponents/NavBarComp";
import Project from "../Components/HomePageComponents/Project";
import img1 from "../assets/projectimages/1.png";
import img2 from "../assets/projectimages/2.png";
import img3 from "../assets/projectimages/3.png";
import img4 from "../assets/projectimages/4.png";
const Home = () => {
  return (
    <div className=" font-lato ">
      <NavBarComp />
      <div className="px-24 mt-[9rem]  z-[-10] ">
        {" "}
        <p className="text-left">
          <p className="text-3xl font-semibold">
            {" "}
            Discover Amazing Projects From Around The World
          </p>
          <p className="text-left">
            Join Projects That Interests You And Be A Part Of Their Success
            Story
          </p>
        </p>
        <div className="grid lg:grid-cols-4 mt-20 gap-y-10 justify-center place-items-center">
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
