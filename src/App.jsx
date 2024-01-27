import { useState } from "react";

function App() {
	const [position, setPosition] = useState({ x: 10, y: 0 });

	const handleUpdate = () => {
		setPosition({
			...position,
			y: position.y + 5,
		});
		setPosition((prev) => ({ ...prev, y: prev.y + 5 }));
	};
	return (
		<>
			<div className="text-center mt-44">
				{/* <HomePage /> */}
				<p>{position?.x}</p>
				<p>{position?.y}</p>
				<button
					onClick={handleUpdate}
					className="text-red-500 bg-slate-50 px-4 py-2 hover:text-slate-50 hover:bg-red-500"
				>
					Increase
				</button>
			</div>
		</>
	);
}

export default App;
