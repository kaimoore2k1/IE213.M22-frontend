import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  notification,
  Modal,
  DatePicker,
} from "antd";
import { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Helmet } from "react-helmet";
import { BOOKING } from "../../graphql/mutations/booking.graphql";
import { useMutation } from "@apollo/client";

interface informationForm {
  name?: string;
  number?: string;
  pet?: string;
  service?: string;
  time?: string;
  dateTime?: string;
  content?: string;
}
const { confirm } = Modal;
function Booking() {
  const [booking] = useMutation(BOOKING);
  const [form] = Form.useForm();
  const showConfirm = () => {
    if (
      InformationForm.name &&
      InformationForm.number &&
      InformationForm.pet &&
      InformationForm.service &&
      InformationForm.time &&
      InformationForm.dateTime
    ) {
      confirm({
        title: "Xác nhận gửi thông tin đặt hẹn?",
        icon: <ExclamationCircleOutlined />,
        content: "Gửi phản hồi cho chúng tôi",
        onOk() {
          notification.info({
            message: "Thông báo!",
            description:
              "Cảm ơn bạn đã gửi đặt hẹn trước. Chúng tôi sẽ ghi nhận thông tin cho bạn!",
          });
          booking({
            variables: {
              name: InformationForm.name,
              number: InformationForm.number,
              pet: InformationForm.pet,
              service: InformationForm.service,
              time: InformationForm.time,
              dateTime: InformationForm.dateTime,
              content: InformationForm.content || " ",
            },
          });
          form.resetFields();
          console.log(InformationForm);
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    }
  };
  let InformationForm: informationForm = {
    name: "",
    number: "",
    pet: "",
    service: "",
    time: "",
    dateTime: "",
    content: "",
  };

  return (
    <>
      <Helmet>
        <title>Đặt hẹn dịch vụ ở thú cưng sen shop</title>
        <meta
          name="description"
          content="Đặt hẹn trước là điều cần thiết với những người bận rộn mà muốn được chăm sóc nhanh cho thú cưng của mình. Sau khi tiếp nhận thông tin đặt hẹn chúng tôi sẽ lưu giữ thông tin để tạo điều kiện cho dịch vụ của bạn, và còn có các khuyến mãi khác."
        />
        <link rel="canonical" href="https://senshop.tech/dich-vu/dat-hen" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Đặt hẹn dịch vụ ở thú cưng sen shop"
        />
        <meta
          property="og:url"
          content="https://senshop.tech/dich-vu/dat-hen"
        />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/dat-hen-dich-vu.jpg"
        />
        <meta property="Đặt hẹn trước là điều cần thiết với những người bận rộn mà muốn được chăm sóc nhanh cho thú cưng của mình. Sau khi tiếp nhận thông tin đặt hẹn chúng tôi sẽ lưu giữ thông tin để tạo điều kiện cho dịch vụ của bạn, và còn có các khuyến mãi khác." />
      </Helmet>
      <div className="booking">
        <h2 className="header-form">Thông tin đặt hẹn trước</h2>
        <div className="booking-form-img"></div>
        <Form
          name="booking-form"
          wrapperCol={{ span: 24 }}
          autoComplete="off"
          className="booking-form"
          form={form}
        >
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item
                style={{ width: "100%" }}
                label="Họ tên"
                name="tên"
                rules={[{ required: true, message: "Chưa nhập Tên" }]}
              >
                <Input
                  onChange={(e) =>
                    (InformationForm.name = e.target.value.toString())
                  }
                  placeholder="Nhập..."
                />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                className="sdt"
                label="Số điện thoại"
                name="sdt"
                rules={[{ required: true, message: "Chưa nhập SĐT" }]}
              >
                <Input
                  onChange={(e) =>
                    (InformationForm.number = e.target.value.toString())
                  }
                  placeholder="Nhập..."
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            style={{ width: "60%" }}
            name="thucung"
            label="Thú cưng của bạn"
            rules={[{ required: true, message: "Chưa nhập thú cưng" }]}
          >
            <Input
              onChange={(e) =>
                (InformationForm.pet = e.target.value.toString())
              }
              placeholder="Tên thú cưng..."
            />
          </Form.Item>
          <Form.Item
            style={{ width: "70%" }}
            name="service"
            label="Chọn dịch vụ"
            rules={[{ required: true, message: "Vui lòng chọn dịch vụ" }]}
          >
            <Select
              onChange={(e) => (InformationForm.service = e.toString())}
              placeholder="Chọn dịch vụ bạn muốn đặt hẹn trước"
            >
              <Select.Option value="Cắt móng, tỉa lông, tạo kiểu">
                Cắt móng, tỉa lông, tạo kiểu
              </Select.Option>
              <Select.Option value="Trông giữ thú cưng">
                Trông giữ thú cưng
              </Select.Option>
              <Select.Option value="Spa, massage">Spa, massage</Select.Option>
              <Select.Option value="Đặt hẹn khám bệnh">
                Đặt hẹn khám bệnh
              </Select.Option>
            </Select>
          </Form.Item>
          <Row justify="space-between">
            <Col span={11}>
              <Form.Item
                className="date_picker"
                name="time"
                label="Thời gian hẹn"
                rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
              >
                <Select
                  onChange={(e) => (InformationForm.time = e.toString())}
                  placeholder="Chọn thời gian"
                >
                  <Select.Option value="Sáng (7h30-11h)">
                    Sáng (7h30-11h)
                  </Select.Option>
                  <Select.Option value="Chiều (13h30-17h)">
                    Chiều (13h30-17h)
                  </Select.Option>
                  <Select.Option value="Tối (19h30 -22h)">
                    Tối (19h30 -22h)
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item
                className="date_picker"
                name="date"
                label="Chọn ngày"
                rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
              >
                <DatePicker
                  onChange={(e: any) =>
                    (InformationForm.dateTime = e.format("DD-MM-YYYY"))
                  }
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="noidung" label="Nội dung(Nếu có)">
            <Input.TextArea
              onChange={(e) =>
                (InformationForm.content = e.target.value.toString())
              }
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button
              onClick={showConfirm}
              className="button-booking"
              type="primary"
              htmlType="submit"
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Booking;
