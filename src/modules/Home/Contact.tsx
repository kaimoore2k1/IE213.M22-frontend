import { Form, Input, Button, Typography } from "antd";
import React from "react";
import "../../sass/Home/Home.scss";

interface information {
  name?: string;
  mail?: string;
  content?: string;
}


function Contact() {
  const { Title, Text } = Typography;

  let Information:information = {
    name: "",
    mail: "",
    content: ""
  }

  const HandleFinish = () => {
    console.log(Information)
  }

  return (
    <div className="home--contact">
      <img
        src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGNhdHxlbnwwfHx8fDE2NDg5ODE3MjA&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
        alt="Cat"
      ></img>
      <div className="contact--form">
        <div className="contact--form--header">
          <Title style={{ fontSize: "48px" }}>Liên hệ với chúng tôi</Title>
          <Text style={{ fontSize: "18px" }}>
            Những ý kiến của bạn giúp chúng tôi duy trì tiêu chuẩn cao
            <br />
            với các sản phẩm và dịch vụ!
          </Text>
        </div>
        <Form
          className="form--form"
          layout="horizontal"
          name="contact"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          onFinish={HandleFinish}
        >
          <Form.Item name="name">
            <Input placeholder="Tên" onChange={(e) => {Information.name = e.target.value.toString()}}/>
          </Form.Item>
          <Form.Item name="mail">
            <Input placeholder="Mail" onChange={(e) => {Information.mail = e.target.value.toString()}}/>
          </Form.Item>
          <Form.Item name="content">
            <Input.TextArea onChange={(e) => {Information.content = e.target.value.toString()}} className="InputLastChild" placeholder="Nội dung" />
          </Form.Item>
          <Form.Item name="submit">
            <Button type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
