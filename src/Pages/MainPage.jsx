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
    <div>
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
  );
};

export default MainPage;
