import React from "react";
import Timer from "./Timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function TopBar({ gameOver, setTime, bmb }) {
  const navigate = useNavigate();

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

      {/* <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="flag" style={{ paddingRight: 10 }}>
      
      </span>
      </div> */}
      <div>
      <FontAwesomeIcon icon={faHome} onClick={()=>{navigate('/')}} />
      </div>
      <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="flag" style={{ paddingRight: 10 }}>
      💣
      </span>
      {bmb}
    </div>
      <Timer gameOver={gameOver} sendTime={setTime} />
    </div>
  );
}