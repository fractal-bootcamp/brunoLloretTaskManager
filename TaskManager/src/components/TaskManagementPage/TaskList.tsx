import React, { useState, useEffect } from "react";
import useTaskStore from "../../store/taskStore";
import generateRandomTasks from "../TaskListDummyData";
import { Status, Task, statuses } from "../../interfaces/interfaces";

const TaskList: React.FC = () => {
  const {
    tasks,
    currentTask,
    editingTask,
    editedTitle,
    editedDescription,
    editedStatus,
    viewTask,
    deleteTask,
    updateTaskTitle,
    updateTaskDescription,
    updateTaskStatus,
    startEditing,
    saveEditing,
    cancelEditing,
    setEditedTitle,
    setEditedDescription,
    setEditedStatus,
    initializeTasks,
  } = useTaskStore((state) => ({
    tasks: state.tasks,
    currentTask: state.currentTask,
    editingTask: state.editingTask,
    editedTitle: state.editedTitle,
    editedDescription: state.editedDescription,
    editedStatus: state.editedStatus,
    viewTask: state.viewTask,
    deleteTask: state.deleteTask,
    updateTaskTitle: state.updateTaskTitle,
    updateTaskDescription: state.updateTaskDescription,
    updateTaskStatus: state.updateTaskStatus,
    startEditing: state.startEditing,
    saveEditing: state.saveEditing,
    cancelEditing: state.cancelEditing,
    setEditedTitle: state.setEditedTitle,
    setEditedDescription: state.setEditedDescription,
    setEditedStatus: state.setEditedStatus,
    initializeTasks: state.initializeTasks,
  }));

  useEffect(() => {
    const dummyList = generateRandomTasks();
    console.log(dummyList);
    initializeTasks(dummyList);
  }, [initializeTasks]);

  const handleEdit = (task: Task) => {
    startEditing(task);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setEditedStatus(task.status);
  };

  const handleSave = () => {
    if (editingTask) {
      updateTaskTitle(editingTask.title, editedTitle);
      updateTaskDescription(editingTask.title, editedDescription);
      updateTaskStatus(editingTask.title, editedStatus);
      saveEditing();
    }
  };

  const handleCancel = () => {
    cancelEditing();
  };

  return (
    <>
      <div>
        <h2>TaskList</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.title}>
              {editingTask && editingTask.title === task.title ? (
                <div>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                  />
                  <select
                    value={editedStatus}
                    onChange={(e) => setEditedStatus(e.target.value as Status)}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <div>
                  <span>{task.title}</span>
                  <button onClick={() => viewTask(task.title)}>View</button>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button onClick={() => deleteTask(task.title)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;

function initializeTasks(dummyList: Task[]) {
  throw new Error("Function not implemented.");
}
