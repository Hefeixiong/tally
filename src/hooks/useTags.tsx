import React, { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  return { tags, setTags };
};

export { useTags };
