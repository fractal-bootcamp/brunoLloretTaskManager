import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
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
  const [selectedTaskTitle, setSelectedTaskTitle] = useState<string | null>(
    null
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(true);

  useEffect(() => {
    const dummyList = generateRandomTasks();
    initializeTasks(dummyList);
  }, [initializeTasks]);

  const handleEdit = () => {
    if (selectedTask) {
      startEditing(selectedTask);
      setEditedTitle(selectedTask.title);
      setEditedDescription(selectedTask.description);
      setEditedStatus(selectedTask.status);
      setIsEditing(true);
    }
  };

  const handleSave = () => {
    if (editingTask) {
      updateTaskTitle(editingTask.title, editedTitle);
      updateTaskDescription(editingTask.title, editedDescription);
      updateTaskStatus(editingTask.title, editedStatus);
      saveEditing();
      setIsEditing(false);
      // Update the selectedTask with the new values
      setSelectedTask({
        ...selectedTask!,
        title: editedTitle,
        description: editedDescription,
        status: editedStatus,
      });
    }
  };

  const handleCancel = () => {
    cancelEditing();
    setIsEditing(false);
  };

  const handleDisplay = (view: View) => {
    setCurrentView(view);
  };

  const handleViewTask = (title: string) => {
    if (title === selectedTaskTitle) {
      setSelectedTask(null);
      setSelectedTaskTitle(null);
      setIsEditing(false);
    } else {
      const task = tasks.find((t: Task) => t.title === title);
      setSelectedTask(task || null);
      setSelectedTaskTitle(title);
      setIsEditing(false);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "CREATE_TASK":
        return (
          <CreateTask
            task={null}
            isCreating={false}
            createdTitle={""}
            createdDescription={""}
            createdStatus={"Pending"}
            isEditing={false}
            editedTitle={""}
            editedDescription={""}
            editedStatus={"Pending"}
            onCreate={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCreateTitle={function (title: string | null): void {
              throw new Error("Function not implemented.");
            }}
            onCreateDescription={function (description: string | null): void {
              throw new Error("Function not implemented.");
            }}
            onCreateStatus={function (status: string | null): void {
              throw new Error("Function not implemented.");
            }}
            onEdit={function (): void {
              throw new Error("Function not implemented.");
            }}
            onSave={function (): void {
              throw new Error("Function not implemented.");
            }}
            onCancel={function (): void {
              throw new Error("Function not implemented.");
            }}
            onEditTitle={function (title: string): void {
              throw new Error("Function not implemented.");
            }}
            onEditDescription={function (description: string): void {
              throw new Error("Function not implemented.");
            }}
            onEditStatus={function (status: Status): void {
              throw new Error("Function not implemented.");
            }}
          />
        );
      case "CREATE_CUSTOM_THEME":
        return <CreateCustomTheme />;
      case "VIEW_ALL_TASKS":
        return (
          <div className="flex">
            <TaskList
              tasks={tasks}
              onView={handleViewTask}
              onDelete={deleteTask}
              selectedTaskTitle={selectedTaskTitle}
            />
            {selectedTask && (
              <TaskDetails
                task={selectedTask}
                isEditing={isEditing}
                editedTitle={editedTitle}
                editedDescription={editedDescription}
                editedStatus={editedStatus}
                onEdit={handleEdit}
                onSave={handleSave}
                onCancel={handleCancel}
                onEditTitle={setEditedTitle}
                onEditDescription={setEditedDescription}
                onEditStatus={setEditedStatus}
              />
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
