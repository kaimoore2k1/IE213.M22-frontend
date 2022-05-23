import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import PicturesWall from "../../components/core/PicturesWall";

function AdminAddBlog(props: {
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
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="author" label="Author">
        <Input />
      </Form.Item>

      <Form.Item name="category" label="Categories">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea className="adminCustomTextArea"/>
      </Form.Item>
      <Form.Item name="content" label="Content">
        <Input.TextArea className="adminCustomTextArea" />
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

export default AdminAddBlog;
