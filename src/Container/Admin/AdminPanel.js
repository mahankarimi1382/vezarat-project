import React from "react";
import Navbar from "../../Components/Navbar";
import MiniDrawer from "./MiniDrawer";
import CreateExam from "../Admin2/RunExam";

function AdminPanel() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <CreateExam />
      </div>
    </div>
  );
}

export default AdminPanel;
