import React, { useState } from "react";

const PseudoGame = () => {
  const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [message, setMessage] = useState("");

  const handleChange = (row, col, value) => {
    if (value >= 0 && value <= 9) {
      const newBoard = [...board];
      newBoard[row][col] = Number(value);
      setBoard(newBoard);
    }
  };

  const isValid = () => {
    // Helper to check if an array has duplicates (ignoring zeros)
    const hasDuplicates = (arr) => {
      const filtered = arr.filter((num) => num !== 0);
      return new Set(filtered).size !== filtered.length;
    };

    // Check rows
    for (let row of board) {
      if (hasDuplicates(row)) return false;
    }

    // Check columns
    for (let col = 0; col < 9; col++) {
      const column = board.map((row) => row[col]);
      if (hasDuplicates(column)) return false;
    }

    // Check 3x3 sub-grids
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      for (let boxCol = 0; boxCol < 3; boxCol++) {
        const box = [];
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            box.push(board[boxRow * 3 + row][boxCol * 3 + col]);
          }
        }
        if (hasDuplicates(box)) return false;
      }
    }

    return true;
  };

  const handleCheckSolution = () => {
    if (isValid()) {
      setMessage("🎉 Congratulations! The solution is valid.");
    } else {
      setMessage("❌ Invalid solution. Please try again.");
    }
  };

  return (
    <div className="sudoku">
      <h1>Sudoku Game</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="number"
                value={cell === 0 ? "" : cell}
                onChange={(e) =>
                  handleChange(rowIndex, colIndex, e.target.value)
                }
                className={cell !== 0 ? "prefilled" : ""}
                disabled={cell !== 0}
                min="1"
                max="9"
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleCheckSolution}>Check Solution</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default PseudoGame;
