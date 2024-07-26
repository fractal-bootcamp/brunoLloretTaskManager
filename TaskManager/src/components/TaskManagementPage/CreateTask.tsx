import React, { useState } from "react";
import { Task, Status, statuses } from "../../interfaces/interfaces";

interface CreateTaskProps {
  task: Task | null;

  isCreating: boolean;

  isEditing: boolean;
  editedTitle: string;
  editedDescription: string;
  editedStatus: Status;

  onCreate: (task: Task | null) => void;

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

  isEditing,
  editedTitle,
  editedDescription,
  editedStatus,

  onCreate,

  onEdit,
  onSave,
  onCancel,
  onEditTitle,
  onEditDescription,
  onEditStatus,
}) => {
  const [createTaskTitle, setCreateTaskTitle] = useState<string>("");
  const [createTaskDescription, setCreateTaskDescription] =
    useState<string>("");
  //   const [createTaskStatus, setCreateTaskStatus] = useState<Status[]>(statuses);
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    description: "",
    status: "Pending",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <div className="p-1 text-center text-cyan-500 font-extrabold bg-purple-700">
          <h2>Create Task</h2>
        </div>
        <div>
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2">Description:</label>
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block mb-2">Status:</label>

          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
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
            onClick={() => {
              onCreate(newTask);
              console.log(newTask);
            }}
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
