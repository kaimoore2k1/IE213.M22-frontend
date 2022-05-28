import { useMutation, useQuery } from "@apollo/client";
import { Input, Table, Typography, Modal, message } from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getAllBooking } from "../../graphql/schema/booking.graphql";
import { deleteBookingById } from "../../graphql/mutations/booking.graphql";
import { bookingColumn } from "./type";
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

const AdminBooking = () => {
  const bookingData = useQuery(getAllBooking);
  const onSearch = (value: any) => {
    setSearchValue(value);
  };
  const [searchValue, setSearchValue] = useState("");
  const initialBooking: any[] | (() => any[]) = [];
  const [dataSource, setDataSource] = useState(initialBooking);
  const [deleteBooking, dataDeleteBooking] = useMutation(deleteBookingById)
  useEffect(() => {
    if (bookingData.data) {
      let i = 0;
      const newData = bookingData.data.getAllBooking.map((data: any) => {
        return { ...data, ...{ id: ++i } };
      });
      setDataSource(
        newData.filter((entry: { name: string | string[] }) => {
          return entry.name.includes(searchValue);
        })
      );
    }
  }, [bookingData.data, searchValue]);
  const showDeleteConfirm = (record: any) => {
    confirm({
      title: 'Are you sure delete this field?',
      icon: <ExclamationCircleOutlined />,
      content: "Once deleted, this field can't be recovered !",
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteBooking({
          variables: { id: record._id },
          onCompleted: () => {
            message.success("Successfully!");
          },
          onError: () => {
            message.error("Error!");
          },
          refetchQueries: [getAllBooking],
        });
      }
    });
  };
  return (
    <>
      <Title level={2}>Booking Management</Title>
      <Search
        placeholder="Search Name"
        onSearch={onSearch}
        enterButton
        allowClear
        style={{ width: "40%", float: "right", margin: "2%" }}
      />
      <Table
        size="small"
        loading={bookingData.loading}
        columns={bookingColumn}
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

export default AdminBooking;
