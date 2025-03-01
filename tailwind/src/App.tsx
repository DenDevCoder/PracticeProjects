import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [value, setValue] = useState<string>("");
  const [tasks, setTask] = useState<{ key: number; task: string }[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    if (value !== "") {
      setCount((prev) => prev + 1);
      setTask([...tasks, { key: count, task: value }]);
      setValue("");
    }
  };

  const handleDelete = (key: number) => {
    setTask(tasks.filter((task) => task.key !== key));
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-neutral-700">
      <h6 className="text-4xl w-1/2 text-center font-bold mt-6">Todo List</h6>
      <div className="flex flex-col items-center w-1/2 mt-4">
        <input
          value={value}
          type="text"
          className="bg-white border border-gray-300 p-2 rounded w-full mb-2 text-black"
          placeholder="input task"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Добавить задачу
        </button>
      </div>
      <div className="mt-8 w-1/2">
        <Tasks tasks={tasks} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
