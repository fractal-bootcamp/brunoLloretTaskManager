import React, { useState } from "react";
import TabbedTaskViewMainComponent from "../TabbedTaskView/TabbedTaskViewMainComponent";
import TaskManagementMainContainer from "../TaskManagementPage/TaskManagementMainContainer";

const GeneralContainer = () => {
  const [view, setView] = useState<string>("");

  const handleView = (viewType: string) => {
    // Toggle between the current view and the default (quotes) view
    setView((prevView) => (prevView === viewType ? "" : viewType));
  };

  return (
    <>
      <div>
        <div>
          <div className="p-2 bg-yellow-100 text-center p-7 align-middle font-mono font-bold h-20 text-xl">
            <h1>DO IT!</h1>
          </div>
          <div className="text-center space-x-5 border-yellow-200 border-4 rounded-2xl overflow-hidden">
            <div className="bg-purple-300 text-yellow-700 text-center space-x-40 font-mono font-extrabold p-2.5 rounded-2xl">
              <button
                className="border-8 border-purple-400 p-2 rounded-3xl w-48 font-extrabold"
                onClick={() => handleView("tabbedTasks")}
                id="tabbedTasks"
              >
                <h2>Tabbed Tasks</h2>
              </button>
              <button
                className="border-8 border-purple-400 p-2 rounded-3xl w-48 font-extrabold"
                onClick={() => handleView("taskManager")}
                id="taskManager"
              >
                <h2>Task Manager</h2>
              </button>
            </div>
          </div>
        </div>
        <div className="">
          {view === "" && (
            <div className="p-96 flex-col space-y-7 font-serif">
              <div>
                <p>
                  "Procrastination is the art of keeping up with yesterday."
                </p>
                <h3 className="font-semibold">– Don Marquis</h3>
              </div>
              <div>
                <p>"The best way to get something done is to begin."</p>
                <h3 className="font-semibold">– Anonymous</h3>
              </div>
              <div>
                <p>"Carpe diem, quam minimum credula postero."</p>
                <p>
                  (Seize the day, putting as little trust as possible in the
                  future.)
                </p>
                <h3 className="font-semibold">– Horace</h3>
              </div>
            </div>
          )}
          {view === "tabbedTasks" && <TabbedTaskViewMainComponent />}
          {view === "taskManager" && <TaskManagementMainContainer />}
        </div>
      </div>
    </>
  );
};

export default GeneralContainer;
