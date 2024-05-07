import React from "react";
import logo from "../assets/Logo.png"
function Navbar() {
  return (
    <div className="   shadow-2xl h-20 w-full flex items-center bg-gradient-to-r from-sky-500 to-indigo-800 justify-center">
      <nav className=" flex-col-reverse w-4/5 flex justify-center items-center">
        <h5 className=" text-xl font-semibold"> وزارت صنعت،معدن و تجارت جمهوری اسلامی ایران</h5>
        <img className=" w-11" alt="logo" src={logo}/>
      </nav>
    </div>
  );
}

export default Navbar;
