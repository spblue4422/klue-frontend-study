import React from "react";

interface SquareProps {
	value: number;
}

const Square: React.FC<SquareProps> = ({ value }) => {
	return <button style={{ width: "100px", height: "100px" }}>{value}</button>;
};

export default Square;
