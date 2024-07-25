import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import useTaskStore from "../../store/taskStore";
import generateRandomTasks from "../TaskListDummyData";
import { Status, Task, statuses, View } from "../../interfaces/interfaces";
import CreateCustomTheme from "./CreateCustomTheme";
import CreateTask from "./CreateTask";

const TaskManagementPageContainer = () => {
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
  }: any = useTaskStore();
  const [currentView, setCurrentView] = useState<View>("VIEW_ALL_TASKS");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const dummyList = generateRandomTasks();
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

  const handleDisplay = (view: View) => {
    setCurrentView(view);
  };

  const handleViewTask = (title: string) => {
    const task = tasks.find((t: Task) => t.title === title);
    setSelectedTask(task || null);
  };

  const renderView = () => {
    switch (currentView) {
      case "CREATE_TASK":
        return <CreateTask />;
      case "CREATE_CUSTOM_THEME":
        return <CreateCustomTheme />;
      case "VIEW_ALL_TASKS":
        return (
          <div className="flex">
            <TaskList
              tasks={tasks}
              editingTask={editingTask}
              editedTitle={editedTitle}
              editedDescription={editedDescription}
              editedStatus={editedStatus}
              onView={handleViewTask}
              onEdit={handleEdit}
              onDelete={deleteTask}
              onSave={handleSave}
              onCancel={handleCancel}
              onEditTitle={setEditedTitle}
              onEditDescription={setEditedDescription}
              onEditStatus={setEditedStatus}
            />
            {selectedTask && (
              <div className="ml-8 w-1/2">
                <h2 className="text-xl font-bold mb-4">Task Details</h2>
                <p>
                  <strong>Title:</strong> {selectedTask.title}
                </p>
                <p>
                  <strong>Description:</strong> {selectedTask.description}
                </p>
                <p>
                  <strong>Status:</strong> {selectedTask.status}
                </p>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-yellow-300 container mx-auto p-5">
      <div className="bg-cyan-500 p-3 flex justify-center space-x-4 mb-4">
        <button
          className="border-2 rounded-lg border-gray-400 px-2 py-1"
          onClick={() => handleDisplay("CREATE_TASK")}
        >
          Create task
        </button>
        <button
          className="border-2 rounded-lg border-gray-400 px-2 py-1"
          onClick={() => handleDisplay("CREATE_CUSTOM_THEME")}
        >
          Create Custom Theme
        </button>
        <button
          className="border-2 rounded-lg border-gray-400 px-2 py-1"
          onClick={() => handleDisplay("VIEW_ALL_TASKS")}
        >
          View All Tasks
        </button>
      </div>
      <div>{renderView()}</div>
    </div>
  );
};

export default TaskManagementPageContainer;
