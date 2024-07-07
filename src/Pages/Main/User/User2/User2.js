import React from "react";
import UserDrawer from "../../../../Components/UserDrawer";
import Navbar from "../../../../Components/Navbar";
import MyDocs from "../../../../Container/User2/MyDocs";

function User2() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <UserDrawer />
      </div>
      <div dir="ltr">
        <MyDocs />
      </div>
    </div>
  );
}

export default User2;
