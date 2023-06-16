import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Components/Hero";
import image from "../assets/hero.jpeg";
import Socials from "./../Components/Socials";
import bglgscreen from "../assets/hero.jpeg";
import bgscreen from "../assets/heroMobile.jpeg";

const LandingPage = () => {
  return (
    <div className="px-4  sm:px-20 lg:px-20 min-h-[100%] lg:h-screen w-full  bg-no-repeat  font-lato   bg-cover">
      <img
        src={bglgscreen}
        alt=""
        className="fixed min-h-full top-0 left-0 z-[-1] hidden lg:block"
      />
      <img
        src={bgscreen}
        alt=""
        className="fixed min-h-full top-0 left-0 z-[-1] lg:hidden"
      />
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
