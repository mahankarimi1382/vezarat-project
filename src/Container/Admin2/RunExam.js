import React, { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";

import persian_fa from "react-date-object/locales/persian_fa";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { Eror, success } from "../../utilies/Toasts";

function RunExam() {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  const [runnedExam, setRunnedExam] = useState(() => {
    return JSON.parse(localStorage.getItem("runnedExams")) || [];
  });
  const an = JSON.parse(localStorage.getItem("runnedExams"));
  console.log(an);
  useEffect(() => {
    localStorage.setItem("runnedExams", JSON.stringify(runnedExam));
  }, [runnedExam]);
  const [examDetails, setExamDetails] = useState([]);
  const [date, setDate] = useState();
  const [initDate, setInitDate] = useState(new Date());
  const licenses = JSON.parse(localStorage.getItem("licenses"));

  useEffect(() => {
    const createdExam = JSON.parse(localStorage.getItem("createdExam"));
    console.log(createdExam);
    setExamDetails(createdExam);
  }, []);
  const onSubmitForm = (data) => {
    if (
      !data.exam_license ||
      !data.exam_name ||
      !data.exam_time_h ||
      !data.exam_time_m ||
      !data.exam_volunteer ||
      !data.exam_total_time ||
      !date
    ) {
      Eror("اطلاعات را کامل وارد کنید");
    } else {
      setRunnedExam([
        ...runnedExam,
        { ...data, exam_date: date, id: runnedExam.length + 1 },
      ]);

      resetField("exam_name");
      resetField("exam_time_h");
      resetField("exam_time_m");
      resetField("exam_volunteer");
      resetField("exam_license");
      resetField("exam_total_time");
      success("آزمون با موفقیت ایجاد شد");
      setInitDate(new Date());
    }
  };
  const removeExam = (id) => {
    let remvedList = runnedExam.filter((item) => item.id !== id);
    if (
      remvedList[remvedList.length - 1] &&
      remvedList[remvedList.length - 1].id > remvedList.length
    ) {
      let editedList = remvedList.map((item, index) =>
        item.id !== index + 1 ? { ...item, id: index + 1 } : item
      );
      setRunnedExam(editedList);
    } else {
      setRunnedExam(remvedList);
    }
  };
  const mappedList = (
    <div className=" w-4/5 flex flex-col  items-center">
      {runnedExam.length > 0 && (
        <div
          dir="rtl"
          className=" text-xl items-center text-white bg-blue-600 w-full justify-center flex px-5 h-16 rounded-t-lg"
        >
          <h2 className=" w-40">نام آزمون</h2>
          <h2 className=" w-40">تاریخ آزمون</h2>
          <h2 className=" w-40">ساعت برگزاری</h2>
          <h2 className=" w-40">شرکت کنندگان</h2>
          <h2 className=" w-40">نوع مدرک</h2>
          <h2 className=" w-40">مدت آزمون</h2>

          <h2 className=" w-20"></h2>
        </div>
      )}

      {runnedExam.map((item) => {
        return (
          <div
            key={item.id}
            dir="rtl"
            className=" w-full flex flex-col h-16 justify-center border-b-2 bg-slate-300"
          >
            <div className=" text-xl items-center w-full justify-center flex px-5 h-1/2">
              <h2 className=" w-40">{item.exam_name}</h2>
              <h2 className=" w-40">{item.exam_date}</h2>
              <h2 className=" w-40">
                {item.exam_time_h}:{item.exam_time_m}
              </h2>
              <h2 className=" w-40">{item.exam_volunteer}</h2>
              <h2 className=" w-40">{item.exam_license}</h2>
              <h2 className=" w-40">{item.exam_total_time}دقیقه</h2>

              <h2
                onClick={() => removeExam(item.id)}
                className=" cursor-pointer w-20 font-semibold text-red-700"
              >
                حذف
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <div
      dir=""
      className=" gap-5   h-screen flex flex-col mt-20 items-center w-[79.5%] "
    >
      <div className=" w-4/5 h-1/2 backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
        <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
          ایجاد آزمون
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className=" w-full mt-10 flex gap-6 flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex w-full">
            <div className=" w-1/2 gap-10 items-start flex flex-col">
              <div className=" gap-[14px] text-2xl flex">
                <h2>نام آزمون : </h2>

                <select
                  className=" w-60 h-8 px-2 text-lg text-black rounded-md"
                  {...register("exam_name")}
                >
                  {examDetails.map((item) => {
                    return <option key={item.id}>{item.exam_name}</option>;
                  })}
                </select>
              </div>
              <div className=" text-2xl gap-2 flex ">
                <h2>زمان شروع : </h2>
                <select
                  {...register("exam_time_h")}
                  className=" w-36 h-8 px-2 text-base rounded-md"
                >
                  {hours.map((hours) => {
                    return (
                      <option
                        key={hours}
                        value={hours}
                        className=" text-sm  text-black rounded-md"
                      >
                        {" "}
                        ساعت :{hours}
                      </option>
                    );
                  })}
                </select>
                <input
                  {...register("exam_time_m")}
                  type="number"
                  placeholder="دقیقه"
                  className=" w-20 h-8 text-base px-2 text-black rounded-md"
                />
              </div>
              <div className=" gap-[18px] flex">
                <h2 className=" text-2xl">تعداد مجاز شرکت کنندگان:</h2>
                <input
                  {...register("exam_volunteer")}
                  className=" p-2 rounded-md h-8 w-20"
                  type="number"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-10">
              <div className=" text-2xl gap-2 flex">
                <h2>تاریخ آزمون : </h2>
                <DatePicker
                  value={initDate}
                  render={(value, openCalendar) => {
                    setDate(value);
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
                <select
                  {...register("exam_license")}
                  className=" w-40 rounded-md"
                >
                  {licenses.map((item) => {
                    return <option>{item.license_name}</option>;
                  })}
                </select>
              </div>
              <div className=" gap-[46px] flex ">
                <h2 className="text-2xl">مدت زمان آزمون:</h2>
                <input
                  {...register("exam_total_time")}
                  type="number"
                  className=" h-8 p-2 w-40 rounded-md"
                  placeholder=" به دقیقه"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
          >
            ثبت
          </button>{" "}
        </form>
      </div>
      {mappedList}
    </div>
  );
}

export default RunExam;
