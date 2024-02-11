import { useState } from "react";
import shortid from "shortid";
import CreateTodo from "./components/createTodo/CreateTodo";
import ShowTodos from "./components/showTodos/ShowTodos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import coverImage from "./assets/images/cover.jpg";

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
    <div
      className="max-w-[1300px] relative mx-auto min-h-screen -mt-3"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundPosition: "cover",
        backgroundSize: "cover",
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bg-[#00000099] top-0 w-full h-full ">
        <div className="mt-12">
          <CreateTodo
            value={value}
            setValue={setValue}
            setCount={setCount}
            count={count}
            getTodo={getTodo}
          />
        </div>
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
        <ShowTodos
          handleUpdate={handleUpdate}
          filterText={filterText}
          TodoComplate={TodoComplate}
          hanndleDelete={hanndleDelete}
          todos={todos}
        />
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
    </div>
  );
};

export default App;
