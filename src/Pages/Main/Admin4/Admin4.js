import React from "react";
import CreateLicense from "../../../Container/Admin4/CreateLicense";
import Navbar from "../../../Components/Navbar";
import MiniDrawer from "../../../Container/Admin/MiniDrawer";

function Admin4() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <CreateLicense />
      </div>
    </div>
  );
}

export default Admin4;
