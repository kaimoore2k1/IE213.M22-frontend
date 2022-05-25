import { useQuery } from "@apollo/client";
import { Input, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAllContact } from "../../graphql/schema/contact.graphql";
import { contactColumn } from "./type";

const { Title } = Typography;
const { Search } = Input;

// interface BookingData {
//   name: string;
//   number: String;
//   pet: String;
//   service: String;
//   time: String;
//   dateTime: String;
//   content: String;
// }

const AdminContact = () => {
  const contactData = useQuery(getAllContact);
  console.log("bookingData", contactData);
  const onSearch = (value: any) => {
    setSearchValue(value);
  };
  const [searchValue, setSearchValue] = useState("");
  const initialContact: any[] | (() => any[]) = [];
  const [dataSource, setDataSource] = useState(initialContact);

  useEffect(() => {
    if (contactData.data) {
      let i = 0;
      const newData = contactData.data.getAllContact.map((data: any) => {
        return { ...data, ...{ id: ++i } };
      });
      setDataSource(
        newData.filter((entry: { name: string | string[] }) => {
          return entry.name.includes(searchValue);
        })
      );
    }
  }, [contactData.data, searchValue]);
  return (
    <>
      <Title level={2}>Contact Management</Title>
      <Search
        placeholder="Search Name"
        onSearch={onSearch}
        enterButton
        allowClear
        style={{ width: "40%", float: "right", margin: "2%" }}
      />
      <Table
        size="small"
        loading={contactData.loading}
        columns={contactColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
      />
    </>
  );
};

export default AdminContact;
