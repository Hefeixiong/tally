import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 18px;
  height: 32px;
  background: white;
`;
function Statistics() {
  return (
    <Layout className="统计">
      <Wrapper>
        <Link to={"/statistics/months"}>月统计</Link>
      </Wrapper>
    </Layout>
  );
}

export default Statistics;
