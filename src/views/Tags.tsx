import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import { useTags } from "../hooks/useTags";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: white;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;

function Tags() {
  const { tags, setTags } = useTags();
  return (
    <Layout className="标签">
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;
