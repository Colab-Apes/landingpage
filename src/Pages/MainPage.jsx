import React from "react";
import NavBarComp from "../Components/HomePageComponents/NavBarComp";
import MobileTabs from "../Components/HomePageComponents/MobileTabs";
import TabHook from "../Hooks/TabHook";
import HomePage from ".././Pages/HomePage";
import LearningPool from ".././Pages/LearningPool";
import CreateProject from "./CreateProject";
import Footer from "../Components/HomePageComponents/Footer";

const MainPage = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();
  return (
    <div className=" font-lato  bg-white ">
      <div className=" px-8 sm:px-10 lg:px-6 xl:px-10 mt-20 sm:mt-32  lg:mt-[10rem] xl:mt-[12rem]   ">
        <NavBarComp
          tabs={tabs}
          checkindex={checkindex}
          setcheckindex={setcheckindex}
        />
        <MobileTabs
          tabs={tabs}
          checkindex={checkindex}
          setcheckindex={setcheckindex}
        />

        {checkindex == 0 ? (
          <HomePage />
        ) : checkindex == 1 ? (
          <LearningPool />
        ) : (
          <CreateProject />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
