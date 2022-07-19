import React, { useState } from "react";
import Layout from "components/Layout";
import NumberPad from "./money/NumberPad";
import NoteSection from "./money/NoteSection";
import CategorySection from "./money/CategorySection";
import { TagsSection } from "./money/TagsSection";
import { useRecords } from "hooks/useRecords";

type Category = "-" | "+";

const defaultItem = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};
function Money() {
  const [selected, setSelected] = useState(defaultItem);
  const { records, addRecord } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };

  const submit = () => {
    if (addRecord(selected)) {
      setSelected(defaultItem);
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
        onOk={submit}
      />
    </Layout>
  );
}

export default Money;
