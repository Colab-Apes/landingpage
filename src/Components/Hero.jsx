import React, { useEffect, useState } from "react";
import heroimage from "../assets/waitlistheroimage.png";
import Socials from "./Socials";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";

const Hero = () => {
  const [success, setsuccess] = useState(false);

  const [email, setemail] = useState("");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const submitEmail = () => {
    console.log(email);
    if (email.length === 0) {
      toast.error("Enter an email", {
        position: "bottom-left",
        autoClose: 2000,
        toastId: 1,
        theme: "colored",
      });
    } else if (!validRegex.test(email)) {
      toast.error("Enter a valid email", {
        position: "bottom-left",
        autoClose: 2000,
        toastId: 2,
        theme: "colored",
      });
    } else {
      axios
        .post(
          "https://co-backend-production.up.railway.app/api/v1/mail/subscribe",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          console.log(response);
          setsuccess(true);
          setemail("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setsuccess(false);
    }, 3000);
  }, [success]);

  return (
    <div className="grid lg:flex mt-4 lg:mt-0 xl:px-20 md:h-[75vh] sm:w-[33rem] md:w-[42rem] lg:w-full justify-center lg:gap-x-8 xl:gap-x-16 items-center justify-items-center">
      <div className="flex flex-col lg:min-h-[30vh] justify-between sm:justify-around">
        {/* Heading */}
        <div className="flex items-center gap-x-4">
          <p className="text-main text-lg md:text-2xl xlg:text-lg xl:text-xl font-bold">
            Coming soon
          </p>
          <div className="bg-[#3B8004] sm:w-[10rem] w-[3rem] xl:w-[9rem] h-[0.2rem]"></div>
        </div>

        {/* Animated Text */}
        <TypeAnimation
          className="text-[1.5rem] leading-[1.6] text-left lg:leading-[3rem] w-full sm:w-[33rem] md:w-[40rem] lg:w-[30rem] h-[10rem] sm:h-[10rem] xl:leading-[3.5rem] sm:text-[1.9rem] md:text-4xl lg:text-[2rem] xl:text-[2.5rem] text-main mt-4 font-bold"
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Unlock Your Digital Team: Find, Collaborate, and Build the Future Together",
            10000,
            "Unlock Your Digital Dream Team: Find, Collaborate, and Soar Together",
            10000,
            "Unleash Your Digital Vision with the Perfect Dream Team",
            10000,
            "Empowering Digital Entrepreneurs to Build their Dream Team for Success",
            10000,
            "Unleash Your Digital Vision. Find Your Dream Team Today!",
            10000,
          ]}
          speed={62.5}
          repeat={Infinity}
        />

        {/* Hero Image (hidden on lg and larger screens) */}
        <img
          src={heroimage}
          alt=""
          className="w-[80%] sm:w-[27rem] object-contain lg:hidden mx-auto lg:mx-0  mt-1 sm:mt-4"
          loading="lazy"
        />

        <div className="flex flex-col w-full mt-8 sm:mt-10 justify-between">
          {/* Waitlist Form */}
          <p className="text-[#054E12] text-xl font-lato font-medium">
            Join the wait list
          </p>
          <div className="mt-2"></div>
          {success ? (
            // Success Message
            <div
              className={
                "w-[92%] lg:w-[22rem] duration-500 origin-left scale-x-[92%] lg:scale-x-[22rem] md:px-10 h-[4.5rem] border-main border-4 text-white bg-main/[50%] rounded-[20px] flex items-center text-center justify-center"
              }
            >
              <RiErrorWarningLine className="text-2xl mr-3" />
              <p className="md:text-lg mr-3">Successfully submitted!</p>
              <IoIosClose
                className="text-2xl cursor-pointer"
                onClick={() => setsuccess(false)}
              />
            </div>
          ) : (
            // Waitlist Form Input
            <div className="relative w-full duration-500 origin-left scale-x-[100%]">
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                placeholder="enter your email address..."
                className="h-[4rem] placeholder:text-[#999999] text-lg font-medium w-full lg:w-full lg:origin-left px-[1.3rem] pr-[7rem] rounded-[20px] focus:outline-none border-[#3B8004] border-2 bg-transparent"
              />
              <button
                onClick={() => submitEmail()}
                className="join absolute right-2 inset-y-2 hover:bg-transparent hover:text-main font-lato font-semibold h-[3rem] w-[6rem] rounded-[15px] text-white"
              >
                Join
              </button>
            </div>
          )}

          {/* Social Media Icons (hidden on lg and larger screens) */}
          <div className="lg:hidden mt-6 mb-4 sm:mt-10 ">
            <Socials />
          </div>
        </div>
      </div>

      {/* Hero Image (hidden on sm and smaller screens) */}
      <img
        src={heroimage}
        alt=""
        className="lg:w-[20rem] xl:w-[27rem] object-contain lg:block hidden"
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
