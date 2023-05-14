import React, { ButtonHTMLAttributes, EventHandler, MouseEventHandler, useState } from "react";
import "../app/style.css";

interface SquareProps {
	onSquareClick: () => void;
	value: number;
}

const Square: React.FC<SquareProps> = ({ onSquareClick, value }) => {
	return (
		<button className={"square"} onClick={onSquareClick}>
			{value}
		</button>
	);
};

export default Square;
