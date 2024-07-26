import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails copy";
import useTaskStore from "../../store/taskStore";
import generateRandomTasks from "../TaskListDummyData";
import { Status, Task, statuses, View } from "../../interfaces/interfaces";
import CreateCustomTheme from "../TaskManagementPage/CreateCustomTheme";
import CreateTask from "../TaskManagementPage/CreateTask";

const TaskManagementPageContainer = () => {
  const {
    tasks,

    currentTask,
    editingTask,
    editedTitle,
    editedDescription,
    editedStatus,

    createTask,
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
  const [taskStorage, setTaskStorage] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [selectedTaskTitle, setSelectedTaskTitle] = useState<string | null>(
    null
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(true);

  //Mounts the initial dummy data list for testing UI
  useEffect(() => {
    const DBTaskList = generateRandomTasks();
    console.log("DBTaskList", DBTaskList);
    initializeTasks(DBTaskList);
    setTaskStorage([...taskStorage, ...DBTaskList]);
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

  return (
    <div className="flex">
      <div className="bg-yellow-300 container max-w-96 p-5">
        <TaskList
          tasks={tasks}
          onView={handleViewTask}
          onDelete={deleteTask}
          selectedTaskTitle={selectedTaskTitle}
        />
      </div>
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
};

export default TaskManagementPageContainer;
