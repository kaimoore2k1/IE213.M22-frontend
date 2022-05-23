import { useMutation } from "@apollo/client";
import { Button, Col, Form, Input, message, Row } from "antd";
import React from "react";
import PicturesWall from "../../components/core/PicturesWall";
import { UpdateProductByName } from "../../graphql/mutations/product.graphql";
import { getAllProduct } from "../../graphql/schema/product.graphql";

function AdminAddProduct(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
  id: string;
}) {
  const [updateProducts, dataProductMutation] = useMutation(UpdateProductByName);
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const onFinish = async (values: any) => {
    if (props.id) {
      await updateProducts({
        variables: { name: props.id, data: values },
        refetchQueries: [{query: getAllProduct}]
      });
    } else {
      await updateProducts({
        variables: { name: values.name, data: values },
        refetchQueries: [{query: getAllProduct}]
      });
    }
    if (dataProductMutation.error) {
      message.error('Error!');
    }
    else {
      message.success('Successfully!');
    }
    props.visibleProp(false);
  };
  return (
    <Form
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      initialValues={props.dataProp}
      onFinish={onFinish}
    >
      <Row align="middle" justify="center">
        <Col span={9}>
          <Form.Item name="images">
            <PicturesWall />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="name"
        label="Product Name"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="salePrice" label="Sale Price">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="stock" label="Stock">
        <Input />
      </Form.Item>

      <Form.Item name="categories" label="Categories">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea className="adminCustomTextArea" />
      </Form.Item>
      <Form.Item name="content" label="Content">
        <Input.TextArea className="adminCustomTextArea" />
      </Form.Item>
      <Form.Item name="slugName" label="Slug Name">
        <Input />
      </Form.Item>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit" loading={dataProductMutation.loading}>
            Submit
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handleCancel}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AdminAddProduct;
