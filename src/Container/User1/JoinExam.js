import React, { useState } from "react";
import { Eror } from "../../utilies/Toasts";

function JoinExam() {
  const exams = JSON.parse(localStorage.getItem("runnedExams"));
  const [requests, setRequest] = useState([]);
  console.log(requests);
  const handleRequest = (item, index) => {
    if (requests[index] && requests[index].id === item.id) {
      Eror("درخواست شما ثبت شده است منتظر بمانید");
    } else {
      setRequest([...requests, item]);
    }
  };
  return (
    <div
      dir=""
      className=" gap-5   h-screen flex flex-col mt-20 items-center w-[79.5%] "
    >
      <div className="  w-4/5 h-1/2 backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
        <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
          آزمون های جاری
        </h2>
        <div
          dir="rtl"
          className="  text-blue-800 font-bold items-center text-xl flex w-full justify-around"
        >
          <h2 className=" w-1/5">نام آزمون</h2>
          <h2 className=" w-1/5">تاریخ آزمون</h2>
          <h2 className=" w-1/5">ساعت آزمون</h2>
          <h2 className=" w-1/5">مدرک</h2>
          <h2 className=" w-1/5"></h2>
        </div>
        <div className=" flex flex-col w-full h-72 overflow-auto">
          {exams.map((item, index) => {
            return (
              <div
                dir="rtl"
                className="  bg-slate-300 bg-opacity-50 my-2 rounded-lg w-full p-2 items-center flex justify-around"
              >
                <h2 className=" w-1/5">{item.exam_name}</h2>
                <h2 className=" w-1/5">{item.exam_date[0]}</h2>
                <h2 className=" w-1/5">
                  {item.exam_time_h}:{item.exam_time_m}
                </h2>
                <h2 className=" w-1/5">{item.exam_license}</h2>
                <h2
                  onClick={() => handleRequest(item, index)}
                  className=" font-semibold cursor-pointer text-blue-700 w-1/5"
                >
                  درخواست شرکت
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JoinExam;
