import React, { useEffect, useState } from "react";
import { Eror, success } from "../../utilies/Toasts";
import Exam from "../../Pages/Main/User/Exam";

function JoinExam() {
  const [time,setTime]=useState("")
  const exams = JSON.parse(localStorage.getItem("runnedExams"));
  const [personal, setPersonal] = useState({});
  const [isExamStart, setIsExamStart] = useState(false);
  console.log(personal);
  const [category, setCategory] = useState("");
  const [requests, setRequest] = useState(() => {
    return JSON.parse(localStorage.getItem("requests")) || [];
  });
  console.log(requests);
  const handleRequest = (item, index) => {
    console.log(item);
    if (requests[index] && requests[index].id === item.id) {
      Eror("درخواست شما ثبت شده است منتظر بمانید");
    } else {
      success("درخواست شما با موفقیت ارسال شد");
      setRequest([
        ...requests,
        {
          exam_name: item.exam_name,
          personal,
        },
      ]);
    }
  };
  useEffect(() => {
    let logininfo = JSON.parse(localStorage.getItem("info"));

    setPersonal(logininfo);
  }, []);
  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);
  return (
    <div>
      {isExamStart ? (
        <div className=" absolute w-screen h-screen bg-white top-0">
          <Exam time={time} category={category} />
        </div>
      ) : (
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
              className="  text-blue-800 border-b-2 py-2 font-bold bg-slate-300 bg-opacity-50 items-center text-xl flex w-full justify-around"
            >
              <h2 className=" w-1/5">نام آزمون</h2>
              <h2 className=" w-1/5">تاریخ آزمون</h2>
              <h2 className=" w-1/5">ساعت آزمون</h2>
              <h2 className=" w-1/5">مدرک</h2>
              <h2 className=" w-1/5"></h2>
            </div>
            <div className=" flex flex-col w-full h-72 overflow-auto">
              {exams ? (
                exams.map((item, index) => {
                  return (
                    <div
                      dir="rtl"
                      className="  bg-slate-300 border-b-2 border-slate-200 border-opacity-50 bg-opacity-50 w-full p-2 items-center flex justify-around"
                    >
                      <h2 className=" w-1/5">{item.exam_name}</h2>
                      <h2 className=" w-1/5">{item.exam_date[0]}</h2>
                      <h2 className=" w-1/5">
                        {item.exam_time_h}:{item.exam_time_m}
                      </h2>
                      <h2 className=" w-1/5">{item.exam_license}</h2>
                      <h2
                        onClick={() => {
                          setIsExamStart(true);
                          setCategory(item.exam_name);
                          setTime(item.exam_total_time);
                          console.log(item);
                          // handleRequest(item, index);
                        }}
                        className=" font-semibold cursor-pointer text-blue-700 w-1/5"
                      >
                        درخواست شرکت
                      </h2>
                    </div>
                  );
                })
              ) : (
                <div className=" w-full h-full flex justify-center items-center mb-20 text-2xl font-semibold text-blue-800">
                  آزمونی برای شرکت وجود ندارد
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinExam;
