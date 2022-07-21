import { RecordItem } from "hooks/useRecords";
import React from "react";
import styled from "styled-components";
import day from "dayjs";

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
  let sum = 0;
  //过滤为“-”的数据
  const monthsRecords = props.recordsList
    .filter((t) => t.category === props.category)
    .filter(
      //过滤本月数据
      (t) =>
        day(t.createdAt).format("YYYY年MM月") ===
        day(new Date()).format("YYYY年MM月")
    );
  //计算当月的总金额
  monthsRecords.map((r) => (sum += r.amount));
  console.log(monthsRecords);

  const getName = (id: number) => {
    const tag = props.tags.filter((t) => t.id === id)[0];
    return tag ? tag.name : "";
  };

  return (
    <Wrapper>
      <div className="title">
        <div>{props.category === "-" ? "支出情况" : "收入情况"}</div>
        <div>{"¥" + sum}</div>
      </div>
      <ol className="content">
        {monthsRecords.length < 1 ? (
          <div>
            <li>没有内容</li>
          </div>
        ) : (
          monthsRecords.map((item) => {
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
          })
        )}
      </ol>
    </Wrapper>
  );
};

export { Card };
