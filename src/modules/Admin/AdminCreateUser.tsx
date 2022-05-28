import React, { useEffect, useState } from "react";
import AvatarUpload from "../../components/core/AvatarUpload";
import { Button, Col, Form, Input, message, Row, Popconfirm } from "antd";
import { createUser, deleteUser, getAllUsers } from "../../graphql/schema/user.graphql";
import { useMutation } from "@apollo/client";

function AdminCreateUser(props: {
  visibleProp: (arg0: boolean) => void;
  dataProp: any;
  id: any;
}) {
  const [createOrUpdateUser, dataUserMutation] = useMutation(createUser);
  const [deleteUserVariables, dataDeleteUser] = useMutation(deleteUser)
  const prefixSelector = <Form.Item noStyle>+84</Form.Item>;
  const handleCancel = () => {
    props.visibleProp(false);
  };
  const onFinish = async (values: any) => {
    if (props.id) {
      await createOrUpdateUser({
        variables: { username: props.id, data: values },
        refetchQueries: [{ query: getAllUsers }],
      });
    } else {
      await createOrUpdateUser({
        variables: { username: values.username, data: values },
        refetchQueries: [{ query: getAllUsers }],
      });
    }

    if (dataUserMutation.error) {
      message.error("Error!");
    } else {
      message.success("Successfully!");
    }
    props.visibleProp(false);
  };
  const deleteHandler = () => {
    deleteUserVariables({
      variables: { username: props.dataProp.username },
      onCompleted: () => {
        message.success("Deleted successfully!");
        props.visibleProp(false);
      },
      onError: () => {
        message.error("Delete error!");
      },
      refetchQueries: [getAllUsers],
    });
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
        <Col span={3}>
          <Form.Item>
            <AvatarUpload />
          </Form.Item>
        </Col>
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
        name="numberPhone"
        label="Number Phone"
        rules={[
          {
            required: true,
            message: "Required Information!",
          },
        ]}
      >
        <Input addonBefore={prefixSelector} />
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
          <Button style={{ margin: "0 8px" }} type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AdminCreateUser;
