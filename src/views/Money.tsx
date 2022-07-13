import React, { useState } from "react";
import Layout from "components/Layout";
import NumberPad from "./money/NumberPad";
import NoteSection from "./money/NoteSection";
import Tags from "./money/TagSection";

type Category = "-" | "+";

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as Category,
    amount: 0,
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({ ...selected, ...obj });
  };
  return (
    <Layout className="money">
      <Tags
        value={selected.category}
        onChange={(category) => onChange({ category })}
      />
      <NoteSection
        value={""}
        onChange={function (value: string): void {
          console.log("hi");
        }}
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
