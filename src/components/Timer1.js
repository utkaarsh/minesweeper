import React, { useState, useEffect } from "react";
let timeIntervalId;
export default function Timer({ gameOver, sendTime, timer }) {
  let [time, setTime] = useState(timer);
  let [sTime, setSTime] = useState(0);

  // useEffect(() => {
  //   if (time > 0 && gameOver) {
  //     setSTime(time);
  //     setTime(10);
  //   }
  // }, [gameOver, time]);

  useEffect(() => {
    const incrementTime = () => {
      let newTime = time - 1;
      setTime(newTime);
      setSTime(newTime);
    };
    timeIntervalId = setTimeout(() => {
      incrementTime();
    }, 1000);
    if (gameOver) {
      //   let updatedTime = JSON.parse(JSON.stringify(time));
      // setSTime(time);
      setTime(timer);
      clearInterval(timeIntervalId);
    }
  }, [time, setTime, gameOver, sendTime]);

  return (
    <div style={{ color: "white", fontSize: 20 }}>
      <span role="img" aria-label="clock" style={{ paddingRight: 10 }}>
        ⏰
      </span>
      {gameOver ? sTime : time}
    </div>
  );
}