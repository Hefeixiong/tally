import { Tabs } from "antd-mobile";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  flex: 1;
  background: white;
`;
type Props = {
  value: "-" | "+";
  onChange: (value: "-" | "+") => void;
};
const Tags: React.FC<Props> = (props) => {
  const categoryMap = [
    { key: "-", title: "支出" },
    { key: "+", title: "收入" },
  ];
  return (
    <Wrapper>
      <Tabs
        onChange={(key) => {
          props.onChange(key as "-" | "+");
        }}
      >
        {categoryMap.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default Tags;
