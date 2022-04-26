import React from 'react'
import { Table, Button } from "antd";
import { useState } from "react";
import { DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { data } from "./data";
import { DataType } from "./type"
import { useNavigate } from 'react-router-dom';

export interface CurrentProps {
  callBackCurrent(childCurrent: number): void
}

function Cart({ callBackCurrent }: CurrentProps) {
  const navigate = useNavigate();
  const [dataType, setDataType] = useState(data);
  let isDisabled = true;
  if (dataType.length > 0) {
    isDisabled = false
  }

  const handelSub = (record: DataType) => {
    record.soluong -= 1;
    if (record.soluong < 1) {
      record.soluong = 1;
    }
    const value = record.soluong
    const index = Number(record.key) - 1
    const newRecord = { ...dataType[index], soluong: value }
    const AfterValue = dataType.slice(index + 1, dataType.length)
    const BeforeValue = dataType.slice(0, index)
    setDataType(pre => {
      return [...BeforeValue, newRecord, ...AfterValue]
    })
  };
  const handelPlus = (record: DataType) => {
    record.soluong += 1;
    if (record.soluong < 1) {
      record.soluong = 1;
    }
    const value = record.soluong
    const index = Number(record.key) - 1
    const newRecord = { ...dataType[index], soluong: value }
    const AfterValue = dataType.slice(index + 1, dataType.length)
    const BeforeValue = dataType.slice(0, index)
    setDataType(() => {
      return [...BeforeValue, newRecord, ...AfterValue]
    })
  };
  const handelDelete = (record: DataType) => {
    const newData = [...dataType]
    const newRecord = newData.filter(e => e.key !== record.key)
    for (let i: number = 0; i < newRecord.length; i++) {
      newRecord[i].key = i + 1;
    }
    setDataType(newRecord)
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "SẢN PHẨM",
      dataIndex: "sanpham",
      key: "sanpham",
      align: "left",
      render: (text, record) => (
        <>
          <Button
            onClick={() => handelDelete(record)}
            style={{ marginRight: "10px" }}
            icon={<DeleteOutlined />}
          ></Button>
          <img src={dataType[Number(record.key) - 1].img} alt="Product" />
          {dataType[Number(record.key) - 1].sanpham}
        </>
      ),
    },
    {
      title: "GIÁ",
      dataIndex: "gia",
      key: "gia",
      align: "center",
      render: (title, record) => (
        <>
          <span>
            {dataType[Number(record.key) - 1].gia.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </>
      ),
    },
    {
      title: "SỐ LƯỢNG",
      dataIndex: "soluong",
      key: "soluong",
      align: "center",
      render: (title, record) => (
        <>
          <div className="button__frame">
            <button onClick={() => handelSub(record)}>-</button>
            <span>{dataType[Number(record.key) - 1].soluong}</span>
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
            dataType[Number(record.key) - 1].gia *
            dataType[Number(record.key) - 1].soluong
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
          pageData.forEach(({ gia, soluong }) => {
            total += gia * soluong;
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
        <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>TIẾP TỤC XEM SẢN PHẨM</Button>
        <Button disabled={isDisabled} onClick={() => callBackCurrent(1)}>THANH TOÁN</Button>
      </div>
    </>
  )
}

export default Cart