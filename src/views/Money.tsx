import React, { useState } from "react";
import Layout from "components/Layout";
import NumberPad from "./money/NumberPad";
import NoteSection from "./money/NoteSection";
import CategorySection from "./money/CategorySection";
import { TagsSection } from "./money/TagsSection";

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
        onOk={() => {}}
      />
    </Layout>
  );
}

export default Money;
