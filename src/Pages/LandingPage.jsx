import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Components/Hero";
import image from "../assets/hero.jpeg";
import Socials from "./../Components/Socials";

const LandingPage = () => {
  return (
    <div className="px-4 md:px-20 lg:px-20 h-screen w-full bg-[#F5FFF7] bg-no-repeat  font-lato bg-mobilehero sm:bg-hero  bg-cover">
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
