import { Drawer, Table } from "antd";
import React, { useEffect, useState } from "react";
import AdminContentHeader from "./AdminContentHeader";
import AdminCreateUser from "./AdminCreateUser";

interface ProductData {
  id: number;
  productName: string;
  price: number;
  stock: number;
  categories: string[];
  description: string;
}

const productColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a: { id: number }, b: { id: number }) => a.id - b.id,
    width: '7%'
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a: { price: number }, b: { price: number }) => a.price - b.price,
    key: "price",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    sorter: (a: { stock: number }, b: { stock: number }) => a.stock - b.stock,
    key: "stock",
  },
  {
    title: "Categories",
    dataIndex: "categories",
    key: "categories",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  
]

const productData:ProductData[] = [
  {
    id: 1,
    productName: "Product",
    price: 20000,
    stock: 30,
    categories: ["thucung", ", chocanh"],
    description: "Product description"
  },
  {
    id: 2,
    productName: "Product",
    price: 20000,
    stock: 30,
    categories: ["thucung", ", chocanh"],
    description: "Product description"
  }
] 

function AdminProduct() {
  const title = "Product Management";
  const [searchValue, setSearchValue] = useState("");
  const [dataSource, setDataSource] = useState(productData);
  const titleDrawer = "UPDATE PRODUCT";
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  const [contentDrawer, setContentDrawer] = useState(<></>);
  const showDrawer = (record: any) => {
    setVisible(true);
    setContentDrawer(
      <AdminCreateUser visibleProp={setVisible} dataProp={record} />
    );
  };
  useEffect(() => {
    setDataSource(
      productData.filter((entry) => {
        return (
          entry.productName.includes(searchValue)
        );
      })
    );
  }, [searchValue]);
  return (
    <>
      <AdminContentHeader
        title={title}
        setSearchValue={setSearchValue}
        current={1}
      />
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
        columns={productColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              showDrawer(record);
            },
          };
        }}
      />
    </>
  );
}

export default AdminProduct;
