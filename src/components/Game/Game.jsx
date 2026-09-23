import { useState } from "react";
import Board from "../Board/Board";
import "./Game.css";

const createEmptyBoard = () =>
  Array(8)
    .fill(false)
    .map(() => Array(8).fill(false));

const Game = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  return (
    // <div className="game">
    //   <div className="game-board">
    // <Board grid={currentBoard} onSquareClick={handleSquareClick} />
    <Board grid={board} />
    //   </div>
    //   <div className="game-info">
    //     <h2>{status}</h2>
    //     <ol>
    //       {history.map((_, move) => (
    //         <li key={move}>
    //           <button
    //             style={{ fontWeight: move === currentMove ? "bold" : "normal" }}
    //             onClick={() => jumpTo(move)}
    //           >
    //             {move === 0 ? "Go to game start" : `Go to move #${move}`}
    //           </button>
    //         </li>
    //       ))}
    //     </ol>
    //   </div>
    // </div>
  );
};

export default Game;
