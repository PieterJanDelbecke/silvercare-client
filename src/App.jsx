import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context.js";

import LandingPage from "./pages/landing.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import SignInPage from "./pages/sign-in.jsx";

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
					</Routes>
				</BrowserRouter>
			</Context.Provider>
		</>
	);
}

export default App;
