import { create } from "zustand";

//combining two approaches
export type Status = "Pending" | "In Progress" | "Completed" | "Archived";
export const statuses: Status[] = [
  "Pending",
  "In Progress",
  "Completed",
  "Archived",
];

export type View = "CREATE_TASK" | "CREATE_CUSTOM_THEME" | "VIEW_ALL_TASKS";

export interface Task {
  title: string | null;
  description: string | null;
  status: Status | null;
}

export type TaskActions = {
  createTask: (task: Task) => void;
  // Parameter: task: Task — This means that the function expects a single task object that you want to add to the list.
  // Return Type: void — This indicates that the function does not return any value. Instead, it directly modifies the state.

  viewTask: (task: Task) => Task | null;
  updateTaskTitle: (task: Task) => string;
  updateTaskDescription: (task: Task) => string;
  updateTaskStatus: (task: Task) => Status;
  deleteTask: (task: Task) => void;
};

export interface TasksState {
  tasks: Task[];
  currentTask: Task | null;
}

export interface TaskState {
  title: string;
  description: string;
  status: Status;
}

export interface Tasks {
  tasks: Task[];
}

// See example below
export interface Theme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}

// mytheme: {
//     "primary": "#a991f7",
//     "secondary": "#f6d860",
//     "accent": "#37cdbe",
//     "neutral": "#3d4451",
//     "base-100": "#ffffff",

//     "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
//     "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
//     "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
//     "--animation-btn": "0.25s", // duration of animation when you click on button
//     "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
//     "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
//     "--border-btn": "1px", // border width of buttons
//     "--tab-border": "1px", // border width of tabs
//     "--tab-radius": "0.5rem", // border radius of tabs
//   },
