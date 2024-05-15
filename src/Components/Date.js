import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Icon from "react-multi-date-picker/components/icon";

function DatePiker() {


  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-center"
      render={(value, openCalendar) => {
        console.log(value);
        return (
          <div className=" w-screen relative max-w-screen-xl flex justify-center">
            <div
              className=" w-[26.5%]  hover:bg-slate-400 hover:bg-opacity-40 transition-all rounded-t-md bg-opacity-40 p-3 h-10 border-b-2 border-blue-700 items-center flex justify-between bg-slate-300 text-slate-400"
              onClick={openCalendar}
            >
              {value?<h2 className=" text-black">{value}</h2>:<h2>تاریخ تولد</h2>}
              <Icon />
            </div>
          </div>
        );
      }}
      onChange={(e) => console.log(e)}
    />
  );
}

export default DatePiker;
