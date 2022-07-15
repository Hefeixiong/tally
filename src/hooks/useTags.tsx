import React, { useEffect, useState } from "react";

const useTags = () => {
  const arr = ["yi", "b"];
  const [tags, setTags] = useState<string[]>(arr);

  useEffect(() => {}, []);

  //新增标签
  const addTag = () => {
    const addTag = window.prompt("新增标签");
    if (addTag !== null && addTag !== "") {
      setTags([...tags, addTag]);
    }
  };
  return { tags, setTags, addTag };
};

export { useTags };
