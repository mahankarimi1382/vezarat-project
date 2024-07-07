import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Timer from "../../../Components/Timer";
import { Eror } from "../../../utilies/Toasts";

function Exam({ category, time }) {
  const [isFinish, setIsFinish] = useState(false);
  console.log(isFinish);
  const [options, setOptions] = useState([]);
  console.log(category);
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  const change = (i) => {
    setSelected((prev) => (i === prev ? null : i));
  };
  useEffect(() => {
    const question = JSON.parse(localStorage.getItem("questions"));
    const filtered = question.filter((item) => item.category === category);
    setOptions([
      filtered[count - 1].answer1,
      filtered[count - 1].answer2,
      filtered[count - 1].answer3,
      filtered[count - 1].answer4,
    ]);
    setQuestions(filtered);
  }, []);
  useEffect(() => {
    if (isFinish) {
      navigate("/");
      Eror("زمان آزمون شما به اتمام رسید");
    }
  }, [isFinish]);
  console.log(questions);
  return (
    <div dir="rtl" className=" w-full h-full justify-center items-center flex">
      <div className=" flex flex-col w-5/6 justify-between pb-20 bg-blue-400 rounded-lg h-3/4">
        <div className=" bg-blue-200 rounded-t-lg h-20 flex justify-center items-center">
          <h2 className=" text-2xl font-semibold text-blue-700">
            سوال {count}
          </h2>
        </div>
        <div className="">
          <h2 className=" text-2xl">
            {questions[0] && questions[count - 1].questionText}
          </h2>
        </div>
        <div className=" flex mb-10 gap-5 mx-10 text-xl font-medium items-start flex-col">
          {options.map((o, i) => {
            return (
              <label
                className=" flex gap-4 justify-center items-center"
                key={i}
              >
                <input
                  className=" accent-blue-500 w-4 h-4 rounded-lg "
                  type="checkbox"
                  checked={i === selected}
                  onChange={() => change(i)}
                />
                {o}
              </label>
            );
          })}
        </div>
        <div className=" flex justify-center items-center gap-5">
          {count !== 1 && (
            <h2
              onClick={() => {
                setCount(count - 1);
                setOptions([
                  questions[count - 2].answer1,
                  questions[count - 2].answer2,
                  questions[count - 2].answer3,
                  questions[count - 2].answer4,
                  ,
                ]);
              }}
              className="flex
           justify-center items-center cursor-pointer"
            >
              <IoIosArrowRoundForward className=" text-2xl font-bold" />
              قبلی
            </h2>
          )}

          {count === questions.length ? (
            <h2 onClick={() => navigate("/")}>پایان</h2>
          ) : (
            <h2
              className="flex
           justify-center items-center cursor-pointer"
              onClick={() => {
                setCount(count + 1);
                setOptions([
                  questions[count].answer1,
                  questions[count].answer2,
                  questions[count].answer3,
                  questions[count].answer4,
                  ,
                ]);
              }}
            >
              بعدی
              <IoIosArrowRoundBack className=" text-2xl font-bold" />
            </h2>
          )}
        </div>
        <div className=" -mb-16">
          <Timer setIsFinish={setIsFinish} time={time} />
        </div>
      </div>
    </div>
  );
}

export default Exam;
