import { useState } from "react";

import shortid from "shortid";

import CreateTodo from "./components/createTodo/CreateTodo";
// import ShowTodos from "./components/showTodos/ShowTodos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);
  const [filterText, setFilterText] = useState("all");
  const [value, setValue] = useState("");

  const TodoComplate = (id) => {
    const updatedTodo = todos.find((item) => item.id === id);
    updatedTodo.isComplete = true;
  };

  const getTodo = (todo) => {
    if (!todo) {
      return toast.error("addedplease provide something");
    }
    const newTodo = {
      id: shortid.generate(),
      value: todo,
      isComplete: false,
      count: count,
    };
    setTodos([...todos, newTodo]);
    toast.success("added new task");
  };

  const hanndleDelete = (id) => {
    const filterTodos = () => todos.filter((item) => item.id !== id);
    setTodos(filterTodos);
    toast.warn("Your Todo has been deleted!");
  };

  const handleChnage = (e) => {
    setFilterText(e.target.value);
  };

  const handleUpdate = (todo) => {
    setValue(todo.value);
    const newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <div id="mainRoot">
      <CreateTodo
        value={value}
        setValue={setValue}
        setCount={setCount}
        count={count}
        getTodo={getTodo}
      />
      <div className="flex justify-center">
        <select
          onChange={handleChnage}
          className="bg-[#14b8a6] text-white outline-none font-semibold mb-4 px-5 py-2"
        >
          <option value="all">All</option>
          <option value="complate">Complate</option>
          <option value="inConplate">In Complate</option>
        </select>
      </div>
      {/* <ShowTodos
        handleUpdate={handleUpdate}
        filterText={filterText}
        TodoComplate={TodoComplate}
        hanndleDelete={hanndleDelete}
        todos={todos}
      /> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
