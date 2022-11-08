import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 16px;
  height: 64px;
  background: white;
  display: flex;
  margin: 8px 16px;
  padding: 0 12px;
  border-radius: 8px;
  align-items: center;
`;

function Statistics() {
  return (
    <Layout className="统计">
      <Link to="months">
        <Wrapper>月统计</Wrapper>
      </Link>
      <Link to="daily">
        <Wrapper>日统计</Wrapper>
      </Link>
    </Layout>
  );
}

export default Statistics;
