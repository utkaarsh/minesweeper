import React from "react";
import "./App.css";
import Board from "./components/Board";

function App2() {
  return (
    <div className="App">
      {/* <h2 style={{ fontFamily: "Fredoka One" }}>Minesweeper</h2> */}
      
      <Board y='18' x='25' bombs='25'/>
    </div>
  );
}

export default App2;