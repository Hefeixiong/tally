import { RecordItem } from "hooks/useRecords";
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
    > div > li {
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
  category: "-" | "+";
  tags: { id: number; name: string }[];
  recordsList: RecordItem[];
};
const Card: React.FC<Props> = (props) => {
  let title = "";
  let sum = 0;
  props.recordsList
    .filter((r) => r.category === props.category)
    .map((t) => {
      sum += t.amount;
    });
  const getName = (id: number) => {
    const tag = props.tags.filter((t) => t.id === id)[0];
    return tag ? tag.name : "";
  };
  const getTitle = () => {
    return props.category === "-" ? (title = "支出情况") : (title = "收入情况");
  };
  return (
    <Wrapper>
      <div className="title">
        <div>{getTitle()}</div>
        <div>{"¥" + sum}</div>
      </div>
      <ol className="content">
        {props.recordsList
          .filter((r) => r.category === props.category)
          .map((item) => {
            return (
              <div key={item.amount}>
                {item.tagIds.map((tagId) => (
                  <li key={tagId}>
                    <div>{getName(tagId)}</div>
                    <div>{item.amount}</div>
                  </li>
                ))}
              </div>
            );
          })}
      </ol>
    </Wrapper>
  );
};

export { Card };
