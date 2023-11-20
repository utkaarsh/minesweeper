import React, { useState, useEffect } from "react";
import createBoard from "../util/createboard";
import Cell from "./Cell";
import { revealed } from "../util/reveal";
import TopBar from "./TimerTopBar";
import Modal from "./Modal";
export default function TimerBoard(props) {
  const [board, setBoard] = useState([]);
  const [mineLocations, setMineLocations] = useState([]);
  const [nonMinesCount, setNonMinesCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [restart, setRestart] = useState(false);
  const [newTime, setTime] = useState(0);
  const [result, setResult] = useState();
  const [btn, setBtn] = useState();

  useEffect(() => {
    const generateBoard = () => {
      const getBoard = createBoard(props.y, props.x, props.bombs, setMineLocations);
      setNonMinesCount(props.x*props.y - props.bombs);
      setTime(0);
      setBoard(getBoard.board);
      setMineLocations(getBoard.mineLocation);
      setGameOver(false);
      setRestart(false);
    };
    generateBoard();
  }, [restart, setRestart]);

  useEffect(() => {
    let timerInterval;
    
    // Start the timer when the board is generated
    if (!gameOver) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;//incrementing the newTime every second
          // Check if 10 seconds have passed
          if (newTime == props.timer) {
            setResult("Time over!");
            setBtn("Try again");
            setGameOver(true);
            clearInterval(timerInterval);
            //The clearInterval function is used to clean up the timer when the component is unmounted or the game is over.
          }
          return newTime;
        });
      }, 1000);
    }

    // Clean up the timer when the component is unmounted or the game is over
    return () => clearInterval(timerInterval);
  }, [gameOver]);

  const updateBoard = (x, y, e) => {
    let newBoardValues = JSON.parse(JSON.stringify(board));
    let newNonMinesCount = nonMinesCount;
    if (newBoardValues[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        if (
          !newBoardValues[mineLocations[i][0]][mineLocations[i][1]].revealed
        ) {
          // setInterval(() => {
          newBoardValues[mineLocations[i][0]][
            mineLocations[i][1]
          ].revealed = true;
          setBoard(newBoardValues);

          // }, 500);
        }
      }
      setResult("Game Over!");
      setBtn("Try again");
      setGameOver(true);
    } else {
      // newBoardValues[x][y].revealed = true;
      newBoardValues = revealed(newBoardValues, x, y, newNonMinesCount);
      if (!newBoardValues) {
        return;
      }
      setBoard(newBoardValues.arr);
      setNonMinesCount(newBoardValues.newNonMinesCount);
      if (newBoardValues.newNonMinesCount===0) {
        setGameOver(true);
        setResult("Masterful Win!");
        setBtn("Play again");
        // alert("Congrats! You've successfully outsmarted the mines!");
      }
    }
  };

  const flagCell = (x, y) => {
    let newBoardValues = JSON.parse(JSON.stringify(board));
    newBoardValues[x][y].flagged = !newBoardValues[x][y].flagged;
    setBoard(newBoardValues);
  };

  return (
    <div
      style={{ boxShadow: "0px 0px 12px rgba(0,0,0,0.5)", position: "relative" }}
    >
    {gameOver && <Modal reset={setRestart} completeTime={newTime} result={result} btn={btn}/>}
      <TopBar gameOver={gameOver} setTime={setTime} newTime={newTime} bmb={props.bombs} timer={props.timer}/>
      {board.map((row, inde) => {
        return (
          <div style={{ display: "flex" }} key={inde}>
            {row.map((singleCell, index) => {
              return (
                <Cell
                  key={index}
                  data={singleCell}
                  updateBoard={updateBoard}
                  flagCell={flagCell}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}