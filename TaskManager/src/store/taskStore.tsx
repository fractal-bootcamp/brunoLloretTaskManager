import { create } from "zustand";
import {
  TaskState,
  Task,
  Status,
  TaskActions,
  statuses,
} from "../interfaces/interfaces";
import generateRandomTasks from "../components/TaskListDummyData";

const dummyTaskList: Task[] = generateRandomTasks();

interface TaskStoreState {
  tasks: Task[];
  currentTask: Task | null;
  editingTask: Task | null; // Keeps track of the task being edited
  editedTitle: string; // Holds the current title being edited
  editedDescription: string; // Holds the current description being edited
  editedStatus: Status; // Holds the current status being edited

  // Actions
  createTask: (task: Task) => void; // Create a new task
  viewTask: (title: string) => void; // Set the current task to be viewed
  updateTaskTitle: (oldTitle: string, newTitle: string) => void; // Update the title of a task
  updateTaskDescription: (title: string, newDescription: string) => void; // Update the description of a task
  updateTaskStatus: (title: string, newStatus: Status) => void; // Update the status of a task
  deleteTask: (title: string) => void; // Delete a task by title
  startEditing: (task: Task) => void; // Start editing a task
  saveEditing: () => void; // Save changes made during editing
  cancelEditing: () => void; // Cancel editing and revert changes
  setEditedTitle: (title: string) => void; // Set the title being edited
  setEditedDescription: (description: string) => void; // Set the description being edited
  setEditedStatus: (status: Status) => void; // Set the status being edited
  initializeTasks: (tasks: Task[]) => void;
}

const useTaskStore = create((set) => ({
  tasks: [], //declare an initial state with empty array
  currentTask: null as Task | null, //state to keep track of the currently viewed task
  editingTask: null as Task | null,
  editedTitle: "",
  editedDescription: "",
  editedStatus: "Pending" as Status,

  initializeTasks: (tasks: Task[]) => set({ tasks }),

  //Create a new task
  createTask: (task: Task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  // Function to view a specific task by title
  viewTask: (title: string) =>
    set((state) => ({
      currentTask:
        state.tasks.find((task: Task) => task.title === title) || null,
    })),

  // Function to update the title of a specific task
  updateTaskTitle: (oldTitle: string, newTitle: string) =>
    set((state) => ({
      tasks: state.tasks.map((task: Task) =>
        task.title === oldTitle ? { ...task, title: newTitle } : task
      ),
    })),

  // Function to update the description of a specific task
  updateTaskDescription: (title: string, newDescription: string) =>
    set((state) => ({
      tasks: state.tasks.map((task: Task) =>
        task.title === title ? { ...task, description: newDescription } : task
      ),
    })),

  // Function to update the status of a specific task
  updateTaskStatus: (title: string, newStatus: Status) =>
    set((state) => ({
      tasks: state.tasks.map((task: Task) =>
        task.title === title ? { ...task, status: newStatus } : task
      ),
    })),

  // Function to delete a task by title
  deleteTask: (title: string) =>
    set((state) => ({
      tasks: state.tasks.filter((task: Task) => task.title !== title),
    })),

  // Start editing a task
  startEditing: (task: Task) =>
    set(() => ({
      editingTask: task,
      editedTitle: task.title,
      editedDescription: task.description,
      editedStatus: task.status,
    })),

  // Save editing changes
  saveEditing: () =>
    set((state) => {
      if (state.editingTask) {
        const { title } = state.editingTask;
        const { editedTitle, editedDescription, editedStatus } = state;
        return {
          tasks: state.tasks.map((task) =>
            task.title === title
              ? {
                  ...task,
                  title: editedTitle,
                  description: editedDescription,
                  status: editedStatus,
                }
              : task
          ),
          editingTask: null,
        };
      }
      return {};
    }),

  // Cancel editing
  cancelEditing: () =>
    set(() => ({
      editingTask: null,
    })),

  // Set edited title
  setEditedTitle: (title: string) => set(() => ({ editedTitle: title })),

  // Set edited description
  setEditedDescription: (description: string) =>
    set(() => ({ editedDescription: description })),

  // Set edited status
  setEditedStatus: (status: Status) => set(() => ({ editedStatus: status })),
}));

export default useTaskStore;
