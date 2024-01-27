import { SearchIcon } from "../../../SharedFolder/Icon";
import { ResultTable } from "./ResultTable/ResultTable";

export const StudentsResult = () => {
	return (
		<section className="py-24 lg:pt-[120px] lg:pb-28">
			<div className="container">
				<div className="mb-16 flex flex-col items-center">
					<h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
						<span className="text-[#00CC8C]">Students</span> of the Year
					</h2>
					<form>
						<div className="flex">
							<div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-[63px]">
								<input
									type="search"
									id="search-dropdown"
									className="z-20 block w-full bg-white px-4 py-2.5 pr-10 focus:outline-none rounded-[63px] placeholder:text-neutral-400 text-neutral-800"
									placeholder="Search by Student "
									required
								/>
								<button
									type="submit"
									className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
								>
									<SearchIcon />
									<span className="sr-only">Search</span>
								</button>
							</div>
						</div>
					</form>
				</div>
				<ResultTable />
			</div>
		</section>
	);
};
