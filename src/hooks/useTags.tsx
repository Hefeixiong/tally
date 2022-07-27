import { createId } from "lib/createId";
import React, { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<
    { id: number; name: string; category: "-" | "+" }[]
  >([]);

  //组件挂载时存入tags数据
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "衣", category: "-" },
        { id: createId(), name: "食", category: "-" },
        { id: createId(), name: "住", category: "-" },
        { id: createId(), name: "行", category: "-" },
      ];
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  //新增标签
  const addTag = (category: "-" | "+") => {
    const addTag = window.prompt("新增标签");
    if (addTag !== null && addTag !== "") {
      setTags([...tags, { id: createId(), name: addTag, category }]);
    }
  };

  const getName = (id: number) => {
    const tag = tags.filter((t) => t.id === id)[0];
    return tag ? tag.name : "";
  };
  return { tags, setTags, addTag, getName };
};

export { useTags };
