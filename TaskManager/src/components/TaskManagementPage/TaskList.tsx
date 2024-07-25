import React from "react";
import { Status, Task, statuses } from "../../interfaces/interfaces";

interface TaskListProps {
  tasks: Task[];
  editingTask: Task | null;
  editedTitle: string;
  editedDescription: string;
  editedStatus: Status;
  onView: (title: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (title: string) => void;
  onSave: () => void;
  onCancel: () => void;
  onEditTitle: (title: string) => void;
  onEditDescription: (description: string) => void;
  onEditStatus: (status: Status) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  editingTask,
  editedTitle,
  editedDescription,
  editedStatus,
  onView,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  onEditTitle,
  onEditDescription,
  onEditStatus,
}) => {
  return (
    <div className="w-1/2">
      <h2 className="bg-slate-400 text-center font-extrabold p-3 border-red-400 border-4">
        TaskList
      </h2>
      <ul className="pl-10 space-y-3">
        {tasks.map((task) => (
          <li className="bg-slate-600 p-4" key={task.title}>
            {editingTask && editingTask.title === task.title ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => onEditTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editedDescription}
                  onChange={(e) => onEditDescription(e.target.value)}
                />
                <select
                  className="p-3 bg-orange-600 font-serif font-extrabold"
                  value={editedStatus}
                  onChange={(e) => onEditStatus(e.target.value as Status)}
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <button className="bg-white rounded-lg p-1" onClick={onSave}>
                  Save
                </button>
                <button className="bg-white rounded-lg p-1" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            ) : (
              <div className="inline-flex flex-row bg-indigo-600">
                <span className="bg-green-400 p-2 font-extralight">
                  {task.title}
                </span>
                <button
                  className="bg-slate-500 border-4 border-gold-500 px-1 py-1"
                  onClick={() => onView(task.title)}
                >
                  View
                </button>
                <button
                  className="bg-slate-500 border-4  border-blue-500 px-1 py-1"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="bg-slate-500 border-4  border-green-500 px-1 py-1"
                  onClick={() => onDelete(task.title)}
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
