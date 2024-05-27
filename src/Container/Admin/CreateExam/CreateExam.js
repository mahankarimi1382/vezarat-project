import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eror, success } from "../../../utilies/Toasts";
import { TiDelete } from "react-icons/ti";

function CreateExam() {
  const [createdExam, setCreatedExam] = useState([]);
  console.log(createdExam);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!data.exam_name || !data.exam_host || !data.exam_company) {
      Eror("اطلاعات آزمون را وارد کنید");
    } else {
      success("آزمون با موفقیت ساخته شد");
      console.log(data);
      setCreatedExam([...createdExam, { ...data, id: createdExam.length + 1 }]);
      resetField("exam_name");
      resetField("exam_host");
      resetField("exam_company");
    }
  };
  const removeExam = (id) => {
    let filtered = createdExam.filter((item) => item.id !== id);
    if (
      filtered[filtered.length - 1] &&
      filtered[filtered.length - 1].id > filtered.length
    ) {
      let edited = filtered.map((item, index) =>
        item.id !== index + 1 ? { ...item, id: index + 1 } : item
      );
      setCreatedExam(edited);
    } else {
      setCreatedExam(filtered);
    }
  };
  const mappedExam = (
    <div className=" w-4/5 bg-slate-300 rounded-lg flex flex-col">
      {createdExam.length > 0 && (
        <div>
          {" "}
          <h2 className=" w-full border-b-2 bg-blue-700 h-10 flex justify-center items-center text-white text-xl rounded-t-lg">
            آزمون های ساخته شده
          </h2>
          <div className=" h-10 bg-blue-700 text-white text-xl w-full justify-around flex items-center">
            <h2 className=" w-1/3">برگزار کننده</h2>
            <h2 className=" w-1/3 border-x-2">سازمان</h2>
            <h2 className=" w-1/3">نام آزمون</h2>
          </div>
        </div>
      )}

      {createdExam.map((item) => {
        return (
          <div className=" h-10 border-b-2 flex items-center" key={item.id}>
            <TiDelete
              onClick={() => removeExam(item.id)}
              className=" text-red-700 cursor-pointer text-xl ml-2"
            />
            <h2 className=" w-1/3">{item.exam_host}</h2>
            <h2 className=" w-1/3">{item.exam_company}</h2>
            <h2 className=" w-1/3">{item.exam_name}</h2>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className=" gap-5   h-screen flex flex-col mt-20 items-center w-[79.5%] ">
      <div className=" w-4/5 h-1/2 backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
        <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
          تعریف آزمون
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full mt-10 flex gap-6 flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex w-full">
            <div className="  flex-wrap justify-between items-center h-28 flex">
              <div className=" gap-[14px] text-2xl flex">
                <h2>نام آزمون : </h2>
                <input
                  {...register("exam_name")}
                  className=" w-36 h-8 px-2 text-base rounded-md"
                />
              </div>
              <div className=" gap-2 flex">
                <h2 className=" text-2xl">برگزار کننده ی آزمون:</h2>
                <select
                  {...register("exam_host")}
                  className=" w-36 h-8 px-2 text-base rounded-md"
                >
                  <option></option>
                  <option>فلانی</option>
                </select>
              </div>
              <div className=" gap-2 flex ">
                <h2 className="text-2xl">سازمان مدرک دهنده:</h2>
                <select
                  {...register("exam_company")}
                  className=" w-40 rounded-md"
                >
                  <option></option>
                  <option>هرچی</option>
                </select>
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
      {mappedExam}
    </div>
  );
}

export default CreateExam;
