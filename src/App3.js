import React from "react";
import "./App.css";
import Board from "./components/TimerBoard";

function App3() {
  return (
    <div className="App">
      {/* <h2 style={{ fontFamily: "Fredoka One" }}>Minesweeper</h2> */}
      
      <Board y='10' x='15' bombs='10' timer='60'/>
      {/* <Board y='10' x='15' bombs='20' timer='60'/> */}
    </div>
  );
}

export default App3;