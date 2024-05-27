import React from "react";
import Navbar from "../../../Components/Navbar";
import MiniDrawer from "../../../Container/Admin/MiniDrawer";
import Accepters from "../../../Container/Admin5/Accepters";

function Admin5() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <Accepters />
      </div>
    </div>
  );
}

export default Admin5;
