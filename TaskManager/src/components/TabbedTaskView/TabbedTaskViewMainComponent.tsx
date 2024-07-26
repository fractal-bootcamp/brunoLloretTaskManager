import React from "react";
import TaskListStatus from "./TaskListStatus";
import TaskManagementPageContainer from "./TaskManagementPageContainer";
const TabbedTaskViewMainComponent = () => {
  return (
    <>
      <div>
        <div className="p-4 font-bold text-4xl font-mono text-center border-8 rounded-3xl border-yellow-300">
          <div className="border-8  border-yellow-500">
            <div className="border-8  border-yellow-700">
              <div className="border-8  border-yellow-900">
                <div className="border-8  border-yellow-200">
                  <h2 className="text-purple-800">Tasks</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-500 border-orange-700 rounded-3xl border-8 p-2">
          <TaskManagementPageContainer />
        </div>
      </div>
    </>
  );
};

export default TabbedTaskViewMainComponent;
