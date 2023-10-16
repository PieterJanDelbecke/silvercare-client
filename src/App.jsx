import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context.js";

import Dashboard from "./scenes/dashboard.jsx";

function App() {
	const [context, setContext] = useState({});

	return (
		<>
			<Context.Provider value={{ context, setContext }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Dashboard />} />
					</Routes>
				</BrowserRouter>
			</Context.Provider>
		</>
	);
}

export default App;
