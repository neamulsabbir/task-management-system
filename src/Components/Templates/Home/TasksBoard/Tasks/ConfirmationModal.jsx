import { ReusableModal } from "../../../../SharedFolder/ReusableModal";

export const ConfirmationModal = ({ onClose, onDelete, selectedId }) => {
	return (
		<>
			<ReusableModal>
				<>
					<p className="text-2xl text-center mb-20">Are you sure, you want to delete this task?</p>
					<div className="flex justify-center gap-5">
						<button
							onClick={onClose}
							className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
						>
							Cancel
						</button>
						<button
							onClick={() => onDelete(selectedId)}
							className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
						>
							Delete
						</button>
					</div>
				</>
			</ReusableModal>
		</>
	);
};
