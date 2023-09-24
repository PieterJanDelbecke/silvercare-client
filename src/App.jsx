import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context.js";

import LandingPage from "./pages/landing.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import PageOne from "./pages/one.jsx";
import PageTwo from "./pages/two.jsx";

function App() {
  const [context, setContext] = useState({});

  return (
    <>
      <Context.Provider value={{ context, setContext }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/one" element={<PageOne />} />
            <Route path="/two" element={<PageTwo />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
