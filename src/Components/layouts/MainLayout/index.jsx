import { Footer, Navbar } from "../../SharedFolder";

export const MainLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};
