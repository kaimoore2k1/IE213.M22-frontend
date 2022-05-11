import { Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import AdminCreateUser from "./AdminCreateUser";
import {UserData, userColumns, userData} from './type'



function AdminUser() {
  const title = "User Management";
  const [dataSource, setDataSource] = useState(userData);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setDataSource(
      userData.filter((entry) => {
        const splitSearchValue = searchValue.split(" ");
        const [first, second] = splitSearchValue;
        return (
          entry.firstName.includes(first) ||
          entry.lastName.includes(second) ||
          entry.firstName.includes(second) ||
          entry.lastName.includes(first)
        );
      })
    );
  }, [searchValue]);
  const [visible, setVisible] = useState(false);
  const titleDrawer = "UPDATE USER"
  const onClose = () => {
    setVisible(false);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>)
  const showDrawer = (record: UserData) => {
    setVisible(true);
    setContentDrawer(<AdminCreateUser visibleProp={setVisible} dataProp={record}/>)
  };
  return (
    <>
      <AdminContentHeader title={title} setSearchValue={setSearchValue} current={1}/>
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
        columns={userColumns}
        dataSource={dataSource}
        scroll={{ y: 265 }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: event => {
              showDrawer(record)
            }
          };
        }}
      />
    </>
  );
}

export default AdminUser;
