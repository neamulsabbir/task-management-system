import { studentsResult } from "../../../../../../utils/constants/studentsResult";

export const ResultTableCell = ({ number }) => {
	const filteredStudents = studentsResult.filter(
		(students) => students?.classNumber.toLowerCase() === number.toLowerCase()
	);

	return (
		<>
			<tr className="bg-white/5">
				<td className="p-5 text-sm md:text-xl" colSpan="4">
					Class {number}
				</td>
			</tr>
			{filteredStudents.map(({ name, grade, percantage, id }, index) => (
				<tr key={id} className="border-b border-[#7ECEB529]">
					<td className="p-5 text-sm md:text-xl">{index + 1}</td>
					<td className="p-5 text-sm md:text-xl">
						<div className="flex space-x-3 items-center">
							<img
								className="w-8 h-8"
								src="./images/avatar.png"
								width="32"
								height="32"
								alt="John Smith"
							/>
							<span className="whitespace-nowrap">{name}</span>
						</div>
					</td>
					<td className="p-5 text-sm md:text-xl text-center">{grade}</td>
					<td className="p-5 text-sm md:text-xl text-center">{percantage}</td>
				</tr>
			))}
		</>
	);
};
