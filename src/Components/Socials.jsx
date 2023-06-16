import React from "react";
import youtube from "../assets/socials/youtube.svg";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
const Socials = () => {
  return (
    <div className="flex w-full  md:h-[10vh] items-center   justify-center lg:justify-end gap-x-3 ">
      <a
        href="https://www.youtube.com"
        className="border-[#3B8004] hover:scale-125  h-[2rem] w-[2rem] rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={youtube} alt="" />
      </a>
      <a
        href="https://www.twitter.com/co_labapes"
        className="border-[#3B8004]  h-[2rem] w-[2rem] hover:scale-125  rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="" />
      </a>
      <a
        href="https://www.instagram.com/co_labapes"
        className="border-[#3B8004]  h-[2rem] w-[2rem]  hover:scale-125  rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} alt="" />
      </a>
      <a
        href="https://www.twitter.com/co_labapes"
        className="border-[#3B8004]  h-[2rem] w-[2rem] hover:scale-125  rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="" />
      </a>
      <a
        href="https://www.twitter.com/co_labapes"
        className="border-[#3B8004] h-[2rem] w-[2rem]  hover:scale-125 rounded-full flex justify-center items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default Socials;
