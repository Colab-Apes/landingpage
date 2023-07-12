import React from "react";
import "../../App.css";
import ape from "../../assets/homepageicons/footerimages/apehead.png";
const Footer = () => {
  return (
    <div>
      <footer className=" h-[25rem] w-full rounded-[15px]  graid relative">
        <img
          src={ape}
          alt=""
          className="top-0 absolute object-contain w-[21.58rem] z-[1]"
        />
        <div className="grid grid-cols-4">
          <div className="flex flex-col items-center z-[2]">
            <p className="ss">Co_lab Apes</p>
          </div>
          <div className="flex flex-col items-center"></div>
          <div className="flex flex-col items-center"></div>
          <div className="flex flex-col items-center"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
