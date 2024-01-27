export const ReusableModal = ({ children }) => {
	return (
		<div className="bg-black bg-opacity-70 h-full w-full z-20 fixed top-0 left-0 flex items-center justify-center">
			<div className="max-h-[calc(100vh-90px)] overflow-y-auto mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 ">
				{children}
			</div>
		</div>
	);
};
