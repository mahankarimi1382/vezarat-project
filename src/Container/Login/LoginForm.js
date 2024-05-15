import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VerifyCodeModal from "./VerifyCodeModal";
import { Eror, success } from "../../utilies/Toasts";

function LoginForm() {
  const [isEmail, setIsEmail] = useState(false);
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    if (!data.national_code || !data.phone && !data.Email) {
      Eror("لطفا اطلاعات خواسته شده را کامل وارد کنید");
    } else {
      success(`کد تایید به شماره ی ${data.phone} ارسال شد`);
      setModal(true);
    }
  };
  return (
    <div className=" w-full h-screen justify-center flex items-center bg-slate-300">
      {modal && <VerifyCodeModal setModal={setModal} />}
      <form
        className=" shadow-2xl justify-center items-center h-2/3 w-1/2 flex bg-white rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" bg-blue-600 rounded-r-md w-1/12 h-full"></div>
        <div className=" w-full flex flex-col justify-center gap-7 items-center h-full">
          <h5 className=" text-3xl">ورود به سامانه</h5>

          <div className=" w-1/2 flex items-start   flex-col gap-4">
            <h2 className=" text-xl">کد ملی</h2>
            <input
              placeholder="مثل:0025413076"
              className=" bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 w-full border-blue-700"
              {...register("national_code")}
            />
          </div>

          {isEmail ? (
            <div className=" w-1/2 items-start flex flex-col gap-4">
              <h2 className=" text-xl">ایمیل:</h2>
              <input
                placeholder="مثل:example@email.com"
                className=" bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 w-full border-blue-700"
                {...register("Email")}
              />
            </div>
          ) : (
            <div className=" w-1/2 items-start flex flex-col gap-4">
              <h2 className=" text-xl">تلفن همراه:</h2>
              <input
                placeholder="مثل:09123456789"
                className=" bg-slate-300 hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 w-full border-blue-700"
                {...register("phone")}
              />
            </div>
          )}

          <button
            className=" hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
            type="submit"
          >
            ثبت
          </button>
          {isEmail ? (
            <h2
              onClick={() => {
                resetField("Email");

                setIsEmail(!isEmail);
              }}
              className=" cursor-pointer hover:text-slate-700 w-1/2 -mt-5 items-start text-start text-indigo-700"
            >
              ورود با کد ملی و شماره تلفن
            </h2>
          ) : (
            <h2
              onClick={() => {
                resetField("phone");

                setIsEmail(!isEmail);
              }}
              className="cursor-pointer hover:text-slate-700 w-1/2 -mt-5 items-start text-start text-indigo-700"
            >
              ورود با کد ملی و ایمیل
            </h2>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
