import { useEffect, useState } from "react";
import Task from "../task/Task";

const ShowTask = ({
  task,
  handleChnage,
  handleUpdate,
  hanndleDelete,
  TodoComplate,
  filterText,
}) => {
  const [filterTask, setFilterTask] = useState([]);

  useEffect(() => {
    if (filterText === "complate") {
      const complatedTask = task.filter((item) => item.isComplete === true);
      return setFilterTask(complatedTask);
    }
    if (filterText === "inConplate") {
      const inComplatedTask = task.filter((item) => item.isComplete === false);
      return setFilterTask(inComplatedTask);
    }
    if (filterText === "all") {
      setFilterTask(task);
    }
  }, [filterText, task]);

  return (
    <div className="lg:w-[80%] md:w-[90%] w-[92%] bg-[#a1b2b2] lg:h-[400px] md:h-[350px] h-[300px] mx-auto rounded-[20px] overflow-y-scroll">
      <div className="flex justify-between">
        <div>
          <p className="text-[#134e4a] py-3 px-7">
            {filterTask.length} Todo Here
          </p>
        </div>
        <div className="flex mx-2 mt-2">
          <select
            onChange={handleChnage}
            className="bg-[#14b8a6] text-white outline-none font-semibold mb-4 px-5 py-2"
          >
            <option value="all">All</option>
            <option value="complate">Complate</option>
            <option value="inConplate">In Complate</option>
          </select>
        </div>
      </div>

      {filterTask.map((todo, index) => (
        <Task
          TodoComplate={TodoComplate}
          handleUpdate={handleUpdate}
          hanndleDelete={hanndleDelete}
          todo={todo}
          key={index}
        />
      ))}
    </div>
  );
};

export default ShowTask;
