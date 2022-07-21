import React from "react";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { CardSection } from "./statistic/CardSection";
import { Card } from "components/Card";
import { useRecords } from "hooks/useRecords";

function Statistics() {
  const { tags } = useTags();
  const { records } = useRecords();
  return (
    <Layout className="统计">
      {/* <CardSection /> */}
      <Card category="-" recordsList={records} tags={tags}></Card>
      <Card category="+" recordsList={records} tags={tags}></Card>
    </Layout>
  );
}

export default Statistics;
