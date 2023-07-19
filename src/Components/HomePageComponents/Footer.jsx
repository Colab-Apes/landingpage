import React from "react";
import "../../App.css";
import ape from "../../assets/homepageicons/footerimages/apehead.png";
const Footer = () => {
  return (
    <div>
      <footer className=" h-[25rem] w-full rounded-[15px]  graid relative mb-10 ">
        <img
          src={ape}
          alt=""
          className="top-0 absolute object-contain w-[21.58rem] rounded-[15px] left-0 z-[1] "
        />
        <div className="grid grid-cols-4 z-[10] text-white pt-10">
          <div className="flex flex-col w-fit mx-auto  text-left z-[3] gap-y-4">
            <p className="text-lg font-bold ">Co_lab Apes</p>
            <p className=" mt-5">About Us</p>
            <p className="ss">About Us</p>
            <p className="ss">Privacy policy</p>
            <p className="ss">Terms of Use</p>{" "}
            <p className="ss">Legal</p>
          </div>
          <div className="flex flex-col w-fit mx-auto  text-left z-[3] gap-y-4">
            <p className="text-lg font-bold">Features</p>
            <p className=" mt-5">Home</p>
            <p className="ss">Analytics</p>
            <p className="ss">Artificial intelligence</p>{" "}
            <p className="ss">Animation </p>
            <p className="ss">Coding</p>
            <p className="ss">Content writing</p>
            <p className="ss">Data science</p>
            <p className="ss">Video editting</p>  
             <p className="ss">3D modelling</p>
          </div>
          <div className="flex flex-col w-fit mx-auto  text-left z-[3] gap-y-4">
            <p className="text-lg font-bold">Features</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">Features</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
