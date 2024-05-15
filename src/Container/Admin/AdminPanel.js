import React from "react";
import Navbar from "../../Components/Navbar";
import MiniDrawer from "./MiniDrawer";

function AdminPanel() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
    </div>
  );
}

export default AdminPanel;
