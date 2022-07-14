import React from "react";
import { Card, Toast } from "antd-mobile";
import Layout from "components/Layout";

function Statistics() {
  const onClick = () => {
    Toast.show("点击了卡片");
  };
  return (
    <Layout className="统计">
      <Card title="本月收支" onClick={onClick}>
        内容 内容内容内容内容内容内容内容内容内容内容内容内容内容
      </Card>
    </Layout>
  );
}

export default Statistics;
