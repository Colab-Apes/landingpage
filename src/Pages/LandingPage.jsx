import React from "react";
import NavBar from "../Components/NavBar";
import Circles from "./../Components/Circles";

const LandingPage = () => {
  return (
    <div className="px-20 h-full w-full bg-[#F5FFF7] font-lato">
      <NavBar />
      <Circles />
      <div className="grid md:grid-cols-2 px-10">
        <div className="flex">
          <p>Coming soon</p>
          <div className="flex bg-[#3B8004] px-2 py-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
