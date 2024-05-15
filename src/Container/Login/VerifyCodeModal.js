import React, { useRef } from "react";
import Timer from "../../Components/Timer";
import { useNavigate } from "react-router";
import { success } from "../../utilies/Toasts";

function VerifyCodeModal({ setModal }) {
  const navigate = useNavigate();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const focusOnInput = (e, inputRef) => {
    if (e.target.value.length === 1) {
      inputRef.current.focus();
    }
  };
  return (
    <div
      onClick={() => setModal(false)}
      className=" flex justify-center items-center  w-full h-screen fixed bg-slate-600 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="  gap-10 items-center flex flex-col  w-1/3 h-1/2 bg-white rounded-lg border-2 border-indigo-600 "
      >
        <div className=" w-full h-1/6 bg-blue-600"></div>
        <h5 className=" mt-10 text-2xl font-medium">
          کد پیامک شده را وارد کنید
        </h5>
        <div dir="ltr" className=" flex gap-3 items-center justify-center">
          <input
            onChange={(e) => {
              focusOnInput(e, input2Ref);
            }}
            className=" text-center w-1/12 bg-slate-300 h-10 rounded-lg border-b-indigo-600 border-2"
          />
          <input
            ref={input2Ref}
            onChange={(e) => {
              focusOnInput(e, input3Ref);
            }}
            className=" text-center w-1/12 bg-slate-300 h-10 rounded-lg border-b-indigo-600 border-2"
          />
          <input
            ref={input3Ref}
            onChange={(e) => {
              focusOnInput(e, input4Ref);
            }}
            className=" text-center w-1/12 bg-slate-300 h-10 rounded-lg border-b-indigo-600 border-2"
          />
          <input
            ref={input4Ref}
            onChange={(e) => {
              if (e.target.value.length === 1) {
                success("تایید")
                navigate("/UserSignUp");
              }
            }}
            className=" text-center w-1/12 bg-slate-300 h-10 rounded-lg border-b-indigo-600 border-2"
          />
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default VerifyCodeModal;
