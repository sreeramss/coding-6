import React from "react";
import { FiCalendar } from "react-icons/fi";
import { IoAddSharp } from "react-icons/io5";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import img2 from "../Screenshot 2024-08-21 175718.png";
const Header = () => {
  return (
    <div className="w-[100%] h-auto">
      <div className="w-full flex justify-end border-b-2 px-10 py-2">
        <img className="w-10" src={img2} alt="" />
      </div>
      <div className="w-full h-16 text-[#70798d] px-10 flex items-center gap-8 shadow-md shadow-gray-200">
        <h1>Attendance</h1>
        <h1>Leave</h1>
        <h1>Remote</h1>
        <h1>Others</h1>
      </div>
      <div className="py-8 px-8 flex gap-8">
        <button className="border-2 border-[#e3e6ea] px-4 py-2 rounded-md flex items-center gap-2">
          <FiCalendar className="text-lg" />{" "}
          <span className="text-sm">2022</span>
        </button>
        <button className="bg-[#f04438] text-white px-4 py-1 rounded-md flex items-center gap-2">
          <IoAddSharp className="text-lg" /> Apply Leave
        </button>
      </div>
      <div className="w-full flex gap-5 py-2 px-8 max-sm:flex-col">
        <div className="w-full h-28 px-2 flex rounded-md overflow-hidden border-2 border-[#e3e6ea]">
          <div className="w-full h-full px-4 flex flex-col justify-center gap-5">
            <h1 className="text-xl ">Casual Leave</h1>
            <h1 className="text-[#70798d]">
              <span className="text-xl text-black font-semibold">08</span>{" "}
              Remaining
            </h1>
          </div>
          <div className="w-[100px] h-full flex flex-col items-center justify-center relative">
            <SemiCircleProgressBar
              percentage={30}
              diameter={90}
              stroke={"#039855"}
              strokeWidth={7}
              background={"#e5e6e9"}
            />
            <h1>Availed</h1>
            <h2 className="absolute top-10 font-semibold">04</h2>
          </div>
        </div>
        <div className="w-full h-28 px-2 flex rounded-md overflow-hidden border-2 border-[#e3e6ea]">
          <div className="w-full h-full px-4 flex flex-col justify-center gap-5">
            <h1 className="text-xl ">Privilege</h1>
            <h1 className="text-[#70798d]">
              <span className="text-xl text-black font-semibold">11</span>{" "}
              Remaining
            </h1>
          </div>
          <div className="w-[100px] h-full flex flex-col items-center justify-center relative">
            <SemiCircleProgressBar
              percentage={20}
              diameter={90}
              stroke={"#444ce7"}
              strokeWidth={7}
              background={"#e5e6e9"}
            />
            <h1>Availed</h1>
            <h2 className="absolute top-10 font-semibold">01</h2>
          </div>
        </div>
        <div className="w-full h-28 px-2 flex rounded-md overflow-hidden border-2 border-[#e3e6ea]">
          <div className="w-full h-full px-4 flex flex-col justify-center gap-5">
            <h1 className="text-xl ">Sick Leave</h1>
            <h1 className="text-[#70798d]">
              <span className="text-xl text-black font-semibold">03</span>{" "}
              Remaining
            </h1>
          </div>
          <div className="w-[100px] h-full flex flex-col items-center justify-center relative">
            <SemiCircleProgressBar
              percentage={60}
              diameter={90}
              stroke={"#dc6803"}
              strokeWidth={7}
              background={"#e5e6e9"}
            />
            <h1>Availed</h1>
            <h2 className="absolute top-10 font-semibold">07</h2>
          </div>
        </div>
        <div className="w-full h-28 px-2 flex rounded-md overflow-hidden border-2 border-[#e3e6ea]">
          <div className="w-full h-full px-4 flex flex-col justify-center gap-5">
            <h1 className="text-xl ">Comp off</h1>
            <h1 className="text-[#70798d]">
              <span className="text-xl text-black font-semibold">02</span>{" "}
              Remaining
            </h1>
          </div>
          <div className="w-[100px] h-full flex flex-col items-center justify-center relative">
            <SemiCircleProgressBar
              percentage={30}
              diameter={90}
              stroke={"#dd2590"}
              strokeWidth={7}
              background={"#e5e6e9"}
            />
            <h1>Availed</h1>
            <h2 className="absolute top-10 font-semibold">01</h2>
          </div>
        </div>
        <div className="w-[30%] h-28 px-2 flex rounded-md overflow-hidden border-2 border-[#e3e6ea] max-sm:hidden">
          <div className="w-full h-full flex flex-col justify-center gap-5">
            <h1 className="text-xl ">Berea...</h1>
            <h1 className="text-[#70798d]">
              <span className="text-xl text-black font-semibold">00</span> Re...
            </h1>
          </div>
        </div>
        <div className="w-[20%] h-28 px-2 flex flex-col gap-4 rounded-md overflow-hidden ">
          <button className="px-4 py-3 border-2 border-[#e3e6ea] rounded-md">
            <FaArrowRight className="text-xl" />
          </button>
          <button className="px-4 py-3 border-2 border-[#e3e6ea] rounded-md">
            <FaArrowLeft className="text-xl text-[#9ea7b7]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
