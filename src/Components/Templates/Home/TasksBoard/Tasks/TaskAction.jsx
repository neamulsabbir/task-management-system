export const TaskAction = ({ onAddClick, onOpen, tasks }) => {
	return (
		<>
			<button onClick={onAddClick} className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
				Add Task
			</button>
			{tasks.length > 0 && (
				<button
					onClick={() => onOpen(true)}
					className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
				>
					Delete All
				</button>
			)}
		</>
	);
};
