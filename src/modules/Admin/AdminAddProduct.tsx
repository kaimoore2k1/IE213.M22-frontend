import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import PicturesWall from "../../components/core/PicturesWall";

function AdminAddProduct(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
}) {
  const handleCancel = () => {
    props.visibleProp(false);
  };
  return (
    <Form
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      initialValues={props.dataProp}
    >
      <Row align="middle" justify="center">
        <Col span={9}>
          <Form.Item>
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
      <Row align="middle" justify="center">
        <Col span={3}></Col>
      </Row>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Required Information!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Required Information!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Required Information!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Required Information!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="country" label="Country">
        <Input />
      </Form.Item>
      <Form.Item name="address" label="Address">
        <Input />
      </Form.Item>
      <Form.Item name="city" label="City">
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "Invalid Email!",
          },
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
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
