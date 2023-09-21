import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageOne from "./pages/page-one.jsx";
import PageTwo from "./pages/page-two.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
