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
        <Route path="money" element={<Money />} />
        <Route path="statistics" caseSensitive element={<Statistics />}>
          <Route path="months" element={<Months />} />
        </Route>
        <Route path="me" element={<Me />} />
      </Route>
    </Routes>
  );
}

export default App;
