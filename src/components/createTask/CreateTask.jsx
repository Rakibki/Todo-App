const CreateTask = ({ getTask, value, setValue, setCount, count }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    getTask(value);
    setValue("");
    setCount(count + 1);
  };

  return (
    <div className="bg-[#a1b2b2] mb-4 p-5 gap-2 flex justify-center w-[80%] mx-auto rounded-xl">
      <div className="w-[80%] gap-2 flex items-center ">
        <input
          value={value}
          placeholder="Add Your Task"
          className="p-2 px-4 w-full rounded-xl text-[#14b8a6] font-medium outline-none"
          onChange={handleChange}
          type="text"
        />
        <div>
          <select className="bg-[#14b8a6] text-white outline-none font-semibold  px-5 py-2">
            <option selected disabled>
              Selrct riority
            </option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <button
        className="px-[20px] text-white font-medium cursor-pointer outline-none py-[10px] bg-[#14b8a6] rounded-[10px]"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
