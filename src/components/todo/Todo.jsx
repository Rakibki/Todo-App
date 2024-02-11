import styles from "./Todo.module.css";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const Todo = ({ todo, hanndleDelete, handleUpdate, TodoComplate }) => {
  return (
    <div className="flex p-4 justify-between px-10" id={styles.todo}>
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

export default Todo;
