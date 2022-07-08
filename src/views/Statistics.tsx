import React from "react";
import { Card, Toast } from 'antd-mobile'


function Statistics() {
  const onClick = () => {
    Toast.show('点击了卡片')
  }
  return (
    <>
      <Card title='本月收支'  onClick={onClick}>
        内容 内容内容内容内容内容内容内容内容内容内容内容内容内容
      </Card>
    </>
     );
}

export default Statistics;