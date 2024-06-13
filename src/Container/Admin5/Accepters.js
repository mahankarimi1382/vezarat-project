import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegImages } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { Eror, success } from "../../utilies/Toasts";
import { useEffect } from "react";

function Accepters() {
  const [modal, setModal] = useState(false);
  const removeَAccepter = (id) => {
    let filtered = accepters.filter((item) => item.id !== id);
    if (
      filtered[filtered.length - 1] &&
      filtered[filtered.length - 1].id > filtered.length
    ) {
      let edited = filtered.map((item, index) =>
        item.id !== index + 1 ? { ...item, id: index + 1 } : item
      );
      setAccepters(edited);
    } else {
      setAccepters(filtered);
    }
  };
  const [accepters, setAccepters] = useState(() => {
    return JSON.parse(localStorage.getItem("accepters")) || [];
  });
  console.log(accepters);
  const [img, setImg] = useState();
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    localStorage.setItem("accepters", JSON.stringify(accepters));
  }, [accepters]);
  const onSubmit = (data) => {
    if (data.accepter_name && data.accepter_license && img) {
      setAccepters([...accepters, { ...data, id: accepters.length + 1, img }]);
      success("تاید کننده با موفقیت ثبت شد");
      resetField("accepter_name");
      resetField("accepter_license");
      setImg();
    } else {
      Eror("لطفا اطلاعات  را کامل وارد کنید");
    }
  };
  const Accepters_List = (
    <div className=" w-4/5 bg-slate-300 rounded-lg flex flex-col">
      {accepters.length > 0 && (
        <div>
          <h2 className=" w-full border-b-2 bg-blue-700 h-10 flex justify-center items-center text-white text-xl rounded-t-lg">
            تایید کنندگان
          </h2>
          <div className=" h-10 bg-blue-700 text-white text-xl w-full justify-around flex items-center">
            <h2 className=" w-1/3"></h2>
            <h2 className=" w-1/3 border-x-2">مدرک تایید کننده</h2>
            <h2 className=" w-1/3">نام تایید کننده</h2>
          </div>
        </div>
      )}

      {accepters.map((item) => {
        return (
          <div className=" h-10 border-b-2 flex items-center" key={item.id}>
            <TiDelete
              onClick={() => removeَAccepter(item.id)}
              className=" text-red-700 cursor-pointer text-xl ml-2"
            />
            <h2
              onClick={() => {
                setImg(item.img);
                setModal(true);
              }}
              className=" cursor-pointer text-blue-700 w-1/3"
            >
              مشاهده امضا
            </h2>
            <h2 className=" w-1/3">{item.accepter_license}</h2>
            <h2 className=" w-1/3">{item.accepter_name}</h2>
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
      {modal && (
        <div
          onClick={() => setModal(false)}
          className=" w-full top-0 right-0 h-full bg-slate-400 bg-opacity-60 flex justify-center items-center z-40 fixed"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" w-1/2 h-1/2 flex justify-center itemc bg-white rounded-lg"
          >
            <img className=" w-1/2" src={img} />
          </div>
        </div>
      )}
      <div className=" w-4/5 h-1/2 backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
        <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
          تایید کنندگان
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full mt-10 flex gap-6 flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex justify-center items-center w-full">
            <div className="  flex-wrap gap-10 justify-between items-center h-28 flex">
              <div className=" gap-[14px] text-2xl flex">
                <h2>نام تایید کننده: </h2>
                <input
                  {...register("accepter_name")}
                  className="w-36 h-8 px-2 text-base rounded-md"
                />
              </div>
              <div className=" gap-2 flex">
                <h2 className=" text-2xl">مدرک تایید کننده:</h2>
                <input
                  {...register("accepter_license")}
                  className="w-36 h-8 px-2 text-base rounded-md"
                />
              </div>
              <div className=" gap-2 flex">
                <h2 className=" text-2xl">آپلود امضا تایید کننده:</h2>
                {img ? (
                  <div>
                    <img className="w-40 h-20" src={img} />
                    <button
                      className=" bg-blue-500 px-2 rounded-md text-white cursor-pointer"
                      onClick={() => setImg()}
                    >
                      تغییر عکس
                    </button>
                  </div>
                ) : (
                  <label className=" flex justify-center items-center text-blue-700 text-3xl w-40 h-20 bg-slate-300 border-[1px] border-blue-600 border-dashed rounded-md">
                    <FaRegImages />

                    <input
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          setImg(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                      className=" w-0"
                      type="file"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" mt-16 hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
          >
            ثبت
          </button>
        </form>
      </div>
      {Accepters_List}
    </div>
  );
}

export default Accepters;
