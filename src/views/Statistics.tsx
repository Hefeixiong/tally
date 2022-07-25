import React from "react";
import Layout from "components/Layout";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 18px;
  background: white;
  margin: 8px 16px;
  border-radius: 8px;
`;
function Statistics() {
  return (
    <Layout className="统计">
      <Wrapper>
        <Link to={"months"}>月统计</Link>
        <Outlet />
      </Wrapper>
    </Layout>
  );
}

export default Statistics;
