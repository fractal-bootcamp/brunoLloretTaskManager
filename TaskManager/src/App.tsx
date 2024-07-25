import { useState } from "react";
import useCounterStore from "./store/counterStore";
import "./App.css";
import { Controls } from "./components/Controls";
import { BearCounter } from "./components/BearCounter";

function App() {
  return (
    <>
      <div>
        <h2> Task Manager</h2>
        <BearCounter />
        <Controls />
      </div>
    </>
  );
}

export default App;
