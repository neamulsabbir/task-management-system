import { useState } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTaskContext } from "../../../../Provider/TaskProvider";
import { DeeleteAllTask, SearchTask, TaskAction, TaskLists } from "./Tasks";
import { AddEditTaskModal } from "./Tasks/AddEditTaskModal";

export const TasksBoard = () => {
	const { state, dispatch } = useTaskContext();
	const [openDeleteAllModal, setOpenDeleteAllModal] = useState(false);

	const { message, tasks, showAddModal, taskToUpdate, confirmationModal } = state;

	const handleAddEditTask = (newTask, isAdd) => {
		if (!newTask.title || !newTask.description || !newTask.tags || !newTask.priority) {
			toast.warn("Please fill in all required fields.", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			return;
		}

		dispatch({ type: "ADD_EDIT_TASK", newTask, isAdd });
		toast.success(`${message}`, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});
	};

	const handleEditTask = (task) => {
		if (task.title === "" || task.description === "" || task.tags === "" || !task.priority) {
			toast.warn("Please fill in all required fields.", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			return;
		}
		dispatch({ type: "EDIT_TASK", task });
	};

	const handleDeleteTask = (taskId) => {
		dispatch({ type: "DELETE_TASK", taskId });

		toast.success(`Task delete successfully.`, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});
	};

	const handleDeleteAllClick = () => {
		dispatch({ type: "DELETE_ALL_TASKS" });
		toast.success(`Task delete successfully.`, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Bounce,
		});
		setOpenDeleteAllModal(false);
	};

	const handleFavorite = (taskId) => {
		dispatch({ type: "TOGGLE_FAVORITE", taskId });
	};

	const handleSearch = (searchTerm) => {
		dispatch({ type: "SEARCH_TASK", searchTerm });
	};

	const handleCloseClick = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};
	const handleOpenConfirmationModal = () => {
		dispatch({ type: "OPEN_CONFIRMATION_MODAL" });
	};
	const handleCloseConfirmationModal = () => {
		dispatch({ type: "CLOSE_CONFIRMATION_MODAL" });
	};

	return (
		<section className="mb-20" id="tasks">
			<div className="container">
				<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
					<div className="mb-14 items-center justify-between sm:flex">
						<h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
						<div className="flex items-center space-x-5">
							<SearchTask onSearch={handleSearch} />
							<TaskAction
								onOpen={setOpenDeleteAllModal}
								onAddClick={() => dispatch({ type: "EDIT_TASK", task: null })}
								tasks={tasks}
							/>
						</div>
					</div>
					{tasks.length > 0 ? (
						<TaskLists
							onClose={handleCloseConfirmationModal}
							onOpen={handleOpenConfirmationModal}
							confirmationModal={confirmationModal}
							showAddModal={showAddModal}
							tasks={tasks}
							onEdit={handleEditTask}
							onDelete={handleDeleteTask}
							onFav={handleFavorite}
						/>
					) : (
						<p className="text-center py-20 text-xl">Task List is empty!.</p>
					)}
				</div>
			</div>
			{showAddModal && (
				<AddEditTaskModal
					onSave={handleAddEditTask}
					onCloseClick={handleCloseClick}
					taskToUpdate={taskToUpdate}
				/>
			)}
			{openDeleteAllModal && (
				<DeeleteAllTask onDeleteAllClick={handleDeleteAllClick} onClose={setOpenDeleteAllModal} />
			)}
		</section>
	);
};
