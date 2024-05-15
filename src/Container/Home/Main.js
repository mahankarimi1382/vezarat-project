import React from "react";
import hero from "../../assets/hero.jpg";
import { IoMdLogIn } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="  h-screen  w-full flex items-center justify-center">
      <div className=" w-4/5 my-10 flex justify-between items-center">
        <div className=" w-1/2 flex items-center justify-center gap-10  flex-col ">
            <SiTicktick className=" absolute top-32 right-32 text-[200px] text-slate-500 opacity-50"/>
          <h2 className=" font-bold text-7xl">
            سامانه آزمون
            <br />
  
          </h2>
          <Link to="Login" className=" transition-all flex gap-1 bg-blue-600 p-3 text-xl font-medium rounded-lg hover:bg-gray-700 hover:text-white">
          <IoMdLogIn className=" mt-1 text-3xl"/>

            ورود و ثبت نام
          </Link>
        </div>
        <img className=" shadow-2xl rounded-md" width={700} alt="hero" src={hero} />
      </div>
      
    </div>
  );
}

export default Main;
