import React from "react";
import { IoEnter } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import logo from "../assets/Logo.png";
import { useLocation, useNavigate } from "react-router";

function UserDrawer() {
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
          onClick={() => navigate("/User/jointoexam")}
          className={
            location.pathname === "/User/jointoexam"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>شرکت در آزمون</h2>
          <IoEnter />
        </div>
        <div
          onClick={() => navigate("/Admin/mydocs")}
          className={
            location.pathname === "/Admin/RunExam"
              ? "px-2 bg-slate-300 text-blue-800 rounded-md transition-all cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
              : " px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl"
          }
        >
          <h2>مدارک من</h2>
          <MdWorkHistory />
        </div>
      </div>
    </div>
  );
}

export default UserDrawer;
