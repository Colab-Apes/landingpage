import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Components/Hero";
import image from "../assets/hero.jpeg";
import Socials from "./../Components/Socials";
import Background from "./../Components/Background";

const LandingPage = () => {
  return (
    <div className="px-4  sm:px-20 lg:px-20 min-h-[100%] lg:h-screen w-full  bg-no-repeat  font-lato   bg-cover">
      <Background />
      <NavBar />
      <Hero />
      <div
        className=" w-full
         lg:block hidden "
      >
        {" "}
        <Socials />
      </div>
    </div>
  );
};

export default LandingPage;
