import { useState } from "react";
import useCounterStore from "./store/counterStore";
import GeneralContainer from "./components/GeneralComponent/GeneralContainer";

function App() {
  return (
    <>
      <div className="bg-yellow-100 h-screen">
        <div>
          <h2 className="bg-yellow-50 flex-end border-2 border-gray-200 font-mono text-xs p-1">
            you are visiting a tasks manager Application developed during the
            days twenty-four and twenty-five of the month of August, year 2024,
            in Brooklyn, NY
          </h2>
        </div>
        <div>
          <GeneralContainer />
        </div>
      </div>
    </>
  );
}

export default App;
