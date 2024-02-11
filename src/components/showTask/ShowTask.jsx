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
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    if (priorityFilter == "low") {
      const lowTasks = task.filter((item) => item.priority == "low");
      return setFilterTask(lowTasks);
    }
    if (priorityFilter == "medium") {
      const mediumTasks = task.filter((item) => item.priority == "medium");
      return setFilterTask(mediumTasks);
    }
    if (priorityFilter == "high") {
      const highTasks = task.filter((item) => item.priority == "high");
      return setFilterTask(highTasks);
    }
  }, [priorityFilter]);

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
            {filterTask?.length} Todo Here
          </p>
        </div>
        <div className="flex  gap-2 mx-2 mt-2">
          <select
            onChange={handleChnage}
            className="bg-[#14b8a6] text-white outline-none font-semibold mb-4 px-5 py-2"
          >
            <option value="all">All</option>
            <option value="complate">Complate</option>
            <option value="inConplate">In Complate</option>
          </select>
          <select
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="bg-[#14b8a6] text-white outline-none font-semibold mb-4 px-5 py-2"
          >
            <option selected disabled>
              {" "}
              Select Priority
            </option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
      </div>

      {filterTask?.map((todo, index) => (
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
