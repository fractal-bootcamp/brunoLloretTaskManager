// src/components/TaskDetails.tsx
import React from "react";
import { Task, Status, statuses } from "../../interfaces/interfaces";

interface TaskDetailsProps {
  task: Task;
  isEditing: boolean;
  editedTitle: string;
  editedDescription: string;
  editedStatus: Status;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onEditTitle: (title: string) => void;
  onEditDescription: (description: string) => void;
  onEditStatus: (status: Status) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  task,
  isEditing,
  editedTitle,
  editedDescription,
  editedStatus,
  onEdit,
  onSave,
  onCancel,
  onEditTitle,
  onEditDescription,
  onEditStatus,
}) => {
  if (isEditing) {
    return (
      <div className="ml-8 w-1/2">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <div>
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => onEditTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Description:</label>
          <textarea
            value={editedDescription}
            onChange={(e) => onEditDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Status:</label>
          <select
            value={editedStatus}
            onChange={(e) => onEditStatus(e.target.value as Status)}
            className="w-full p-2 mb-4 border rounded"
          >
            {statuses.map((status) => (
              <option key={status} value={status.name}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={onSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-8 w-1/2">
      <h2 className="text-xl font-bold mb-4">Task Details</h2>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Description:</strong> {task.description}
      </p>
      <p>
        <strong>Status:</strong> {task.status.name}
      </p>
      <button
        onClick={onEdit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Edit
      </button>
    </div>
  );
};

export default TaskDetails;
