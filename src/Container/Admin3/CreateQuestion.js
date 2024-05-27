import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eror, success } from "../../utilies/Toasts";
import { TiDelete } from "react-icons/ti";

function CreateQuestion() {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(questions.length + 1);
  const removeQuestion = (number) => {
    let filtered = questions.filter((item) => item.number !== number);
    if (
      filtered[filtered.length - 1] &&
      filtered[filtered.length - 1].number > filtered.length
    ) {
      let edited = filtered.map((item, index) =>
        item.number !== index + 1 ? { ...item, number: index + 1 } : item
      );
      setCount(edited.length + 1);
      setQuestions(edited);
    } else {
      setQuestions(filtered);
      setCount(filtered.length + 1);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmitQ = (data) => {
    console.log(data);
    if (
      data.answer1 &&
      data.answer2 &&
      data.answer3 &&
      data.answer4 &&
      data.correct_answer &&
      data.exam_category &&
      data.question
    ) {
      setQuestions([...questions, { ...data, number: questions.length + 1 }]);
      resetField("answer1");
      resetField("answer2");
      resetField("answer3");
      resetField("answer4");
      resetField("question");
      resetField("correct_answer");
      resetField("exam_category");

      setCount(count + 1);
      success(`سوال ${count} با موفقیت ثبت شد`);
    } else {
      Eror("لطفا اطلاعات سوال را کامل وارد کنید");
    }
  };
  return (
    <div
      dir=""
      className=" gap-5   h-screen flex flex-col mt-20 items-center w-[79.5%] "
    >
      <div className=" w-4/5 min-h-[60%] backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
        <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
          سوال
          {count}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmitQ)}
          className=" w-full h-full flex flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex h-full w-full">
            <div className="  flex-wrap items-center gap-4 h-full flex">
              <div className=" w-full text-2xl mb-7  justify-between flex">
                <h2>صورت سوال: </h2>
                <textarea
                  {...register("question")}
                  className=" resize-none rounded-xl p-2 h-20 text-base w-[80%]"
                />
              </div>
              <div className=" -mt-14 w-full justify-center items-center gap-3 flex-col flex">
                <input
                  {...register("answer1")}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 1"
                />
                <input
                  {...register("answer2")}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 2"
                />
                <input
                  {...register("answer3")}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 3"
                />
                <input
                  {...register("answer4")}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 4"
                />
              </div>
              <div className=" gap-2 text-2xl  flex">
                <h2>گزینه ی صحیح:</h2>
                <select
                  {...register("correct_answer")}
                  className=" text-base rounded-lg"
                >
                  <option value={1}>گزینه 1</option>
                  <option value={2}>گزینه 2</option>
                  <option value={3}>گزینه 3</option>
                  <option value={4}>گزینه 4</option>
                </select>
              </div>
              <div className=" gap-2  text-2xl  flex">
                <h2>دسته ی آزمون:</h2>
                <select
                  {...register("exam_category")}
                  className=" text-base rounded-lg"
                >
                  <option>آزمون فلان</option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" hover:bg-indigo-800 mb-20 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
          >
            ثبت
          </button>{" "}
        </form>
      </div>
      <div className=" w-[80%] text-xl">
        {questions.map((item, index) => {
          return (
            <div
              dir="rtl"
              className=" my-5 gap-7 justify-center items-center flex flex-col w-full px-4 py-2 rounded-lg bg-blue-300 bg-opacity-50"
              key={item.number}
            >
              <div className=" w-full items-start border-b-2 border-blue-800 flex justify-between">
                <h2 className=" w-[90%] text-start">
                  سوال {item.number}:{item.question}
                </h2>
                <TiDelete
                  onClick={() => removeQuestion(item.number)}
                  className=" cursor-pointer text-3xl text-red-700"
                />
              </div>
              <div className=" items-start w-full flex flex-col gap-5">
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct_answer == 1 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  1-{item.answer1}
                </h2>
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct_answer == 2 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  2-{item.answer2}
                </h2>
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct_answer == 3 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  3-{item.answer3}
                </h2>
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct_answer == 4 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  4-{item.answer4}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateQuestion;
