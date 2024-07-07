import React from "react";
import Navbar from "../../../Components/Navbar";
import MiniDrawer from "../../../Container/Admin/MiniDrawer";
import Hosts from "../../../Container/Admin6/Hosts";

function Admin6() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <Hosts />
      </div>
    </div>
  );
}

export default Admin6;
