import React from "react";
import { LuUsers } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import img from "../photo_2024-08-21_17-52-51.jpg";

const Leaverequest = () => {
  const data1 = [
    {
      name: "Suresh",
      type: "PL",
      from: "02 Jun 2024 - FH",
      to: "02 Jun 2024 - FH",
      days: 0.5,
      decision: "pending",
    },
    {
      name: "Logesh",
      type: "CL",
      from: "12 Jun 2024",
      to: "17 Jun 2024",
      days: 4,
      decision: "pending",
    },
    {
      name: "Ashok Kumar",
      type: "PL",
      from: "12 Jun 2024",
      to: "12 Jun 2024",
      days: 1,
      decision: "pending",
    },
    {
      name: "Suresh",
      type: "CL",
      from: "12 Jun 2024",
      to: "12 Jun 2024",
      days: 1,
      decision: "pending",
    },
  ];

  const data2 = [
    {
      type: "PL",
      from: "12 Jun 2024",
      to: "12 Jun 2024",
      days: 1,
      status: "Pending",
      action: "view",
    },
    {
      type: "CL",
      from: "15 Jun 2024",
      to: "15 Jun 2024",
      days: 3,
      status: "Pending",
      action: "view",
    },
    {
      type: "PL",
      from: "26 Jun 2024",
      to: "26 Jun 2024",
      days: 1,
      status: "Rejected",
      action: "view",
    },
    {
      type: "CL",
      from: "28 Jun 2024",
      to: "28 Jun 2024",
      days: 1,
      status: "Approved",
      action: "view",
    },
    {
      type: "CL",
      from: "28 Jun 2024",
      to: "28 Jun 2024",
      days: 1,
      status: "Approved",
      action: "view",
    },
  ];

  return (
    <div className="p-4 md:p-8 gap-6 flex flex-col md:flex-row w-full">
      <div className="w-full md:w-[748px] h-auto border border-[#e3e6ea] bg-white rounded-xl mb-6 md:mb-0">
        <div className="w-full flex flex-col md:flex-row items-center p-4">
          {/* ICON SECTION */}
          <div className="bg-[#fef3f2] text-lg m-3 p-2 rounded-full">
            <LuUsers className="text-red-600" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-start md:items-center mt-2">
              <h2 className="font-semibold text-lg">Team Leave Requests</h2>
              <span className="bg-[#fef3f2] border border-red-600 text-red-600 rounded-xl mt-1 md:ml-3 md:mt-0 px-2 h-[19px] py-[2px] text-[10px]">
                5 Requests
              </span>
            </div>
            <p className="text-[13px] opacity-70">
              Manage your team members' leave requests here
            </p>
          </div>
          <div className="w-full md:w-auto flex items-center justify-center mt-4 md:mt-0">
            <div className="flex border border-[#d0d5dd] p-[7px] rounded-lg">
              <CiSearch className="mt-1 text-gray-600" />
              <input
                type="text"
                className="border border-none outline-none pl-1 bg-inherit placeholder-gray-600"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        
        {/* Card Layout for Mobile */}
        <div className="block md:hidden p-4">
          {data1.map((item, index) => (
            <div key={index} className="border border-[#eaecf0] rounded-lg p-4 mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold">{item.name}</h3>
                <div
                  className={`${
                    item.type === "PL"
                      ? "bg-[#f7edf6] text-[#c11574]"
                      : "bg-[#e9f3fb] text-[#175cd3]"
                  } px-2 py-1 rounded-full text-xs`}
                >
                  {item.type}
                </div>
              </div>
              <p className="text-sm">
                <strong>From:</strong> {item.from}
              </p>
              <p className="text-sm">
                <strong>To:</strong> {item.to}
              </p>
              <p className="text-sm">
                <strong>Days:</strong> {item.days}
              </p>
              <div className="flex justify-between mt-2">
                <button className="flex-1 bg-green-500 text-white py-1 rounded-lg mx-1 flex justify-center">
                  <IoCheckmark className="text-xl" />
                </button>
                <button className="flex-1 bg-red-500 text-white py-1 rounded-lg mx-1 flex justify-center">
                  <RxCross2 className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Table Layout for Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border border-[#e3e6ea]">
            <thead className="bg-[#f9fafb] text-[#475467]">
              <tr>
                <th className="py-3 px-3 border-b border-[#eaecf0]">Name</th>
                <th className="px-3 border-b border-[#eaecf0]">Type</th>
                <th className="px-3 border-b border-[#eaecf0]">From</th>
                <th className="px-3 border-b border-[#eaecf0]">To</th>
                <th className="px-3 border-b border-[#eaecf0]">Days</th>
                <th className="px-3 border-b border-[#eaecf0]">Decision</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.name}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0] text-center">
                    <div
                      className={`${
                        item.type === "PL"
                          ? "bg-[#f7edf6] text-[#c11574]"
                          : "bg-[#e9f3fb] text-[#175cd3]"
                      } px-2 py-1 rounded-full`}
                    >
                      {item.type}
                    </div>
                  </td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.from}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.to}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.days}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">
                    <div className="flex justify-center">
                      <div className="border-2 border-[#e3e6ea] rounded-xl flex">
                        <button className="px-3 py-2 border-r-2 border-[#e3e6ea]">
                          <IoCheckmark className="text-xl" />
                        </button>
                        <button className="px-3 py-2">
                          <RxCross2 className="text-xl text-[#d92d20]" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="w-full p-4">
          <div className="flex justify-center">
            <button className="bg-[#f9fafb] border border-[#e3e6ea] rounded-xl text-sm text-[#344054] px-4 py-2">
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="flex-1 md:ml-6 border border-[#e3e6ea] bg-white rounded-xl p-4">
        <h2 className="font-semibold text-lg mb-2">My Leave Requests</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-[#e3e6ea]">
            <thead className="bg-[#f9fafb] text-[#475467]">
              <tr>
                <th className="py-3 px-3 border-b border-[#eaecf0]">Type</th>
                <th className="px-3 border-b border-[#eaecf0]">From</th>
                <th className="px-3 border-b border-[#eaecf0]">To</th>
                <th className="px-3 border-b border-[#eaecf0]">Days</th>
                <th className="px-3 border-b border-[#eaecf0]">Status</th>
                <th className="px-3 border-b border-[#eaecf0]">Action</th>
              </tr>
            </thead>
            <tbody>
              {data2.map((item, index) => (
                <tr key={index}>
                  <td className="px-3 py-2 border-b border-[#eaecf0] text-center">
                    <div
                      className={`${
                        item.type === "PL"
                          ? "bg-[#f7edf6] text-[#c11574]"
                          : "bg-[#e9f3fb] text-[#175cd3]"
                      } px-2 py-1 rounded-full`}
                    >
                      {item.type}
                    </div>
                  </td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.from}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.to}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.days}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">{item.status}</td>
                  <td className="px-3 py-2 border-b border-[#eaecf0]">
                    <button className="bg-[#f2f4f7] rounded-xl px-2 py-1 text-[#344054] flex items-center">
                      <IoEyeOutline className="text-xl" />
                      <span className="ml-2 text-sm">View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaverequest;
