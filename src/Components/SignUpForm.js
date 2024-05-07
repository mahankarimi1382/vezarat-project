import React from "react";
import { useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" w-full h-screen justify-center flex items-center bg-slate-300">
      <form
        className=" shadow-2xl justify-center items-center h-2/3 w-2/3 flex bg-white rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" bg-blue-600 rounded-r-md w-1/12 h-full"></div>
        <div className=" w-full flex flex-col justify-center gap-7 items-center h-full">
          <h5 className=" text-5xl">ثبت نام</h5>

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
          <input
            placeholder="تاریخ تولد"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("Familly")}
          />
                    <input
            placeholder="مدرک تحصیلی"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("Familly")}
          />
          <input
            placeholder="شهر"
            className=" w-1/2 bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700"
            {...register("Familly")}
          />
          <button
            className=" hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl font-medium text-white w-1/2"
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
