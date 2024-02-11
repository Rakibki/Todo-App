import { useState } from "react";

const CreateTask = ({
  getTask,
  value,
  setValue,
  setCount,
  count,
  setPriority,
}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    getTask(value);
    setValue("");
    setCount(count + 1);
  };

  return (
    <div className="bg-[#a1b2b2] lg:h-20 md:h-20 h-auto overflow-hidden mb-4 p-5 gap-2 md:flex justify-center lg:w-[80%] md:w-[90%] w-[92%] mx-auto rounded-xl">
      <div className="gap-2 w-full flex items-center ">
        <input
          value={value}
          placeholder="Add Your Task"
          className="p-2 px-4 w-full rounded-xl text-[#14b8a6] font-medium outline-none"
          onChange={handleChange}
          type="text"
        />
        <div>
          <select
            onChange={(e) => setPriority(e.target.value)}
            className="bg-[#14b8a6] text-white outline-none font-semibold px-2 py-2"
          >
            <option selected disabled>
              Selrct priority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <button
        className="w-[120px] md:h-full h-10 md:mt-0 mt-2 text-white font-medium cursor-pointer outline-none bg-[#14b8a6] rounded-[10px]"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
