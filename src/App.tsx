import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologyGrid from "./components/TechnologyGrid";
import { Bounce, ToastContainer } from "react-toastify";


const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<TechnologyGrid />
			<Footer />

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
		</>
	);
};

export default App;
