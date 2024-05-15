import React from "react";
import logo from "../../assets/Logo.png";
import { FaWpforms } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { TbLicense } from "react-icons/tb";
import DatePiker from "../../Components/Date";
import DatePicker from "react-multi-date-picker";

function MiniDrawer() {
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  return (
    <div className=" items-end w-full flex">
      <div
        dir="rtl"
        className=" top-3 right-2 bg-blue-700 bg-opacity-90 fixed w-1/5 h-[97vh] items-center flex flex-col rounded-2xl"
      >
        <div className=" w-[90%] h-[9.5%] border-b-2 flex justify-center items-center border-white ">
          <img className=" w-11" alt="logo" src={logo} />
        </div>
        <div className=" px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl">
          <h2>فرم پایه آزمون</h2>
          <FaWpforms />
        </div>
        <div className=" px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl">
          <h2>ایجاد آزمون</h2>
          <GrDocumentPerformance />
        </div>
        <div className=" px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl">
          <h2>تعریف سوال</h2>
          <MdFormatListNumberedRtl />
        </div>
        <div className=" px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl">
          <h2>ایجاد مدرک</h2>
          <TbLicense />
        </div>
        <div className=" px-2 hover:bg-slate-300 hover:text-blue-800 rounded-md transition-all text-white cursor-pointer border-b-[1px] border-opacity-50 py-4 border-white flex w-4/5 justify-between items-center text-2xl">
          <h2>تایید کنندگان </h2>
          <FaPeopleLine />
        </div>
      </div>
      <div
        dir=""
        className="   h-screen flex justify-center items-center w-[79.5%] "
      >
        <div className=" w-4/5 h-1/2 backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
          <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
            تعریف آزمون
          </h2>
          <form
            className=" w-full mt-10 flex gap-6 flex-col justify-center items-center"
            dir="rtl"
          >
            <div className=" px-10 flex w-full">
              <div className=" w-1/2 gap-10 items-start flex flex-col">
                <div className=" gap-[14px] text-2xl flex">
                  <h2>نام آزمون : </h2>
                  <input className=" w-60 h-8 px-2 text-lg text-black rounded-md" />
                </div>
                <div className=" text-2xl gap-2 flex ">
                  <h2>زمان شروع : </h2>
                  <select className=" w-36 h-8 px-2 text-base rounded-md">
                    {hours.map((hours) => {
                      return (
                        <option className=" text-sm  text-black rounded-md">
                          {" "}
                          ساعت :{hours}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="number"
                    placeholder="دقیقه"
                    className=" w-20 h-8 text-base px-2 text-black rounded-md"
                  />
                </div>
                <div className=" gap-[18px] flex">
                  <h2 className=" text-2xl">تعداد مجاز شرکت کنندگان:</h2>
                  <input className=" p-2 rounded-md w-20" type="number" />
                </div>
              </div>
              <div className=" flex flex-col gap-10">
                <div className=" text-2xl gap-2 flex">
                  <h2>تاریخ آزمون : </h2>
                  <DatePicker
                    render={(value, openCalendar) => {
                      console.log(value);
                      return (
                        <div
                          className=" px-2 w-60 h-8 bg-white text-black rounded-md"
                          onClick={openCalendar}
                        >
                          {value}
                        </div>
                      );
                    }}
                    calendar={persian}
                    locale={persian_fa}
                  />
                </div>
                <div className=" gap-[104px] flex ">
                  <h2 className="text-2xl">نوع مدرک :</h2>
                  <select className=" w-40 rounded-md">
                    <option>هرچی</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              className=" hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
            >
              ثبت
            </button>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}

export default MiniDrawer;
