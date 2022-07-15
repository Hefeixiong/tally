import React, { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

  //组件挂载时存入tags数据
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    console.log(localTags);
    if (localTags.length === 0) {
      localTags = [
        { id: 1, name: "衣" },
        { id: 2, name: "食" },
        { id: 3, name: "住" },
        { id: 4, name: "行" },
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
      setTags([...tags, { id: 4, name: addTag }]);
    }
  };
  return { tags, setTags, addTag };
};

export { useTags };
