import { useMutation, useQuery } from "@apollo/client";
import { Input, Table, Typography, Modal, message } from "antd";
import { useEffect, useState } from "react";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { getAllContact } from "../../graphql/schema/contact.graphql";
import { contactColumn } from "./type";
import { deleteContactById } from "../../graphql/mutations/contact.graphql";

const { Title } = Typography;
const { Search } = Input;
const { confirm } = Modal;

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
  const [deleteContact, dataDeleteContact] = useMutation(deleteContactById)
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
  const showDeleteConfirm = (record: any) => {
    confirm({
      title: 'Are you sure delete this field?',
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted, this field can't be recovered !",
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteContact({
          variables: { id: record._id },
          onCompleted: () => {
            message.success("Successfully!");
          },
          onError: () => {
            message.error("Error!");
          },
          refetchQueries: [getAllContact],
        });
      }
    });
  };
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
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: event => {showDeleteConfirm(record)}
          };
        }}
      />
    </>
  );
};

export default AdminContact;
