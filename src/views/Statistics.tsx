import React from "react";
import { Toast } from "antd-mobile";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { CardSection } from "./statistic/CardSection";
import { Card } from "components/Card";
import { useRecords } from "hooks/useRecords";

function Statistics() {
  const { tags } = useTags();
  const { records } = useRecords();

  const acount = [];
  const tagsId = [];
  for (let i = 0; i < records.length; i++) {
    acount.push(Object.values(records[i])[3]);
    tagsId.push(Object.values(records[i])[0]);
  }
  const onClick = () => {
    Toast.show("点击了卡片");
  };
  return (
    <Layout className="统计">
      <CardSection />
      <Card title="支出情况" content={tags} category={"-"}></Card>
      <Card title="收入情况" content={tags} category={"+"}></Card>
    </Layout>
  );
}

export default Statistics;
