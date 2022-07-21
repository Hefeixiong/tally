import { createId } from "lib/createId";
import React, { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  //组件挂载时存入tags数据
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

  //新增标签
  const addTag = () => {
    const addTag = window.prompt("新增标签");
    if (addTag !== null && addTag !== "") {
      setTags([...tags, { id: createId(), name: addTag }]);
    }
  };

  const getName = (id: number) => {
    const tag = tags.filter((t) => t.id === id)[0];
    return tag ? tag.name : "";
  };
  return { tags, setTags, addTag, getName };
};

export { useTags };
