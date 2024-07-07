import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";

function Hosts() {
  const [host, setHost] = useState("");
  const [hostList, setHostList] = useState(() => {
    return JSON.parse(localStorage.getItem("hosts")) || [];
  });

  useEffect(() => {
    localStorage.setItem("hosts", JSON.stringify(hostList));
  }, [hostList]);
  console.log(hostList);
  const removeَHost = (id) => {
    let filtered = hostList.filter((item) => item.id !== id);
    if (
      hostList[hostList.length - 1] &&
      hostList[hostList.length - 1].id > hostList.length
    ) {
      let edited = filtered.map((item, index) =>
        item.id !== index + 1 ? { ...item, id: index + 1 } : item
      );
      setHostList(edited);
    } else {
      setHostList(filtered);
    }
  };
  const Hosts_list = (
    <div className=" w-3/5 bg-slate-300 rounded-lg flex flex-col">
      {hostList.length > 0 && (
        <div>
          <div className=" h-10 rounded-t-lg bg-blue-700 text-white text-xl w-full justify-around flex items-center">
            <h2 className=" w-1/3">برگزار کنندگان</h2>
          </div>
        </div>
      )}

      {hostList.map((item) => {
        return (
          <div
            className=" h-10 border-b-2 text-xl justify-between flex items-center"
            key={item.id}
          >
            <TiDelete
              onClick={() => removeَHost(item.id)}
              className=" text-red-700 cursor-pointer text-2xl ml-6"
            />
            <h2 className=" mr-6">{item.host}</h2>
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
          برگزار کنندگان
        </h2>
        <div
          className=" w-full mt-10 flex gap-6 flex-col justify-center items-center"
          dir="rtl"
        >
          <div className=" px-10 flex justify-center items-center w-full">
            <div className="  flex-wrap gap-10 justify-between items-center h-28 flex">
              <div className=" gap-[14px] text-2xl flex">
                <h2>نام برگزار کننده:</h2>
                <input
                  onChange={(e) => setHost(e.target.value)}
                  className="w-36 h-8 px-2 text-base rounded-md"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              setHostList([...hostList, { host, id: hostList.length + 1 }])
            }
            className=" mt-16 hover:bg-indigo-800 transition-all hover:shadow-xl bg-blue-700 h-10 rounded-md flex items-center justify-center text-2xl text-white w-1/2"
          >
            ثبت
          </button>
        </div>
      </div>
      {Hosts_list}
    </div>
  );
}

export default Hosts;
