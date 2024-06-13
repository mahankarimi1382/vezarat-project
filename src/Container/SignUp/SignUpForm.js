import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eror } from "../../utilies/Toasts";
import Date from "../../Components/Date";
import DatePiker from "../../Components/Date";
import { useNavigate } from "react-router";

function SignUpForm() {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  console.log(date);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (!date || !data.City || !data.Familly || !data.Name || !data.license) {
      Eror("لطفا اطلاعات خود را کامل وارد کنید");
    } else {
      navigate("/User/jointoexam");
    }
  };
  return (
    <div className=" w-full h-screen justify-center flex items-center bg-slate-300">
      <form
        className=" shadow-2xl justify-center items-center h-2/3  w-1/2 flex bg-white rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" shadow-2xl bg-blue-600 rounded-r-md w-1/12 h-full"></div>

        <div className=" w-11/12 flex flex-col justify-center gap-7 items-center h-full">
          <h5 className=" text-3xl">ثبت نام</h5>

          <input
            placeholder="نام"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("Name")}
          />
          <input
            placeholder="نام خانوادگی"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("Familly")}
          />
          <DatePiker setDate={setDate} />
          <input
            placeholder="مدرک تحصیلی"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("license")}
          />
          <input
            placeholder="شهر"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("City")}
          />
          <button
            className=" hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
            type="submit"
          >
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
