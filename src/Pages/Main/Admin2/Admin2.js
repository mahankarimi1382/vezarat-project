import React from "react";
import RunExam from "../../../Container/Admin/CreateExam/CreateExam";
import Navbar from "../../../Components/Navbar";
import MiniDrawer from "../../../Container/Admin/MiniDrawer";

function Admin2() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <RunExam />
      </div>
    </div>
  );
}

export default Admin2;
