import { ReusableModal } from "../../../../SharedFolder/ReusableModal";

export const DeeleteAllTask = ({ onClose, onDeleteAllClick }) => {
	return (
		<ReusableModal>
			<>
				<p className="text-2xl text-center mb-20">Are you sure, you want to delete all tasks?</p>
				<div className="flex justify-center gap-5">
					<button
						onClick={() => onClose(false)}
						className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
					>
						Cancel
					</button>
					<button
						onClick={onDeleteAllClick}
						className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
					>
						Delete
					</button>
				</div>
			</>
		</ReusableModal>
	);
};
