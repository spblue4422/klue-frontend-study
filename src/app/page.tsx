import Image from "next/image";
import styles from "./page.module.css";
import Square from "../tictactoe/Square";

export default function Home() {
	return (
		<main>
			<div>
				<div>
					<Square value={1}></Square>
					<Square value={2}></Square>
					<Square value={3}></Square>
				</div>

				<div>
					<Square value={4}></Square>
					<Square value={5}></Square>
					<Square value={6}></Square>
				</div>
				<div>
					<Square value={7}></Square>
					<Square value={8}></Square>
					<Square value={9}></Square>
				</div>
			</div>
		</main>
	);
}
