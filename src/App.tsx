import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/layout.scss";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import Me from "./views/Me";
import Months from "./views/statistic/Months";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="tag" element={<Tags />} />
        <Route index element={<Money />} />
        <Route path="statistics/*" element={<Statistics />}></Route>
        <Route path="me" element={<Me />} />
      </Route>
      <Route path="/statistics/months" element={<Months />} />
    </Routes>
  );
}

export default App;
