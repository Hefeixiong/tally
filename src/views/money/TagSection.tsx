import { Tabs, Tag } from "antd-mobile";
import Item from "antd-mobile/es/components/dropdown/item";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
  background: white;
`;

function Tags() {
  const category = [
    { key: "-", title: "支出" },
    { key: "+", title: "收入" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const onClick = () => {
    console.log("Hi");
  };
  return (
    <Wrapper>
      <Tabs
        activeKey={category[activeIndex].key}
        onChange={(key) => {
          const index = category.findIndex((item) => item.key === key);
          setActiveIndex(index);
        }}
      >
        {category.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
    </Wrapper>
  );
}

export default Tags;
