import React from "react";
import { SiPytest } from "react-icons/si";

function Footer() {
  return (
    <div className=" bg-gradient-to-r from-indigo-800 flex justify-center items-center to-sky-800 h-52">
      <div className=" justify-between w-full mr-24 items-center flex ">
        <ul className=" flex list-disc font-medium flex-col items-start gap-2 cursor-pointer text-white text-xl">
          <li className=" transition-all hover:bg-indigo-300 px-5 py-1 rounded-md ">
            تماس با ما
          </li>
          <li className=" transition-all hover:bg-indigo-300 px-5 py-1 rounded-md ">
            قوانین و مقررات
          </li>
          <li className=" transition-all hover:bg-indigo-300 px-5 py-1 rounded-md ">
            سوالات متداول
          </li>
          <li className=" transition-all hover:bg-indigo-300 px-5 py-1 rounded-md ">
            کپی رایت
          </li>
        </ul>
        <SiPytest className=" text-[200px]  object-cover text-slate-300 opacity-80" />
      </div>
    </div>
  );
}

export default Footer;
