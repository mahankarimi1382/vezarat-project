import React, { useState } from "react";
import { Eror, success } from "../../utilies/Toasts";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

function CreateQuestion() {
  const [isEdit, setIsEdit] = useState(false);
  const [editNumber, setEditNumber] = useState();
  const [questionText, setQuestionText] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correct, setCorrect] = useState("");
  const [category, setCategory] = useState("");

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

  const AddQuestion = () => {
    console.log(category);
    if (
      answer1 &&
      answer2 &&
      answer3 &&
      answer4 &&
      correct &&
      // category &&
      questionText
    ) {
      setQuestions([
        ...questions,
        {
          answer1,
          answer2,
          answer3,
          answer4,
          category,
          questionText,
          number: questions.length + 1,
          correct
        },
      ]);
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setQuestionText("");
      setCategory("");
      setCorrect("");
      setCount(count + 1);
      success(`سوال ${count} با موفقیت ثبت شد`);
    } else {
      Eror("لطفا اطلاعات سوال را کامل وارد کنید");
    }
  };
  const handleEdit = (item) => {
    setIsEdit(true);
    setQuestionText(item.questionText);
    setAnswer1(item.answer1);
    setAnswer2(item.answer2);
    setAnswer3(item.answer3);
    setAnswer4(item.answer4);
    setCorrect(item.correct);
    setCategory(item.category);
    setEditNumber(item.number);
  };
  const edit = () => {
    const edited = questions.map((item) =>
      item.number === editNumber
        ? {
            ...item,
            answer1,
            answer2,
            answer3,
            answer4,
            correct,
            category,
            questionText,
          }
        : item
    );
    setQuestions(edited);
    setIsEdit(false);
    setQuestionText("")
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setAnswer4("")

  };
  return (
    <div
      dir=""
      className=" gap-5   h-screen flex flex-col mt-20 items-center w-[79.5%] "
    >
      <div className=" w-4/5 min-h-[60%] backdrop-blur-md backdrop-brightness-150 bg-cyan-700 shadow-lg shadow-blue-500/50  rounded-xl bg-opacity-50">
        <h2 className=" bg-blue-700 text-white rounded-t-xl py-4 text-2xl font-semibold">
          {isEdit
            ? "ویرایش"
            : `سوال
          ${count}`}
        </h2>
        <div
          className=" w-full h-full flex flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex h-full w-full">
            <div className="  flex-wrap items-center gap-4 h-full flex">
              <div className=" w-full text-2xl mb-7  justify-between flex">
                <h2>صورت سوال: </h2>
                <textarea
                  onChange={(e) => setQuestionText(e.target.value)}
                  className=" resize-none rounded-xl p-2 h-20 text-base w-[80%]"
                  value={questionText}
                />
              </div>
              <div className=" -mt-14 w-full justify-center items-center gap-3 flex-col flex">
                <input
                  onChange={(e) => setAnswer1(e.target.value)}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 1"
                  value={answer1}
                />

                <input
                  onChange={(e) => setAnswer2(e.target.value)}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 2"
                  value={answer2}
                />
                <input
                  onChange={(e) => setAnswer3(e.target.value)}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 3"
                  value={answer3}
                />
                <input
                  onChange={(e) => setAnswer4(e.target.value)}
                  className=" h-7 w-full rounded-lg px-2"
                  placeholder="گزینه ی 4"
                  value={answer4}
                />
              </div>
              <div className=" gap-2 text-2xl  flex">
                <h2>گزینه ی صحیح:</h2>
                <select
                  onChange={(e) => setCorrect(e.target.value)}
                  className=" text-base rounded-lg"
                  value={correct}
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
                  onChange={(e) => setCategory(e.target.value)}
                  className=" text-base rounded-lg"
                  value={category}
                >
                  <option>آزمون فلان</option>
                </select>
              </div>
            </div>
          </div>
          {isEdit ? (
            <button
              onClick={edit}
              type="submit"
              className=" hover:bg-indigo-800 mb-20 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
            >
              ویرایش
            </button>
          ) : (
            <button
              onClick={AddQuestion}
              type="submit"
              className=" hover:bg-indigo-800 mb-20 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
            >
              ثبت
            </button>
          )}
        </div>
      </div>
      <div className=" w-[80%] text-xl">
        {questions.map((item, index) => {
          console.log(item)
          return (
            <div
              dir="rtl"
              className=" my-5 gap-7 justify-center items-center flex flex-col w-full px-4 py-2 rounded-lg bg-blue-300 bg-opacity-50"
              key={item.number}
            >
              <div className=" w-full border-b-2 items-center border-blue-800 flex justify-between">
                <h2 className=" w-[90%] text-start">
                  سوال {item.number}:{item.questionText}
                </h2>
                <FaEdit
                  onClick={() => handleEdit(item)}
                  className=" text-blue-800 cursor-pointer"
                />
                <TiDelete
                  onClick={() => removeQuestion(item.number)}
                  className=" cursor-pointer text-3xl text-red-700"
                />
              </div>
              <div className=" items-start w-full flex flex-col gap-5">
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct == 1 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  1-{item.answer1}
                </h2>
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct == 2 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  2-{item.answer2}
                </h2>
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct == 3 ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  3-{item.answer3}
                </h2>
                <h2
                  className={` px-2 rounded-lg min-w-24 ${
                    item.correct == 4 ? "bg-green-600" : "bg-red-600"
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
