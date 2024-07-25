import React, { useState } from "react";
import { Task, Status, statuses } from "../../interfaces/interfaces";

interface CreateTaskProps {
  task: Task | null;
  isCreating: boolean;
  createdTitle: string;
  createdDescription: string;
  createdStatus: Status;
  isEditing: boolean;
  editedTitle: string;
  editedDescription: string;
  editedStatus: Status;
  onCreate: () => void;
  onCreateTitle: (title: null | string) => void;
  onCreateDescription: (description: null | string) => void;
  onCreateStatus: (status: null | string) => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onEditTitle: (title: string) => void;
  onEditDescription: (description: string) => void;
  onEditStatus: (status: Status) => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({
  task,
  isCreating,
  createdTitle,
  createdDescription,
  createdStatus,
  isEditing,
  editedTitle,
  editedDescription,
  editedStatus,
  onCreate,
  onCreateTitle,
  onCreateDescription,
  onCreateStatus,
  onEdit,
  onSave,
  onCancel,
  onEditTitle,
  onEditDescription,
  onEditStatus,
}) => {
  return (
    <>
      <div>
        <div>
          <h2>Create Task</h2>
        </div>
        <div>
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            value={createdTitle}
            onChange={(e) => onCreateTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2">Description:</label>
          <textarea
            value={createdDescription}
            onChange={(e) => onCreateDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Status:</label>
          <select
            value={createdStatus}
            onChange={(e) => onCreateStatus(e.target.value as Status)}
            className="w-full p-2 mb-4 border rounded"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={onCreate}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Create
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
