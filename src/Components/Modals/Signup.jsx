import React from "react";
import img from "../../assets/Modalbackgrounds/authbg.png";
const Signup = () => {
  return (
    <div className="h-screen w-full">
      {" "}
      <img
        src={img}
        alt=""
        className="fixed min-h-full w-full top-0 left-0 z-[-1] hidden lg:block"
      />
    </div>
  );
};

export default Signup;
