"use client";
import React, { MouseEventHandler, useState } from "react";
import Square from "../tictactoe/Square";

export default function Home() {
	const [squares, setSquares] = useState(Array(9).fill(undefined));

	const buttonClick = (order: number) => {
		const nextSquares = squares.slice();
		nextSquares[order] = 'X';
		setSquares(nextSquares);
	};

	return (
		<main>
			<div>
				<div className={"board-row"}>
					<Square onSquareClick={() => buttonClick} value={squares[0]} order={1}></Square>
					<Square onSquareClick={() => buttonClick} value={squares[1]} order={2}></Square>
					<Square onSquareClick={() => buttonClick} value={squares[2]} order={3}></Square>
				</div>

				<div className={"board-row"}>
					<Square onSquareClick={() => buttonClick} value={squares[3]} order={4}></Square>
					<Square onSquareClick={() => buttonClick} value={squares[4]} order={5}></Square>
					<Square onSquareClick={() => buttonClick} value={squares[5]} order={6}></Square>
				</div>
				<div className={"board-row"}>
					<Square onSquareClick={() => buttonClick} value={squares[6]} order={7}></Square>
					<Square onSquareClick={() => buttonClick} value={squares[7]} order={8}></Square>
					<Square onSquareClick={() => buttonClick} value={squares[8]} order={9}></Square>
				</div>
			</div>
		</main>
	);
}
