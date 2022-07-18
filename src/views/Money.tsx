import React, { useState } from "react";
import Layout from "components/Layout";
import NumberPad from "./money/NumberPad";
import NoteSection from "./money/NoteSection";
import CategorySection from "./money/CategorySection";
import { TagsSection } from "./money/TagsSection";
import { Toast } from "antd-mobile";

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };

  const onOk = () => {
    if (
      selected.tagIds === [] ||
      selected.note === "" ||
      selected.amount === 0
    ) {
      console.log("123");
      Toast.show("请输入完整的信息");
    } else {
      window.localStorage.setItem("records", JSON.stringify(selected));
      Toast.show("已添加");
      console.log("456");
    }
  };
  return (
    <Layout className="记账">
      <CategorySection
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <TagsSection
        value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => onChange({ note })}
      />
      <NumberPad
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={onOk}
      />
    </Layout>
  );
}

export default Money;
