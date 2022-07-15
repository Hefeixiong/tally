import React from "react";
import styled from "styled-components";

const Card = styled.div`
  font-size: 16px;
  background: white;
  display: flex;
  margin: 8px 16px;
  padding: 0 12px;
  border-radius: 8px;
  flex-direction: column;
  > .title {
    padding: 12px 0;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #eee;
  }
  > .content {
    padding: 12px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const CardSection = () => {
  return (
    <Card>
      <div className="title">
        <div>本月收支</div>
      </div>
      <div className="content">
        <div>支出: ¥ 1222</div>
        <div>收入: ¥1300</div>
      </div>
    </Card>
  );
};

export { CardSection };
