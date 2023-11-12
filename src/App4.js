import React from "react";
import "./App.css";
import Board from "./components/TimerBoard";

function App4() {
  return (
    <div className="App">
      {/* <h2 style={{ fontFamily: "Fredoka One" }}>Minesweeper</h2> */}
      
      <Board y='18' x='25' bombs='25' timer='10'/>
      {/* <Board y='18' x='25' bombs='25' timer='120'/> */}
    </div>
  );
}

export default App4;