/* eslint-disable no-case-declarations */
import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const initialState = {
		tasks: [
			{
				id: crypto.randomUUID(),
				title: "Learn React Native",
				description:
					"I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
				tags: ["web", "react", "js"],
				priority: "High",
				isFavorite: true,
			},
			{
				id: crypto.randomUUID(),
				title: "Remove All Tasks",
				description: "In publishing and graphic design, Lorem ipsum is a placeholder .",
				tags: ["web", "useReducer", "js"],
				priority: "High",
				isFavorite: false,
			},
			{
				id: crypto.randomUUID(),
				title: "Add More Tasks",
				description: "In publishing and graphic design, Lorem ipsum is a placeholder .",
				tags: ["web", "tailwind css", "js"],
				priority: "High",
				isFavorite: false,
			},
		],
		showAddModal: false,
		confirmationModal: false,
		taskToUpdate: null,
		message: "",
	};

	const taskReducer = (state, action) => {
		switch (action.type) {
			case "ADD_EDIT_TASK":
				return {
					...state,
					tasks: action.isAdd
						? [...state.tasks, action.newTask]
						: state.tasks.map((task) => (task.id === action.newTask.id ? action.newTask : task)),
					showAddModal: false,
					taskToUpdate: null,
					message: "Congratulation! Task added successfully.",
				};
			case "EDIT_TASK":
				return {
					...state,
					taskToUpdate: action.task,
					showAddModal: true,
					message: "Congratulation! Task updated successfully.",
				};

			case "DELETE_TASK":
				return {
					...state,
					tasks: state.tasks.filter((task) => task.id !== action.taskId),
					confirmationModal: false,
				};
			case "DELETE_ALL_TASKS":
				return {
					...state,
					tasks: [],
					showAddModal: false,
				};
			case "TOGGLE_FAVORITE":
				return {
					...state,
					tasks: state.tasks.map((task) =>
						task.id === action.taskId ? { ...task, isFavorite: !task.isFavorite } : task
					),
				};
			case "SEARCH_TASK":
				const filteredTasks = state.tasks.filter((task) =>
					task.title.toLowerCase().includes(action.searchTerm.toLowerCase())
				);
				return {
					...state,
					tasks: filteredTasks,
				};
			case "CLOSE_MODAL":
				return {
					...state,
					showAddModal: false,
					taskToUpdate: null,
				};
			case "OPEN_CONFIRMATION_MODAL":
				return {
					...state,
					confirmationModal: true,
				};
			case "CLOSE_CONFIRMATION_MODAL":
				return {
					...state,
					confirmationModal: false,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(taskReducer, initialState);

	return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error("useTaskContext must be used within a TaskProvider");
	}
	return context;
};
