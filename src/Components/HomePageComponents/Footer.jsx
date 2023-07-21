import React from "react";
import "../../App.css";
import ape from "../../assets/homepageicons/footerimages/apehead.png";
import logo from "../../assets/homepageicons/footerimages/footerlogo.png";
import SocialLogo from "./SocialLogo";

const Footer = () => {
  return (
    <div>
      <footer className=" font-lato min-h-[30rem] pb-2 px-5 lg:px-10 w-full rounded-[15px]  graid relative mb-4 z-[1]  xl:px-24">
        <img
          src={ape}
          alt=""
          className="bottom-0  absolute object-contain w-[26rem] lg:w-[29.2rem] xl:lg:w-[29rem] rounded-bl-[15px] lg:rounded-l-[15px] left-0 z-[1] "
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 z-[10] text-white pt-10 h-full gap-x-8 gap-y-10 lg:gap-y-0 ">
          <div className="flex flex-col w-full mx-auto  text-sm lg:text-lg xl: text-left z-[3] gap-y-5">
            <p className="text-lg font-bold ">Co_lab Apes</p>
            <p className="lg:mt-4 mt-2">About Us</p>
            <p className="">About Us</p>
            <p className="">Privacy policy</p>
            <p className="">Terms of Use</p> <p className="">Legal</p>
          </div>
          <div className="flex flex-col w-full mx-auto    text-sm lg:text-lg text-left z-[3] gap-y-5">
            <p className="text-lg font-bold">Features</p>
            <p className="lg:mt-4 mt-2">Home</p>
            <p className="">Top 10 projects</p>
            <p className="">Learning pool</p> <p className="">Join </p>
            <p className="">Create project</p>
          </div>
          <div className="flex flex-col w-full mx-auto  text-sm lg:text-lg text-left z-[3] gap-y-5">
            <p className="text-lg font-bold">Learning pool</p>
            <p className="lg:mt-4 mt-2">Analytics</p>
            <p className="">Artificial intelligence</p>{" "}
            <p className="">Animation </p>
            <p className="">Coding</p>
            <p className="">Content writing</p>
            <p className="">Data science</p>
            <p className="">Video editting</p>
            <p className="">3D modelling</p>
          </div>
          <div className="flex flex-col items-center z-[3] text-sm">
            <img src={logo} alt="" className="z-[2]" />
            <p className="mt-5 font-semibold xl:font-bold xl:text-lg">
              help@colabapes.com
            </p>
            <SocialLogo className="mt-2" />
            <button className=" w-full lg:px-12 py-8 mt-8 z-[3] text-main bg-white rounded-[30px] font-lato font-bold text-xl xl:mt-20">
              Contact Us
            </button>
          </div>
          <div className="h-[0.08px] rounded w-full bg-[#999] z-[3] col-span-2 lg:col-span-4 lg:mt-6 "></div>
          <div className="col-span-2 lg:col-span-4 flex justify-center items-center lg:mt-4 z-[3] mb-2">
            <div className="flex items-center">
              {" "}
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433268 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34873 18.9426 4.80688 17.0679 2.93215C15.1931 1.05741 12.6513 0.0029116 10 0ZM10 19.2C8.18042 19.2 6.40169 18.6604 4.88876 17.6495C3.37583 16.6386 2.19664 15.2018 1.50031 13.5207C0.803986 11.8396 0.621796 9.98979 0.97678 8.20517C1.33176 6.42054 2.20798 4.78126 3.49462 3.49462C4.78126 2.20797 6.42055 1.33176 8.20517 0.976775C9.9898 0.621791 11.8396 0.803982 13.5207 1.50031C15.2018 2.19663 16.6386 3.37582 17.6495 4.88875C18.6604 6.40168 19.2 8.18041 19.2 10C19.1974 12.4392 18.2272 14.7777 16.5025 16.5025C14.7777 18.2272 12.4392 19.1973 10 19.2ZM13.52 12.641C12.9658 13.3795 12.1932 13.925 11.3118 14.2001C10.4304 14.4753 9.48471 14.4661 8.60876 14.174C7.73281 13.8819 6.97096 13.3216 6.43111 12.5725C5.89125 11.8233 5.60075 10.9234 5.60075 10C5.60075 9.07662 5.89125 8.17665 6.43111 7.42753C6.97096 6.67841 7.73281 6.11811 8.60876 5.82599C9.48471 5.53387 10.4304 5.52473 11.3118 5.79986C12.1932 6.07499 12.9658 6.62045 13.52 7.359C13.5516 7.40102 13.5746 7.44885 13.5877 7.49976C13.6008 7.55067 13.6037 7.60367 13.5963 7.65571C13.589 7.70776 13.5714 7.75784 13.5447 7.8031C13.5179 7.84836 13.4825 7.88792 13.4405 7.9195C13.3985 7.95108 13.3506 7.97408 13.2997 7.98717C13.2488 8.00027 13.1958 8.00321 13.1438 7.99583C13.0917 7.98845 13.0417 7.97089 12.9964 7.94415C12.9511 7.91741 12.9116 7.88202 12.88 7.84C12.4267 7.23554 11.7946 6.78904 11.0734 6.56375C10.3522 6.33846 9.57839 6.3458 8.86158 6.58474C8.14478 6.82367 7.52132 7.28209 7.07953 7.89504C6.63774 8.508 6.4 9.24442 6.4 10C6.4 10.7556 6.63774 11.492 7.07953 12.105C7.52132 12.7179 8.14478 13.1763 8.86158 13.4153C9.57839 13.6542 10.3522 13.6615 11.0734 13.4362C11.7946 13.211 12.4267 12.7645 12.88 12.16C12.9438 12.0751 13.0387 12.0191 13.1438 12.0042C13.2489 11.9893 13.3556 12.0167 13.4405 12.0805C13.5254 12.1443 13.5814 12.2392 13.5963 12.3443C13.6112 12.4494 13.5838 12.5561 13.52 12.641Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-[14px] font-[200]">
                2023, all rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
