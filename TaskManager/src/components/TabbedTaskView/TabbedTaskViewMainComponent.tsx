import React from "react";
import TaskListStatus from "./TaskListStatus";
import TaskManagementPageContainer from "./TaskManagementPageContainer";
const TabbedTaskViewMainComponent = () => {
  return (
    <>
      <div>
        <div className="p-4 font-bold text-center border-8 border-white">
          <h2>Tabbed Task View Main Component</h2>
        </div>
        <div className="bg-green-500 border-orange-700 border-8 p-2">
          <TaskManagementPageContainer />
        </div>
      </div>
    </>
  );
};

export default TabbedTaskViewMainComponent;
