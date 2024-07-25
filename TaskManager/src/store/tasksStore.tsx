import { create } from "zustand";
import {
  TasksState,
  Task,
  TaskActions,
  statuses,
} from "../interfaces/interfaces";

// const useTasksStore = create<TasksState>()((set) => ({
// tasks: [],
// viewAllTasks: () => set({state.tasks}),
// deleteAllTasks: ()=> set({tasks: []})
// }));
// export default useTasksStore;

// viewTask: ()=> set({task: ...task}),
//     updateTaskTitle: ()=> set({task[index].title: newTask[index].title}),
//     updateTaskDescription: ()=> set({task[index].description: newTask[index].description}),
//     updateTaskStatus: ()=> set({task[index].status: newTask[index].status})
const taskActionsReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case "viewTask":
      return { ...state, task: action.task };
    case "updateTaskTitle":
      return { ...state, task: action.task.title };
    case "updateTaskDescription":
      return { ...state, task: action.task.description };
    case "updateTaskStatus":
      return { ...state, task: action.task.status };
    default:
      return state;
  }
};

const useTaskStore = create<TaskState & TaskActions>((set) => ({
  title: "",
  description: "",
  status: [],
  task: { title, description, status },
  dispatch: (action: TaskAction) =>
    set((state) => taskActionsReducer(state, action)),
}));
