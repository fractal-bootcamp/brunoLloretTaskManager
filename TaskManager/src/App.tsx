import { useState } from "react";
import useCounterStore from "./store/counterStore";
import GeneralContainer from "./components/GeneralComponent/GeneralContainer";

function App() {
  return (
    <>
      <div className="">
        <h2 className="justify-center flex border-2 border-gray-200 font-mono">
          Task Manager
        </h2>
      </div>
      <div>
        <GeneralContainer />
      </div>
    </>
  );
}

export default App;
