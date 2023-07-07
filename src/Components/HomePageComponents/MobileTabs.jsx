import React from "react";
import TabHook from "../../Hooks/TabHook";

const MobileTabs = () => {
  const { tabs, checkindex, setcheckindex } = TabHook();
  return (
    <div className="h-[5rem] sm:text-2xl flex items-center justify-evenly w-full mx-auto bg-white rounded-[10px] shad lg:hidden">
      <p className=" border-b-4 font-bold border-b-[#054E12] pb-4">Home</p>
      <p className=" pb-4 text-[#333]/[50%]">Learning Pool</p>
      <p className=" pb-4 text-[#333]/[50%]">Create project</p>
    </div>
  );
};

export default MobileTabs;
