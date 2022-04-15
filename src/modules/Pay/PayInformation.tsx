import React, { useState } from "react";
import { Form, Input, Row, Col, Button, Select } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CurrentProps } from "./Cart";
import {FieldData, CustomizedFormProps} from "./type"


function PayInformation({ callBackCurrent }: CurrentProps) {
  const prefixSelector = <Form.Item noStyle>+84</Form.Item>;

  interface PaymentMethod {
    paymentMethodID: number;
    name: string;
    title: string;
  }

  const paymentMethodData: PaymentMethod[] = [
    {
      paymentMethodID: 1,
      name: "transfer",
      title: "Chuyển khoản ngân hàng",
    },
    {
      paymentMethodID: 2,
      name: "direct",
      title: "Trả tiền mặt khi nhận hàng",
    },
  ];


  const [isLoading, setIsLoading] = useState(false);

  const handelFinish = (e:FieldData[]) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      callBackCurrent(3);
    }, 1500);
  };

  const CustomizedForm: React.FC<CustomizedFormProps> = ({
    onChange,
    fields,
    onSubmit,
  }) => (
    <Form
      layout="vertical"
      wrapperCol={{ span: 24 }}
      autoComplete="off"
      style={{ fontWeight: "500" }}
      onFinish={onSubmit}
      fields={fields}
      onFieldsChange={(_, allFields) => {
        onChange(allFields);
      }}
    >
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="firstName"
            label="Họ"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            name="name"
            label="Tên"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="country"
        label="Quốc gia / Khu vực"
        rules={[
          {
            required: true,
            message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="code" label="Mã bưu điện (Tùy chọn)">
        <Input />
      </Form.Item>
      <Form.Item name="city" label="Tỉnh / Thành phố">
        <Input />
      </Form.Item>
      <Form.Item
        name="numberPhone"
        label="Số điện thoại"
        rules={[
          {
            required: true,
            message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
          },
        ]}
      >
        <Input addonBefore={prefixSelector} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Địa chỉ email"
        rules={[
          {
            type: "email",
            message: "Email không hợp lệ!",
          },
          {
            required: true,
            message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row justify="space-between">
        <Col span={11}>
          <Form.Item
            name="paymentMethod"
            label="Phương thức thanh toán"
            rules={[
              {
                required: true,
                message: "Vui lòng điền đầy đủ thông tin yêu cầu!",
              },
            ]}
          >
            <Select>
              {paymentMethodData.map((e) => {
                return (
                  <Select.Option key={e.paymentMethodID} value={e.name}>
                    {e.title}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name="voucher" label="Mã Voucher (Tùy chọn)">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="note" label="Ghi chú đơn hàng (Tùy chọn)">
        <Input.TextArea style={{ minHeight: "200px" }} />
      </Form.Item>
      <div className="handleButton">
        <Button icon={<ArrowLeftOutlined />}>TIẾP TỤC XEM SẢN PHẨM</Button>
        <Button htmlType="submit" loading={isLoading}>
          THANH TOÁN
        </Button>
      </div>
    </Form>
  );

  const fields:FieldData[] =[
    {name: ['firstName']},
    {name: ['name']},
    {name: ['country']},
    {name: ['address']},
    {name: ['code']},
    {name: ['city']},
    {name: ['numberPhone']},
    {name: ['email']},
    {name: ['paymentMethod']},
    {name: ['voucher']},
    {name: ['note']}
  ]

  let tempFeilds:FieldData[] = []

  return (
    <>
      <div className="PayInformation__Header">THÔNG TIN THANH TOÁN</div>
      <div className="PayInformation__Form">
        <CustomizedForm
          fields={fields}
          onChange={(newFields) => {
            tempFeilds = newFields
          }}
          onSubmit={ () => handelFinish(tempFeilds)}
        />
      </div>
    </>
  );
}

export default PayInformation;
