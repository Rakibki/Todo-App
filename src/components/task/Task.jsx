import styles from "./task.module.css";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const Task = ({ todo, hanndleDelete, handleUpdate, TodoComplate }) => {
  return (
    <div className="flex p-4 justify-between md:px-10" id={styles.todo}>
      <div>
        <div className="flex gap-3">
          <input
            onClick={() => TodoComplate(todo.id)}
            type="checkbox"
            className="w-[17px]"
          />
          <p>task {todo.count}</p>
          <p>{todo.value}</p>
        </div>
      </div>
      <div className="md:flex hidden  gap-6">
        <p>Status: {todo?.isComplete ? "completed" : "incomplete"}</p>
        <p>|</p>
        <p
          className={`${
            todo?.priority === "low" && "text-[#3498db] bg-[#ecf0f1]"
          } ${todo?.priority === "medium" && "text-[#f39c12] bg-[#fdebd0]"}
          ${todo?.priority === "high" && "text-[#e74c3c] bg-[#f9ebec]"}
          px-2 rounded-md
          `}
        >
          priority: {todo?.priority}
        </p>
      </div>

      <div className="flex gap-2">
        <AiFillDelete
          onClick={() => hanndleDelete(todo.id)}
          className="text-[25px] cursor-pointer"
        />
        <BiEdit
          onClick={() => handleUpdate(todo)}
          className="text-[25px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Task;
