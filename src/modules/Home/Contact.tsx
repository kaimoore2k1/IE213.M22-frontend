import { Form, Input, Button } from "antd";
import React from "react";

function Contact() {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGNhdHxlbnwwfHx8fDE2NDg5ODE3MjA&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
        alt="Cat"
      ></img>
      <Form
        layout="horizontal"
        name="contact"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Tên không được để trống!" }]}
        >
          <Input placeholder="Tên" />
        </Form.Item>
        <Form.Item
          name="mail"
          rules={[{ required: true, message: "Mail không được để trống!" }]}
        >
          <Input placeholder="Mail" />
        </Form.Item>
        <Form.Item
          name="content"
          rules={[{ required: true, message: "Nội dung không được để trống!" }]}
        >
          <Input placeholder="Nội dung" />
        </Form.Item>
        <Form.Item name="submit">
          <Button type="primary" htmlType="submit"><b>Gửi</b></Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Contact;
