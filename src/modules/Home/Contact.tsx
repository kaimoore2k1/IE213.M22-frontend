import { Form, Input, Button, Typography } from "antd";
import React from "react";
import "../../sass/Home/Home.scss";
import { useState } from "react";

function Contact() {
  const { Title, Text } = Typography;

  interface information {
    name?: string;
    mail?: string;
    content?: string;
  }

  interface informationInputProps {
    value?: information;
    onChange?: (value: information) => void;
  }

  /*const [Infor, setInfor] = useState<contactForm>({}); */

  const [name, setName] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [content, setContent] = useState<string>("");

  //console.log(name, mail, content);

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
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Tên không được để trống!" }]}
          >
            <Input
              defaultValue={name}
              placeholder="Tên"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="mail"
            rules={[{ required: true, message: "Mail không được để trống!" }]}
          >
            <Input
              defaultValue={mail}
              placeholder="Mail"
              onChange={(e) => setMail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[
              { required: true, message: "Nội dung không được để trống!" },
            ]}
          >
            <Input.TextArea
              defaultValue={content}
              className="InputLastChild"
              placeholder="Nội dung"
              onChange={(e) => setContent(e.target.value)}
            />
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
