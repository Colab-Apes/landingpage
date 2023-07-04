import React from "react";
import NavBarComp from "../Components/HomePageComponents/NavBarComp";
import Project from "../Components/HomePageComponents/Project";
const Home = () => {
  return (
    <div className=" font-lato ">
      <NavBarComp />
      <div className="px-24 mt-4">
        {" "}
        <p className="text-left">
          <p className="text-2xl">
            {" "}
            Discover Amazing Projects From Around The World
          </p>
          <p className="text-left">
            Join Projects That Interests You And Be A Part Of Their Success
            Story
          </p>
        </p>
        <Project />
      </div>
    </div>
  );
};

export default Home;
