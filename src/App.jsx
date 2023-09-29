import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context.js";

import LandingPage from "./pages/landing.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import SignInPage from "./pages/sign-in.jsx";
import MainPage from "./pages/main.jsx";
import ResidentAddPage from "./pages/resident/resident-add.jsx";
import ResidentFormPage from "./pages/resident/resident-form.jsx";

function App() {
	const [context, setContext] = useState({});

	return (
		<>
			<Context.Provider value={{ context, setContext }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/signin" element={<SignInPage />} />
						<Route path="/main" element={<MainPage />} />
						<Route path="/resident/add" element={<ResidentAddPage />} />
						<Route path="/resident/form" element={<ResidentFormPage />} />
					</Routes>
				</BrowserRouter>
			</Context.Provider>
		</>
	);
}

export default App;
