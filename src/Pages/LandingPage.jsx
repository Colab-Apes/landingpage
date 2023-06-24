import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Hero from "./../Components/Hero";
import Socials from "./../Components/Socials";
import Background from "./../Components/Background";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./../Components/Modals/Signup";

const LandingPage = () => {
  const [isModal, setisModal] = useState(false);
  return (
    <div className=" px-4 sm:px-0 sm:w-[33rem] md:w-[40rem] mx-auto lg:px-20 min-h-[100%] lg:h-screen lg:w-full  bg-no-repeat  font-lato   bg-cover">
      {/* This signup is a modal */}
      <Signup value={isModal} changeValue={setisModal} />
      {/* This signup is a modal */}
      <ToastContainer />
      <Background />
      <NavBar changeValue={setisModal} />
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
