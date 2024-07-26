import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task, Status, statuses } from "../interfaces/interfaces";
import generateRandomTasks from "../components/TaskListDummyData";

const dummyTaskList: Task[] = generateRandomTasks();

interface TaskStoreState {
  tasks: Task[];
  currentTask: Task | null;
  editingTask: Task | null;
  editedTitle: string | null; // Allow null value
  editedDescription: string | null; // Allow null value
  editedStatus: Status;

  // Actions
  createTask: (task: Task) => void;
  viewTask: (title: string) => void;
  deleteTask: (title: string) => void;
  updateTaskTitle: (oldTitle: string, newTitle: string) => void;
  updateTaskDescription: (title: string, newDescription: string) => void;
  updateTaskStatus: (title: string, newStatus: Status) => void;
  startEditing: (task: Task) => void;
  saveEditing: () => void;
  cancelEditing: () => void;
  setEditedTitle: (title: string) => void;
  setEditedDescription: (description: string) => void;
  setEditedStatus: (status: Status) => void;
  initializeTasks: (tasks: Task[]) => void;
}

const useTaskStore = create<TaskStoreState>()(
  persist(
    (set) => ({
      tasks: dummyTaskList,
      currentTask: null,
      editingTask: null,
      editedTitle: "",
      editedDescription: "",
      editedStatus: statuses[0],

      initializeTasks: (tasks: Task[]) => set({ tasks }),

      createTask: (task: Task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      viewTask: (title: string) =>
        set((state) => ({
          currentTask: state.tasks.find((task) => task.title === title) || null,
        })),

      updateTaskTitle: (oldTitle: string, newTitle: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.title === oldTitle ? { ...task, title: newTitle } : task
          ),
        })),

      updateTaskDescription: (title: string, newDescription: string) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.title === title
              ? { ...task, description: newDescription }
              : task
          ),
        })),

      updateTaskStatus: (title: string, newStatus: Status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.title === title ? { ...task, status: newStatus } : task
          ),
        })),

      deleteTask: (title: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.title !== title),
        })),

      startEditing: (task: Task) =>
        set(() => ({
          editingTask: task,
          editedTitle: task.title,
          editedDescription: task.description,
          editedStatus: task.status || statuses[0],
        })),

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

      cancelEditing: () =>
        set(() => ({
          editingTask: null,
        })),

      setEditedTitle: (title: string) => set(() => ({ editedTitle: title })),
      setEditedDescription: (description: string) =>
        set(() => ({ editedDescription: description })),
      setEditedStatus: (status: Status) =>
        set(() => ({ editedStatus: status })),
    }),
    {
      name: "task-storage", // unique name for the storage
      getStorage: () => localStorage, // specify the storage to use
    }
  )
);

export default useTaskStore;
