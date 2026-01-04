import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./Components/Mainpage";
import Mealinfo from "./Components/Mealinfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/meal/:id" element={<Mealinfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

