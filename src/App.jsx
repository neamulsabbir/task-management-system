import { ToastContainer } from "react-toastify";
import { HomePage } from "./Components/Pages/Home";
import { MainLayout } from "./Components/layouts/MainLayout";

function App() {
	return (
		<>
			<ToastContainer />
			<MainLayout>
				<HomePage />
			</MainLayout>
		</>
	);
}

export default App;
