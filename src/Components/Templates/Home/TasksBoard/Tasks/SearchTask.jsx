import { useState } from "react";
import { SearchIcon } from "../../../../SharedFolder/Icon/SearchIcon";

export const SearchTask = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = (e) => {
		const searchQuery = e.target.value;
		setSearchTerm(searchQuery);
		onSearch(searchTerm);
	};

	return (
		<div className="flex">
			<div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
				<input
					type="search"
					id="search-dropdown"
					className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
					placeholder="Search Task"
					required
					onChange={handleChange}
				/>
				<button type="submit" className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4">
					<SearchIcon />
					<span className="sr-only">Search</span>
				</button>
			</div>
		</div>
	);
};
