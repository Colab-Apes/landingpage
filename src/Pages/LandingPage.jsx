import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Components/Hero";
import image from "../assets/hero.jpeg";
import Socials from './../Components/Socials';

const LandingPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 h-screen w-screen bg-[#F5FFF7] bg-no-repeat  font-lato bg-mobilehero md:bg-hero  bg-cover">
      <NavBar />
      <Hero />
      <Socials />
    </div>
  );
};

export default LandingPage;
