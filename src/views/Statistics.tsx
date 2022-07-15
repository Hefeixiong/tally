import React from "react";
import { Toast } from "antd-mobile";
import Layout from "components/Layout";
import { useTags } from "hooks/useTags";
import { CardSection } from "./statistic/card";

function Statistics() {
  const { tags } = useTags();
  const onClick = () => {
    Toast.show("点击了卡片");
  };
  return (
    <Layout className="统计">
      <CardSection />
    </Layout>
  );
}

export default Statistics;
