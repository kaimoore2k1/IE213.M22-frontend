import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Popconfirm,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import PicturesWall from "../../components/core/PicturesWall";
import {
  deleteBillById,
  GETALLBILLS,
  getBillProducts,
} from "../../graphql/mutations/bill.graphql";
import { UpdateProductByName } from "../../graphql/mutations/product.graphql";
import { getAllProduct } from "../../graphql/schema/product.graphql";
import { productBillColumn } from "./type";

function AdminAddProduct(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
  id: string;
}) {
  const billProducts = useQuery(getBillProducts(props.id));
  const initialValues: any = "";
  const [dataSource, setDataSource] = useState(initialValues);
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const [deleteBill, dataDeleteBill] = useMutation(deleteBillById);
  const deleteHandler = () => {
    deleteBill({
      variables: { id: props.dataProp._id },
      onCompleted: () => {
        message.success("Deleted successfully!");
        props.visibleProp(false);
      },
      onError: () => {
        message.error("Delete error!");
      },
      refetchQueries: [GETALLBILLS],
    });
  };
  useEffect(() => {
    if (billProducts.data) {
      let i = 0;
      const newData = billProducts.data.getBillProductById.map((data: any) => {
        return { ...data, ...{ id: ++i } };
      });
      setDataSource(newData)
    }
  }, [billProducts.data]);
  return (
    <>
      <Table
        size="small"
        //loading={bill.loading}
        columns={productBillColumn}
        dataSource={dataSource}
        scroll={{ y: 265 }}
      />
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          {props.dataProp && (
            <Popconfirm
              title={`Once deleted, this field can't be recovered !`}
              okButtonProps={{ danger: true }}
              onConfirm={deleteHandler}
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          )}
          <Button style={{ margin: "0 8px" }} onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    </>
  );
}

export default AdminAddProduct;
