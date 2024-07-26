import React, { useState, useEffect } from "react";
import TabbedTaskViewMainComponent from "../TabbedTaskView/TabbedTaskViewMainComponent";
import TaskManagementMainContainer from "../TaskManagementPage/TaskManagementMainContainer";

const GeneralContainer = () => {
  const [view, setView] = useState<string>("");

  const handleView = (viewType: string) => {
    console.log("clicked!", viewType);
    setView(viewType);
  };

  return (
    <>
      <div>
        <div>
          <div className="p-2 bg-slate-400 text-center font-mono font-bold">
            <h1>TODO App</h1>
          </div>
          <div className="text-center space-x-5 border-cyan-700 border-4">
            <button
              className="p-2 bg-slate-400 text-center font-mono font-bold"
              onClick={() => handleView("tabbedTasks")}
              id="tabbedTasks"
            >
              <h2>Tabbed Tasks</h2>
            </button>
            <button onClick={() => handleView("taskManager")} id="taskManager">
              <h2>Task Manager</h2>
            </button>
          </div>
        </div>
        <div className="bg-red-400">
          {view === "tabbedTasks" && <TabbedTaskViewMainComponent />}
          {view === "taskManager" && <TaskManagementMainContainer />}
        </div>
      </div>
    </>
  );
};
export default GeneralContainer;
