import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <div><h2>Lights Out Game!</h2>
      <h4>Click a box to change from Dark Green (lights out) to Light Green (lights on). Turn all the lights out to win!</h4></div>
      <Board />
    </div>
  );
}

export default App;
