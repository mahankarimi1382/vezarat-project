import React from "react";
import UserDrawer from "../../../../Components/UserDrawer";
import Navbar from "../../../../Components/Navbar";
import JoinExam from "../../../../Container/User1/JoinExam";

function User1() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <UserDrawer />
      </div>
      <div dir="ltr">
        <JoinExam/>
      </div>
    </div>
  );
}

export default User1;
