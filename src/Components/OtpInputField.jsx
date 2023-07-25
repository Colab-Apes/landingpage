import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const OTPInputField = ({ length }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const otpInputRefs = useRef([]); // To store references of each OTP input field

  const handleInputChange = (index, event) => {
    const value = event.target.value;

    if (value.length === 0) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    } else if (value.length === 1 && /^\d+$/.test(value)) {
    
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (otpInputRefs.current[index + 1]) {
        otpInputRefs.current[index + 1].focus();
      }
    }
  };

  const handleInputPaste = (event) => {
    const pasteData = event.clipboardData.getData("text");
    // Split the pasted data into individual characters
    const pastedDigits = pasteData.slice(0, length).split("");

    const newOtp = [...otp];
    for (let i = 0; i < length; i++) {
      if (pastedDigits[i] && /^\d+$/.test(pastedDigits[i])) {
        newOtp[i] = pastedDigits[i];
      }
    }
    otpInputRefs.current[3].focus();
    setOtp(newOtp);
  };
  const handleKeyDown = (e, index) => {
    console.log(otp);
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      console.log(index);
      otpInputRefs.current[index - 1].focus();
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
            onChange={(e) => handleInputChange(index, e)}
            onPaste={(e) => handleInputPaste(e)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(input) => (otpInputRefs.current[index] = input)}
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
