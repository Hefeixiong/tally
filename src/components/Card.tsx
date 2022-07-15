import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 16px;
  background: white;
  display: flex;
  margin: 8px 16px;
  padding: 0 12px;
  border-radius: 8px;
  flex-direction: column;
  > .title {
    line-height: 32px;
    padding: 12px 16px 12px 0;
    border-bottom: 1px solid #d5d5d9;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  > .content {
    padding-bottom: 12px;
    > li {
      line-height: 32px;
      padding: 12px 16px 12px 0;
      border-bottom: 0.5px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
    }
  }
`;

type Props = {
  title: string;
  content: string[];
};

const Card: React.FC<Props> = (props) => {
  const title = props.title;
  return (
    <Wrapper>
      <div className="title">
        <div>{title}</div>
        <div>¥1300</div>
      </div>
      <ol className="content">
        {props.content.map((item) => (
          <li key={item}>
            <div>{item}</div>
            <div>123.01</div>
          </li>
        ))}
      </ol>
    </Wrapper>
  );
};

export { Card };
