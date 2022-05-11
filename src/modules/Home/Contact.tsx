import { Modal, Form, Input, Button, Typography, notification } from "antd";
import React from "react";
import "../../sass/Home/Home.scss";
import { information } from './type'
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

function Contact() {

  const showConfirm = () => {
    if (Information.name && Information.mail && Information.content) {

      confirm({
        title: 'Xác nhận gửi thông tin?',
        icon: <ExclamationCircleOutlined />,
        content: 'Gửi phản hồi cho chúng tôi',
        onOk() {
          notification.info({
            message: 'Thông báo!',
            description:
              'Cảm ơn bạn đã gửi phản hồi cho chúng tôi!',
          });
          console.log(Information);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }

  const { Title, Text } = Typography;

  let Information: information = {
    name: "",
    mail: "",
    content: ""
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
        >
          <Form.Item name="name" rules={[{ required: true, message: 'Chưa nhập tên' }]}>
            <Input placeholder="Tên" onChange={(e) => { Information.name = e.target.value.toString() }} />
          </Form.Item>
          <Form.Item name="mail" rules={[{ required: true, message: 'Chưa nhập email' }]}>
            <Input placeholder="Mail" onChange={(e) => { Information.mail = e.target.value.toString() }} />
          </Form.Item>
          <Form.Item name="content" rules={[{ required: true, message: 'Chưa nhập nội dung' }]}>
            <Input.TextArea onChange={(e) => { Information.content = e.target.value.toString() }} className="InputLastChild" placeholder="Nội dung" />
          </Form.Item>
          <Form.Item name="submit">
            <Button onClick={showConfirm} type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
