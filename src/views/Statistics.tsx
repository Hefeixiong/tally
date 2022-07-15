import React from "react";
import { Toast } from "antd-mobile";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { CardSection } from "./statistic/CardSection";
import { Card } from "components/Card";

function Statistics() {
  const { tags } = useTags();
  const onClick = () => {
    Toast.show("点击了卡片");
  };
  return (
    <Layout className="统计">
      <CardSection />
      <Card></Card>
    </Layout>
  );
}

export default Statistics;
