import React from "react";
import { Table, Button } from "antd";
import { useState } from "react";
import { DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "../../sass/Pay/RightContent.scss";
import { ColumnsType } from "antd/es/table";
import { DataType, data } from "./data";

function RightContent() {
  const [dataType, setDataType] = useState(data);

  const [quantity, setQuantity] = useState(0);

  const handelSub: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log("hi");
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "SẢN PHẨM",
      dataIndex: "sanpham",
      key: "sanpham",
      align: "left",
      render: (value, record, index) => (
        <>
          <Button
            style={{ marginRight: "10px" }}
            icon={<DeleteOutlined />}
          ></Button>
          <img src={record.img} alt="Product" />
          {record.sanpham}
        </>
      ),
    },
    {
      title: "GIÁ",
      dataIndex: "gia",
      key: "gia",
      align: "center",
      render: (value, record, index) => (
        <>
          <span>{record.gia.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
        </>
      ),
    },
    {
      title: "SỐ LƯỢNG",
      dataIndex: "soluong",
      key: "soluong",
      align: "center",
      render: (value, record, index) => (
        <>
          <div className="button__frame">
            <button onClick={handelSub}>-</button>
            <span>{record.soluong}</span>
            <button onClick={handelSub}>+</button>
          </div>
        </>
      ),
    },
    {
      title: "TẠM TÍNH",
      dataIndex: "tamtinh",
      key: "tamtinh",
      align: "center",
      render: (value, record, index) => (
        <span>{(record.soluong * record.gia).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
      ),
    },
  ];
  return (
    <>
      <Table
        pagination={false}
        dataSource={data}
        columns={columns}
        summary={(pageData) => {
          let total = 0;
          pageData.forEach(({ gia, soluong, key }) => {
            total += gia * soluong;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2} colSpan={2}>
                  TỔNG: <span> {total.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      <div className="handleButton">
        <Button icon={<ArrowLeftOutlined />}>TIẾP TỤC XEM SẢN PHẨM</Button>
        <Button>THANH TOÁN</Button>
      </div>
    </>
  );
}

export default RightContent;
