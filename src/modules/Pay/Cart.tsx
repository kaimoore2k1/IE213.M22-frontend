import React from "react";
import { Table, Button } from "antd";
import { useState } from "react";
import { DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { DataType } from "./type";
import { useNavigate } from "react-router-dom";

export interface CurrentProps {
  callBackCurrent(childCurrent: number): void;
}

function Cart({ callBackCurrent }: CurrentProps) {
  if (!window.localStorage.getItem("products")) {
    window.localStorage.setItem("products", "[]");
  }
  let i = 0;
  
  const navigate = useNavigate();
  const data: DataType[] = JSON.parse(
    window.localStorage.getItem("products") as string
  );
  const [dataType, setDataType] = useState<DataType[]>(
    data.map((dt) => {
      return { ...dt, ...{ key: ++i } };
    })
  );
  let isDisabled = true;
  if (dataType.length > 0) {
    isDisabled = false;
  }

  const handelSub = (record: DataType) => {
    record.quantity -= 1;
    if (record.quantity < 1) {
      record.quantity = 1;
    }
    const value = record.quantity;
    const index = Number(record.key) - 1;
    const newRecord = { ...dataType[index], quantity: value };
    const AfterValue = dataType.slice(index + 1, dataType.length);
    const BeforeValue = dataType.slice(0, index);
    setDataType((pre: any) => {
      return [...BeforeValue, newRecord, ...AfterValue];
    });
    window.localStorage.setItem('products', JSON.stringify(dataType));
  };
  const handelPlus = (record: DataType) => {
    record.quantity += 1;
    if (record.quantity < 1) {
      record.quantity = 1;
    }
    const value = record.quantity;
    const index = Number(record.key) - 1;
    const newRecord = { ...dataType[index], quantity: value };
    const AfterValue = dataType.slice(index + 1, dataType.length);
    const BeforeValue = dataType.slice(0, index);
    setDataType(() => {
      return [...BeforeValue, newRecord, ...AfterValue];
    });
    window.localStorage.setItem('products', JSON.stringify(dataType));
  };
  const handelDelete = (record: DataType) => {
    const newData = [...dataType];
    const newRecord = newData.filter((e) => e.key !== record.key);
    for (let i: number = 0; i < newRecord.length; i++) {
      newRecord[i].key = i + 1;
    }
    setDataType(newRecord);
    window.localStorage.setItem('products', JSON.stringify(newRecord));
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "SẢN PHẨM",
      dataIndex: "name",
      key: "name",
      align: "left",
      render: (text, record) => (
        <>
          <Button
            onClick={() => handelDelete(record)}
            style={{ marginRight: "10px" }}
            icon={<DeleteOutlined />}
          ></Button>
          <img src={dataType[Number(record.key) - 1].image.url} alt="Product" />
          {dataType[Number(record.key) - 1].name}
        </>
      ),
    },
    {
      title: "GIÁ",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (title, record) => (
        <>
          <span>
            {dataType[Number(record.key) - 1].price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </>
      ),
    },
    {
      title: "SỐ LƯỢNG",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (title, record) => (
        <>
          <div className="button__frame">
            <button onClick={() => handelSub(record)}>-</button>
            <span>{dataType[Number(record.key) - 1].quantity}</span>
            <button onClick={() => handelPlus(record)}>+</button>
          </div>
        </>
      ),
    },
    {
      title: "TẠM TÍNH",
      dataIndex: "tamtinh",
      key: "tamtinh",
      align: "center",
      render: (title, record) => (
        <span>
          {(
            dataType[Number(record.key) - 1].price *
            dataType[Number(record.key) - 1].quantity
          ).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
        </span>
      ),
    },
  ];
  return (
    <>
      <Table
        pagination={false}
        dataSource={dataType}
        columns={columns}
        summary={(pageData) => {
          let total = 0;
          pageData.forEach(({ price, quantity }) => {
            total += price * quantity;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2} colSpan={2}>
                  TỔNG:{" "}
                  <span>
                    {" "}
                    {total.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
      <div className="handleButton">
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
          TIẾP TỤC XEM SẢN PHẨM
        </Button>
        <Button disabled={isDisabled} onClick={() => callBackCurrent(1)}>
          THANH TOÁN
        </Button>
      </div>
    </>
  );
}

export default Cart;
