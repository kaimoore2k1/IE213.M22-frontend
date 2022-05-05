import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../../sass/Admin/AdminLoginForm.scss"

function AdminLoginForm() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ height: "20%", width: "40%", position: "absolute", top: "20%", left: "25%" }}
    >
      <Form.Item name="logo">
        <img
          src="https://senshop.tech/static/media/logo.bc588d992055212e8997a878ac242940.svg"
          alt="logo"
          className="admin_logo"
          style={{ width: "80%", position: "relative", left: "50%" }}
        />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Username không được để trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Password không được để trống!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AdminLoginForm;
