import React from "react";
import youtube from "../assets/socials/youtube.svg";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
const Socials = () => {
  return (
    <div className="flex w-full  h-[2rem] items-center justify-end gap-x-3">
      <a href="" className="border-[#3B8004] border h-[2rem] w-[2rem] rounded-full flex justify-center items-center">
        <img src={youtube} alt="" />
      </a>
      <a  href="" className="border-[#3B8004] border h-[2rem] w-[2rem] rounded-full flex justify-center items-center">
        <img src={facebook} alt="" />
      </a>
      <a  href="" className="border-[#3B8004] border h-[2rem] w-[2rem] rounded-full flex justify-center items-center">
        <img src={instagram} alt="" />
      </a>
      <a  href="" className="border-[#3B8004] border h-[2rem] w-[2rem] rounded-full flex justify-center items-center">
        <img src={twitter} alt="" />
      </a>
      <a  href="" className="border-[#3B8004] border h-[2rem] w-[2rem] rounded-full flex justify-center items-center">
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
};

export default Socials;
