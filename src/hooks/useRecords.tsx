import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

export type RecordItem = {
  tagIds: number[];
  note: string;
  amount: number;
  category: "+" | "-";
  createdAt: string;
};

type newRecordItem = Omit<RecordItem, "createdAt">;

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      Toast.show("请输入金额");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      Toast.show("请选择标签");
      return false;
    }
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
    Toast.show("添加成功");
    return true;
  };
  return { records, addRecord };
};
