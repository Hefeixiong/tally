import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  background: white;
  margin: 8px 16px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid red;
  > .title {
    color: #1677ff;
  }
  > .content {
  }
`;

type Props = {
  title: string;
  content: string;
};
const Card: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <div className="title">{props.title}</div>
      <div className="content">{props.content}</div>
    </Wrapper>
  );
};

export { Card };
