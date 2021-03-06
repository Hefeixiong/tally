import React from "react";
import { Route, Routes, MemoryRouter as Router } from "react-router-dom";
import "./styles/layout.scss";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import Me from "./views/Me";

function App() {
  return (
    <Router initialEntries={["/tag"]}>
      <Routes>
        <Route path="/tag" element={<Tags />} />
        <Route path="/money" element={<Money />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </Router>
  );
}

export default App;
