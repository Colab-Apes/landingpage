import React, { useState, useRef } from "react";

const OTPInputField = ({ length }) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const newOTP = [...otp];
    newOTP[index] = e.target.value;
    setOTP(newOTP);

    if (e.target.value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center">
      {otp.map((value, index) => (
        <div className="relative" key={index}>
          <input
            type="text"
            className="w-16 h-11 border-[2px] rounded-md text-center mx-2 focus:outline-none border-[#999] focus:border-[#4EAF00]"
            value={value}
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
          {!value && (
            <div className="absolute left-[50%]  right-[50%] w-[2rem]  translate-x-[-50%]  translate-y-[-50%] bottom-2 bg-[#999999] h-[1.2px] "></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OTPInputField;
