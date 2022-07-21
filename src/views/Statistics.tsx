import React from "react";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { Months } from "./statistic/Months";
import { useRecords } from "hooks/useRecords";

function Statistics() {
  const { tags } = useTags();
  const { records } = useRecords();
  return (
    <Layout className="统计">
      <Months recordsList={records} tags={tags}></Months>
    </Layout>
  );
}

export default Statistics;
