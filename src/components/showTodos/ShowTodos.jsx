import { useEffect, useState } from "react";
import styles from "./showTodo.module.css";

import Todo from "../todo/Todo";

const ShowTodos = ({
  todos,
  handleUpdate,
  hanndleDelete,
  TodoComplate,
  filterText,
}) => {
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    if (filterText === "complate") {
      const complatedTodos = todos.filter((item) => item.isComplete === true);
      return setFilterTodos(complatedTodos);
    }
    if (filterText === "inConplate") {
      const inComplatedTodos = todos.filter(
        (item) => item.isComplete === false
      );
      return setFilterTodos(inComplatedTodos);
    }
    if (filterText === "all") {
      setFilterTodos(todos);
    }
  }, [filterText, todos]);

  return (
    <div id={styles.todoContainer}>
      <p className="text-[#134e4a] py-3 px-7">{filterTodos.length} Todo Here</p>

      {filterTodos.map((todo, index) => (
        <Todo
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

export default ShowTodos;
