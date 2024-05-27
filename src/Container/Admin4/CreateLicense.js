import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TiDelete } from "react-icons/ti";
import { Eror, success } from "../../utilies/Toasts";

function CreateLicense() {
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const [licenses, setLicenses] = useState([]);
  const removeLicense = (id) => {
    let removed = licenses.filter((item) => item.id !== id);
    if (removed[0] && removed[removed.length - 1].id > removed.length) {
      let edited = removed.map((item, index) =>
        item.number !== index + 1 ? { ...item, number: index + 1 } : item
      );
      setLicenses(edited);
    } else {
      setLicenses(removed);
    }
  };
  const onSubmit = (data) => {
    if (data.license_name && data.license_value) {
      setLicenses([...licenses, { ...data, id: licenses.length + 1 }]);
      success("مدرک با موفقیت ثبت شد");
      resetField("license_name");
      resetField("license_value");
    } else {
      Eror("اطلاعات را کامل وارد کنید");
    }
  };

  const mappedLicenses = (
    <div className=" w-4/5 bg-slate-300 rounded-lg flex flex-col">
      {licenses.length > 0 && (
        <div>
          {" "}
          <h2 className=" w-full border-b-2 bg-blue-700 h-10 flex justify-center items-center text-white text-xl rounded-t-lg">
            مدارک تعریف شده
          </h2>
          <div className=" h-10 bg-blue-700 text-white text-xl w-full justify-center flex items-center">
            <h2 className=" w-1/2 border-r-2">ارزش مدرک</h2>
            <h2 className=" w-1/2">نام مدرک</h2>
          </div>
        </div>
      )}

      {licenses.map((item) => {
        return (
          <div className=" h-10 border-b-2 flex items-center" key={item.id}>
            <TiDelete
              onClick={() => removeLicense(item.id)}
              className=" text-xl text-red-700 cursor-pointer ml-2"
            />
            <h2 className=" w-1/2">{item.license_value}</h2>
            <h2 className=" w-1/2">{item.license_name}</h2>
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
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full mt-10 flex gap-6 flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex justify-center items-center w-full">
            <div className="  flex-wrap gap-10 justify-between items-center h-28 flex">
              <div className=" gap-[14px] text-2xl flex">
                <h2>نام مدرک: </h2>
                <input
                  {...register("license_name")}
                  className="w-36 h-8 px-2 text-base rounded-md"
                />
              </div>
              <div className=" gap-2 flex">
                <h2 className=" text-2xl">ارزش مدرک:</h2>
                <input
                  {...register("license_value")}
                  className="w-36 h-8 px-2 text-base rounded-md"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
          >
            ثبت
          </button>
        </form>
      </div>
      {mappedLicenses}
    </div>
  );
}

export default CreateLicense;
