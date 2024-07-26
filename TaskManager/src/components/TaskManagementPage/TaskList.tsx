import React from "react";
import { Task } from "../../interfaces/interfaces";

interface TaskListProps {
  tasks: Task[];
  onView: (title: string) => void;
  onDelete: (title: string) => void;
  selectedTaskTitle: string | null;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onView,
  onDelete,
  selectedTaskTitle,
}) => {
  return (
    <div className="w-1/2">
      <h2 className="bg-slate-400 text-center font-extrabold p-3 border-red-400 border-4">
        TaskList
      </h2>
      <ul className="pl-10 space-y-3">
        {tasks.map((task) => (
          <li className="bg-slate-600 p-4" key={task.title}>
            <div className="inline-flex flex-row">
              <span className="bg-green-400 p-2 font-extralight">
                {task.title}
              </span>
              <button
                className={`bg-slate-500 border-4 border-fuchsia-500 px-1 py-1 ${
                  selectedTaskTitle === task.title ? "bg-blue-500" : ""
                }`}
                onClick={() => onView(task.title)}
              >
                {selectedTaskTitle === task.title ? "Hide" : "View"}
              </button>
              <button
                className="bg-slate-500 border-4  border-green-500 px-1 py-1"
                onClick={() => onDelete(task.title)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
