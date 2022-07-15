import { useTags } from "hooks/useTags";
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
  > .wrapper {
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    > .title {
      line-height: 32px;
      padding: 12px 16px 12px 0;
      border-bottom: 1px solid #d5d5d9;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
    }
    > ol {
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
  }
`;

const Card = () => {
  const { tags } = useTags();
  return (
    <Wrapper>
      <div className="pay wrapper">
        <div className="title">
          <div>支出情况</div>
          <div>¥1300</div>
        </div>
        <ol className="content">
          {tags.map((tag) => (
            <li key={tag}>
              <div>{tag}</div>
              <div>123.01</div>
            </li>
          ))}
        </ol>
      </div>
    </Wrapper>
  );
};

export { Card };
