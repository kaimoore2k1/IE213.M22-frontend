import { Table } from "antd";
import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateCreate: string;
  productsBooked: [string];
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
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
  },
  {
    id: 4,
    firstName: "Phạm",
    lastName: "Chiến",
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
  },
  {
    id: 4,
    firstName: "Phạm",
    lastName: "Chiến",
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
  },
  {
    id: 4,
    firstName: "Phạm",
    lastName: "Chiến",
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
  },
  {
    id: 4,
    firstName: "Phạm",
    lastName: "Chiến",
    email: "senshopdottech@gmail.com",
    dateCreate: "05/05/2022",
    productsBooked: ["Chó Husky, Thức ăn cho chó"],
  },
  
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
          entry.firstName.includes(first) || entry.lastName.includes(second) ||entry.firstName.includes(second) || entry.lastName.includes(first)
        );
      })
    );
  }, [searchValue]);
  return (
    <>
      <AdminContentHeader title={title} setSearchValue={setSearchValue} />
      <Table size="small" columns={columns} dataSource={dataSource} scroll={{y: 265 }} />
    </>
  );
}

export default AdminUser;
