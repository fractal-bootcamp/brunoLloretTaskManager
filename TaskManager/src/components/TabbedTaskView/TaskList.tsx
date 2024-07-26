import React, { useState, useEffect } from "react";
import { Task, Status, statuses } from "../../interfaces/interfaces";
import { TaskListProps } from "../../interfaces/interfaces";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onView,
  onDelete,
  onEditStatus,
  selectedTaskTitle,
  editedStatus,
}) => {
  const [sortTasks, setSortTasks] = useState<Task[]>([]);
  const allTasks = tasks;
  console.log("allTasks", allTasks);

  let sortedTasks = allTasks.sort((a, b) => a.status.order - b.status.order);

  console.log("sortedTasks", sortedTasks);

  useEffect(() => {
    setSortTasks(sortedTasks);
  }, [sortTasks]);

  return (
    <div className="w-1/2">
      <h2 className="bg-slate-400 text-center font-extrabold p-3 border-red-400 border-4">
        TaskList
      </h2>
      <ul className="pl-10 space-y-3">
        {sortedTasks.map((task) => (
          <li className="bg-slate-600 p-4 w-64" key={task.title}>
            <div className=" inline-flex flex-center">
              <span className="bg-green-400 w-16 p-2 font-extralight">
                {task.title}
              </span>

              <div>
                <label className="block mb-2">Status:</label>
                <select
                  value={task.status.name}
                  onChange={(e) =>
                    onEditStatus(
                      task.title,
                      statuses.find((status) => status.name === e.target.value)!
                    )
                  }
                  className="w-full p-2 mb-4 border rounded"
                >
                  {statuses.map((status) => (
                    <option key={status.name} value={status.name}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className={`bg-slate-500 border-4 border-fuchsia-500 w-16 px-1 py-1 ${
                  selectedTaskTitle === task.title ? "bg-blue-500" : ""
                }`}
                onClick={() => onView(task.title)}
              >
                {selectedTaskTitle === task.title ? "Hide" : "View"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
