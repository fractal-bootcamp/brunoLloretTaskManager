import { useState } from "react";
import useCounterStore from "./store/counterStore";
import "./App.css";
import TaskList from "./components/TaskManagementPage/TaskList";

function App() {
  return (
    <>
      <div>
        <h2> Task Manager</h2>
        <TaskList />
      </div>
    </>
  );
}

export default App;
