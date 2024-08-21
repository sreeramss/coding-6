import React from "react";
import { Badge, Calendar } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Calender = () => {
  const getListData = (value) => {
    let listData = [];
    switch (value.date()) {
      case 3:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 4:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 6:
        listData = [
          {
            type: "suc",
            content: "Murugan-PL",
          },
          {
            type: "suc",
            content: "Balaji-PL",
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
      case 11:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 17:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 18:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 24:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 25:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 31:
        listData = [
          {
            type: "pending",
            content: "Week off",
          },
          {
            type: "pending",
            content: "Week off",
          },
        ];
        break;
      case 10:
        listData = [
          {
            type: "pending",
            content: "This is warning event.",
          },
          {
            type: "suc",
            content: "This is usual event.",
          },
          {
            type: "error",
            content: "This is error event.",
          },
        ];
        break;
      case 15:
        listData = [
          {
            type: "pending",
            content: "Suresh-PL",
          },
          {
            type: "suc",
            content: "Mani-PL",
          },
          {
            type: "error",
            content: "Close",
          },
        ];
        break;
      default:
    }
    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type}
              text={item.content}
              className={`${item.type === "pending" && "bg-[#f9f5e7]"} ${
                item.type === "suc" && "bg-[#f7edf6]"
              } ${
                item.type === "error" && "text-white bg-[#ea4337]"
              } w-[100%] text-center px-3 py-1 mb-1 rounded-full`}
            />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <div className="w-[100%] h-auto px-4 py-6 sm:px-8 sm:py-6">
      <div className="w-full h-auto border-2 border-[#e3e6ea] rounded-xl overflow-hidden">
        <div className="w-full py-4 px-4 sm:px-6 border-b border-[#e3e6ea]">
          <h1 className="text-lg font-semibold">Leave Details</h1>
          <p className="text-[#70798d]">Check your team leave details here.</p>
        </div>
        <div className="w-full h-auto px-4 sm:px-5">
          <Calendar cellRender={cellRender} />
        </div>
      </div>
    </div>
  );
};

export default Calender;
