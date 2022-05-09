import { Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import AdminCreateUser from "./AdminCreateUser";
import {UserData} from './type'

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: '7%'
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Date Create",
    dataIndex: "dateCreate",
    key: "dateCreate",
  },
  {
    title: "Carts",
    dataIndex: "productsBooked",
    key: "productsBooked",
  },
];
const data: UserData[] = [
  {
    id: 1,
    firstName: "Kai",
    lastName: "Moore",
    email: "haohao12012001@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  {
    id: 2,
    firstName: "Nguyễn",
    lastName: "Định",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  {
    id: 3,
    firstName: "Trần",
    lastName: "Đăng",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  {
    id: 4,
    firstName: "Phạm",
    lastName: "Chiến",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  }
];

function AdminUser() {
  const title = "User Management";
  const [dataSource, setDataSource] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setDataSource(
      data.filter((entry) => {
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
        columns={columns}
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
