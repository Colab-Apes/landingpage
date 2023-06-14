import React from "react";
import NavBar from "../Components/NavBar";
import Circles from "./../Components/Circles";
import Hero from "./../Components/Hero";

const LandingPage = () => {
  return (
    <div className="px-20 h-full w-full bg-[#F5FFF7] font-lato">
      <NavBar />
      <Circles />
      <Hero />
    </div>
  );
};

export default LandingPage;
