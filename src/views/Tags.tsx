import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { useTags } from "../hooks/useTags";
import CategorySection from "./money/CategorySection";

const TagList = styled.ol`
  font-size: 16px;
  margin: 8px 16px;
  border-radius: 8px;
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
  background: #1677ff;
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
  const [category, setCategory] = useState<"-" | "+">("-");
  const { tags, addTag } = useTags();
  return (
    <Layout className="标签">
      <div>
        <CategorySection
          value={category}
          onChange={(value) => {
            setCategory(value);
          }}
        />
        <TagList>
          {tags
            .filter((t) => t.category === category)
            .map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
        </TagList>
        <Center>
          <Space />
          <Space />
          <Space />
          <Button
            onClick={() => {
              addTag(category);
            }}
          >
            新增标签
          </Button>
        </Center>
      </div>
    </Layout>
  );
}

export default Tags;
