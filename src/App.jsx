import { useState } from "react";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import coverImage from "./assets/images/cover.jpg";
import CreateTask from "./components/createTask/CreateTask";
import ShowTask from "./components/showTask/ShowTask";
import { getLocalStor } from "./utils/localStoreg";

const App = () => {
  // all task
  const [allLsTasks, setAllLsTaks] = useState(getLocalStor("tasks"));
  const [count, setCount] = useState(1);
  const [filterText, setFilterText] = useState("all");
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState('low');

  const TodoComplate = (id) => {
    const updatedTodo = allLsTasks.find((item) => item.id === id);
    updatedTodo.isComplete = true;
    const alltaskStr = JSON.stringify(allLsTasks);
    localStorage.setItem("tasks", alltaskStr);
  };

  const getTask = (todo) => {
    if (!todo) {
      return toast.error("addedplease provide something");
    }
    const newTask = {
      id: shortid.generate(),
      value: todo,
      isComplete: false,
      count: count,
      priority: priority,
    };
    allLsTasks.push(newTask);
    const alltaskStr = JSON.stringify(allLsTasks);
    localStorage.setItem("tasks", alltaskStr);
  };

  const hanndleDelete = (id) => {
    const deletedTask = allLsTasks.findIndex((item) => item?.id == id);
    allLsTasks.splice(deletedTask, 1);
    const alltaskStr = JSON.stringify(allLsTasks);
    localStorage.setItem("tasks", alltaskStr);
    const finterTasks = allLsTasks?.filter((item) => item?.id !== id);
    setAllLsTaks(finterTasks);
    toast.warn("Your Todo has been deleted!");
  };

  const handleChnage = (e) => {
    setFilterText(e.target.value);
  };

  const handleUpdate = (todo) => {
    setValue(todo.value);
    const newtask = allLsTasks.filter((item) => item.id !== todo.id);
    setAllLsTaks(newtask);
    const alltaskStr = JSON.stringify(allLsTasks);
    localStorage.setItem("tasks", alltaskStr);
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
          <CreateTask
            value={value}
            setValue={setValue}
            setCount={setCount}
            count={count}
            getTask={getTask}
            setPriority={setPriority}
          />
        </div>

        <ShowTask
          handleUpdate={handleUpdate}
          filterText={filterText}
          TodoComplate={TodoComplate}
          hanndleDelete={hanndleDelete}
          handleChnage={handleChnage}
          task={allLsTasks}
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
