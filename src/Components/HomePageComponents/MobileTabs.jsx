import React from "react";
import TabHook from "../../Hooks/TabHook";

const MobileTabs = ({ tabs, checkindex, setcheckindex }) => {
  return (
    <div className="h-[5rem] sm:text-2xl flex items-center justify-evenly w-full mx-auto bg-white rounded-[10px] shad lg:hidden">
      {tabs.map((tab, index) => (
        <p
          onClick={() => setcheckindex(index)}
          key={index}
          className={
            index === checkindex
              ? `border-b-2  border-b-[#054E12] ${
                  index == 0 ? " " : " duration-500 ease-linear"
                } pb-4 cursor-pointer`
              : `text-[#33333380]  pb-4 cursor-pointer border-b-2 duration-200 ease-linear${
                  index == 0 ? "w-[3.7rem]" : "w-[8rem]"
                }  border-b-white`
          }
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

export default MobileTabs;
