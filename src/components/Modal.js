import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ reset, completeTime, result, btn }) {
  const [render, setRender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);
  return (
    <div
      style={{
        opacity: render ? 1 : 0,
        height: "100%",
        width: "100%",
        position: "absolute",
        //background: "rgba(0,0,0,0.3)",
        background: "rgba(242, 242, 242, 0.7)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>
        <b style={{ color: "#663300", fontSize: "45px" }}>{result}</b>
      </p>
      <div className="row d-flex justify-content-center m-2">
      <div onClick={() => reset()} className="tryAgain m-2">
        {btn} 
      </div>
      <div  className="tryAgain m-2" onClick={()=>{navigate('/')}}>
        Dashboard
      </div>
      </div>
    </div>
  );
}