import React from "react";
import Timer from "./Timer1";

export default function TopBar({ gameOver, setTime, bmb, timer }) {
  return (
    <div
      style={{
        background: "#4a752c",
        padding: "10px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >

      <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="flag" style={{ paddingRight: 10 }}>
      
      </span>
      </div>
      <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="flag" style={{ paddingRight: 10 }}>
      🚩
      </span>
      {bmb}
    </div>
      <Timer gameOver={gameOver} sendTime={setTime} timer={timer} />
    </div>
  );
}