import React, { useState } from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import { Tabs, Tag } from "antd-mobile";
import NumberPad from "./money/NumberPad";
import NoteSection from "./money/NoteSection";

const TagSection = styled.section`
  flex: 1;
  background: white;
`;

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };
  const onClick = () => {
    console.log("Hi");
  };
  return (
    <Layout className="money">
      <TagSection>
        <Tabs>
          <Tabs.Tab title="收入" key="fruits">
            <Tag round color="#2db7f5" onClick={onClick}>
              衣服
            </Tag>
          </Tabs.Tab>
          <Tabs.Tab title="支出" key="vegetables">
            西红柿
          </Tabs.Tab>
        </Tabs>
      </TagSection>
      <NoteSection
        value={""}
        onChange={function (value: string): void {
          console.log("hi");
        }}
      />
      <NumberPad
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={() => {}}
      />
    </Layout>
  );
}

export default Money;
