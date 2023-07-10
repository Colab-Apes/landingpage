import React, { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Overlay from "./../Components/Modals/Overlay";
import NavBar from "../Components/LandingPageComponents/NavBar";
import Hero from "./../Components/LandingPageComponents/Hero";
import Socials from "../Components/LandingPageComponents/Socials";
import Background from "../Components/LandingPageComponents/Background";

const LandingPage = () => {
  const [isModal, setisModal] = useState(false);

  useEffect(() => {
    const safeDocument = typeof document !== "undefined" ? document : {};
    const { body } = safeDocument;
    if (isModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [isModal]);

  return (
    <div className=" px-4 sm:px-0 sm:w-[33rem] md:w-[42rem] mx-auto lg:px-10 xl:px-20 min-h-screen lg:min-h-screen  lg:w-full  bg-no-repeat  font-lato   bg-cover">
      {/* This signup is a modal */}

      <Overlay value={isModal} changeValue={setisModal} />
      {/* This signup is a modal */}
      <ToastContainer />
      {/* Background Component */}
      <Background />
      {/* Navigation Bar Component */}
      <NavBar changeValue={setisModal} />
      {/* Hero Component */}
      <Hero />
      {/* Socials Component for lg screen  */}
      <div className="w-full lg:block hidden">
        <Socials />
      </div>
    </div>
  );
};

export default LandingPage;
