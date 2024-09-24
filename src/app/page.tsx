"use client";
import React, { useState } from "react";
import Square from "../tictactoe/Square";

export default function Home() {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(undefined));
  const [history, setHistory] = useState([Array(9).fill(undefined)]);
  const currentSquares = history[history.length - 1];

  const buttonClick = (order: number) => {
    if (calculateWinner(squares) || squares[order]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[order] = "X";
    } else {
      nextSquares[order] = "O";
    }
    setIsXNext(!isXNext);
    setSquares(nextSquares);
    setHistory([...history, nextSquares]);
  };

  const calculateWinner = (nextSquares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        nextSquares[a] &&
        nextSquares[a] === nextSquares[b] &&
        nextSquares[a] === nextSquares[c]
      ) {
        return nextSquares[a];
      }
    }
    return null;
  };

  const jumpTo = (idx: number) => {
    setIsXNext(idx % 2 == 0);
    setSquares(history[idx]);
    setHistory(history.slice(0, idx + 1));
  };

  const winner = calculateWinner(squares);

  return (
    <main>
      {winner && <div>Winner: {winner}</div>}
      <div>
        <div className={"board-row"}>
          <Square onSquareClick={() => buttonClick(0)} value={squares[0]} />
          <Square onSquareClick={() => buttonClick(1)} value={squares[1]} />
          <Square onSquareClick={() => buttonClick(2)} value={squares[2]} />
        </div>

        <div className={"board-row"}>
          <Square onSquareClick={() => buttonClick(3)} value={squares[3]} />
          <Square onSquareClick={() => buttonClick(4)} value={squares[4]} />
          <Square onSquareClick={() => buttonClick(5)} value={squares[5]} />
        </div>
        <div className={"board-row"}>
          <Square onSquareClick={() => buttonClick(6)} value={squares[6]} />
          <Square onSquareClick={() => buttonClick(7)} value={squares[7]} />
          <Square onSquareClick={() => buttonClick(8)} value={squares[8]} />
        </div>
      </div>
      <ul>
        {history.map((his, idx) => (
          <li key={`${his} _ ${idx}`}>
            <button onClick={() => jumpTo(idx)}>{idx + 1}번 history</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
