import React from "react";
import { Table, Button } from "antd";
import { useState } from "react";
import { DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "../../sass/Pay/RightContent.scss";
import { ColumnsType } from "antd/es/table";
import { DataType, data } from "./data";

function RightContent() {
  const [dataType, setDataType] = useState(data);

  console.log();

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
      render: () => (
        <>
          <Button
            style={{ marginRight: "10px" }}
            icon={<DeleteOutlined />}
          ></Button>
          <img src={dataType[Number(dataType[0].key)].img} alt="Product" />
          {dataType[Number(dataType[0].key)].sanpham}
        </>
      ),
    },
    {
      title: "GIÁ",
      dataIndex: "gia",
      key: "gia",
      align: "center",
      render: () => (
        <>
          <span>{dataType[Number(dataType[0].key)].gia.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
        </>
      ),
    },
    {
      title: "SỐ LƯỢNG",
      dataIndex: "soluong",
      key: "soluong",
      align: "center",
      render: () => (
        <>
          <div className="button__frame">
            <button onClick={handelSub}>-</button>
            <span>{dataType[Number(dataType[0].key)].soluong}</span>
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
      render: () => (
        <span>{(dataType[Number(dataType[0].key)].gia * dataType[Number(dataType[0].key)].soluong).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
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
