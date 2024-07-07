import React from "react";
import Navbar from "../../../Components/Navbar";
import MiniDrawer from "../../../Container/Admin/MiniDrawer";
import Requests from "../../../Container/Admin7/Requests";

function Admin7() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <Requests />
      </div>
    </div>
  );
}

export default Admin7;
