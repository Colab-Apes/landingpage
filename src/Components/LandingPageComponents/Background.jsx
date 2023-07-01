import React from "react";
import bglgscreen from "../../assets/hero.jpeg";
import bgscreen from "../../assets/heroMobile.jpeg";
const Background = () => {
  return (
    <div className="">
      <img
        src={bglgscreen}
        alt=""
        className="fixed min-h-full w-full top-0 left-0 z-[-1] hidden lg:block"
      />
      <img
        src={bgscreen}
        alt=""
        className="fixed min-h-full w-full top-0 left-0 z-[-1] lg:hidden"
      />
    </div>
  );
};

export default Background;
