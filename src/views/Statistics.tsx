import React from "react";
import Layout from "components/Layout";
import Months from "./statistic/Months";
import { Link, Route, Routes } from "react-router-dom";

function Statistics() {
  return (
    <Layout className="统计">
      {/* <Months></Months> */}
      <Link to="months">月统计</Link>
      <Routes>
        <Route path="months" element={<Months />} />
      </Routes>
    </Layout>
  );
}

export default Statistics;
