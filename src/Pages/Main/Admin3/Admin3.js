import React from 'react'
import Navbar from "../../../Components/Navbar";
import MiniDrawer from "../../../Container/Admin/MiniDrawer";
import CreateQuestion from '../../../Container/Admin3/CreateQuestion';
function Admin3() {
  return (
    <div className=" w-full h-screen">
      <Navbar />
      <div dir="ltr" className=" w-full flex">
        <MiniDrawer />
      </div>
      <div dir="ltr">
        <CreateQuestion />
      </div>
    </div>  )
}

export default Admin3