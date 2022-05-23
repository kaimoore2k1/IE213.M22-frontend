import { useQuery } from "@apollo/client";
import { Input, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAllBooking } from "../../graphql/schema/booking.graphql";
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

const productColumn = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Number",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "Pet",
    dataIndex: "pet",
    key: "pet",
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "DateTime",
    dataIndex: "dateTime",
    key: "dateTime",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
];

const AdminBooking = () => {
  const bookingData = useQuery(getAllBooking);
  console.log("bookingData", bookingData);
  const onSearch = (value: any) => {
    setSearchValue(value);
  };
  const [searchValue, setSearchValue] = useState("");
  const initialBooking: any[] | (() => any[]) = [];
  const [dataSource, setDataSource] = useState(initialBooking);

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
        columns={productColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
      />
    </>
  );
};

export default AdminBooking;
