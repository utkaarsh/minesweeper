import React, { useState, useEffect } from "react";
import createBoard from "../util/createboard";
import Cell from "./Cell";
import { revealed } from "../util/reveal";
import TopBar from "./TopBar";
import Modal from "./Modal";
export default function Board(props) {
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
      // setNonMinesCount(100 - 20);
      setNonMinesCount(props.x * props.y - props.bombs);
      setTime(0);
      setBoard(getBoard.board);
      setMineLocations(getBoard.mineLocation);
      setGameOver(false);
      setRestart(false);
    };
    generateBoard();
  }, [restart, setRestart]);

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
      //Losing state
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
      //Winning state
      if (newBoardValues.newNonMinesCount === 0) {
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

      {gameOver && <Modal reset={setRestart} completeTime={newTime} result={result} btn={btn} />}
      <TopBar gameOver={gameOver} setTime={setTime} newTime={newTime} bmb={props.bombs} />
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