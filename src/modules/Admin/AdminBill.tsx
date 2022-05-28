import { Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import { useQuery } from "@apollo/client";
import {billColumn} from './type';
import AdminViewBill from "./AdminViewBill";
import { GETALLBILLS } from "../../graphql/mutations/bill.graphql";

function AdminBill() {
  const title = "Bill Management";
  const bill = useQuery(GETALLBILLS);
  const [searchValue, setSearchValue] = useState("");
  const initialBill: any[] | (() => any[]) = []
  const [dataSource, setDataSource] = useState(initialBill);
  const titleDrawer = "BOOKED PRODUCT LIST";

  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
    setContentDrawer(<></>)
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: any) => {
    setVisible(true);
    setContentDrawer(
      <AdminViewBill visibleProp={setVisible} dataProp={record} id={record._id}/>
    );
  };
  useEffect(() => {
    if(bill.data) {
      let i = 0;
      const newData = bill.data.getAllBills.map((data: any) => {
        return { ...data, ...{ id: ++i }};
      });
      setDataSource(
        newData.filter(
          (entry: { firstName: string | string[]; lastName: string | string[]; }) => {
            const splitSearchValue = searchValue.split(" ");
            let [first, second]:string[] = splitSearchValue;
            return (
              entry.firstName.includes(first) ||
              entry.lastName.includes(second) ||
              entry.firstName.includes(second) ||
              entry.lastName.includes(first)
            )
          }
        )
      );
    }
  }, [bill.data, searchValue]);
  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={0}
      />
      <Drawer
        title={titleDrawer}
        placement="right"
        onClose={onClose}
        visible={visible}
        size="large"
      >
        {contentDrawer}
      </Drawer>
      <Table
        size="small"
        loading={bill.loading}
        columns={billColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              showDrawer(record);
            },
          };
        }}
      />
    </>
  );
}

export default AdminBill;
