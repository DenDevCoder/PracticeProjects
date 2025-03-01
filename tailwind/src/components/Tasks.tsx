import React from "react";

const Tasks: React.FC<{
  tasks: { key: number; task: string }[];
  onDelete: (key: number) => void;
}> = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.key}
          className="bg-white text-black w-full rounded mb-2 flex justify-between items-center p-2"
        >
          <div> {task.task}</div>
          <button
            onClick={() => onDelete(task.key)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          >
            OK
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
