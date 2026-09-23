import Square from "../Square/Square";

const Board = ({ grid, onSquareClick }) => {
  return (
    <>
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="board-row">
          {row.map((cell, colIndex) => (
            <Square
              key={`cell-${rowIndex}-${colIndex}`}
              value={cell}
              // onSquareClick={() => onSquareClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
