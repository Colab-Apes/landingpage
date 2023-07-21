import React from "react";
import "../App.css";
const CreateProject = () => {
  return (
    <div className="font-lato">
      <div className="w-full shadow-[-5px_15px_50px_0px_rgba(5,_78,_18,_0.05)] h-[32rem] bg-white rounded-[30px] px-10">
        <p className="text-[#333] text-[40px] font-bold">Create new project</p>
        <div className="flex items-center">
          <div className="learnbgstep h-[5rem] w-[4.3rem]  bg-no-repeat flex justify-center items-center text-xl text-[#054E12] font-bold">
            1
          </div>
          <div className="h-4-w-20 bg-[#054E12]"></div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center  mt-10 mb-10"></div>
    </div>
  );
};

export default CreateProject;
