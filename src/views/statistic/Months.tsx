import { useRecords } from "hooks/useRecords";
import React, { useState } from "react";
import styled from "styled-components";
import day from "dayjs";
import CategorySection from "../money/CategorySection";
import { useTags } from "hooks/useTags";

const Div = styled.div`
  background: #efefef;
`;
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
    > div {
      > .empty {
        color: #999;
        display: flex;
        justify-content: center;
      }
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

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Months = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { getName } = useTags();
  const { records } = useRecords();
  let sum = 0;
  //过滤为“-”的数据
  const monthsRecords = records
    .filter((t) => t.category === category)
    .filter(
      //过滤本月数据
      (t) =>
        day(t.createdAt).format("YYYY年MM月") ===
        day(new Date()).format("YYYY年MM月")
    );
  //计算当月的总金额
  monthsRecords.map((r) => (sum += r.amount));
  return (
    <Div>
      <CategorySection
        value={category}
        onChange={(value) => setCategory(value)}
      />
      <Header>{day(new Date()).format("YYYY年MM月")}</Header>

      <Wrapper>
        <div className="title">
          <div>{category === "-" ? "支出情况" : "收入情况"}</div>
          <div>{"¥" + sum}</div>
        </div>
        <ol className="content">
          {monthsRecords.length < 1 ? (
            <div>
              <li className="empty">没有内容</li>
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
    </Div>
  );
};

export default Months;
