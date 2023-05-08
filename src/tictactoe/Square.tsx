import React from "react";
import "../app/style.css";

interface SquareProps {
	value: number;
}

const Square: React.FC<SquareProps> = ({ value }) => {
	return <button className={"square"}>{value}</button>;
};

export default Square;
