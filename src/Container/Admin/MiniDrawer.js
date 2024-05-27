import React from "react";
import logo from "../../assets/Logo.png";
import { FaWpforms } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import { TbLicense } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";

function MiniDrawer() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" items-end w-full flex">
      <div
        dir="rtl"
        className=" top-3 right-2 bg-blue-700 bg-opacity-90 fixed w-1/5 h-[97vh] items-center flex flex-col rounded-2xl"
      >
        <div className=" w-[90%] h-[9.5%] border-b-2 flex justify-center items-center border-white ">
          <img className=" w-11" alt="logo" src={logo} />
        </div>

        <div
          onClick={() => navigate("/Admin/CreateExam")}
          className={
            location.pathname === "/Admin/CreateExam"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>فرم پایه آزمون</h2>
          <FaWpforms />
        </div>
        <div
          onClick={() => navigate("/Admin/RunExam")}
          className={
            location.pathname === "/Admin/RunExam"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>ایجاد آزمون</h2>
          <GrDocumentPerformance />
        </div>
        <div
          onClick={() => navigate("/Admin/CreateQuestion")}
          className={
            location.pathname === "/Admin/CreateQuestion"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>تعریف سوال</h2>
          <MdFormatListNumberedRtl />
        </div>
        <div
          onClick={() => navigate("/Admin/CreateLicense")}
          className={
            location.pathname === "/Admin/CreateLicense"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>ایجاد مدرک</h2>
          <TbLicense />
        </div>
        <div
          onClick={() => navigate("/Admin/Accepters")}
          className={
            location.pathname === "/Admin/Accepters"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>تایید کنندگان </h2>
          <FaPeopleLine />
        </div>
      </div>
    </div>
  );
}

export default MiniDrawer;
