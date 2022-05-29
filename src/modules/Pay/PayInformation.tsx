import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Row, Col, Button, Select } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CurrentProps } from "./Cart";
import { FieldData, CustomizedFormProps } from "./type";
import { useNavigate } from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import { BILL, LASTEDBILL } from "../../graphql/mutations/bill.graphql";
import { useAuthContext } from "../context/AuthContext";
import JWTManager from "../../modules/utils/jwt";
import { getProductBooked, getUserByUsername } from "../../graphql/schema/user.graphql";

function PayInformation({ callBackCurrent }: CurrentProps) {
  const { isAuthenticated } = useAuthContext();
  const currentUsername = String(JWTManager.getUsername());
  const [addBill, dataBillMutation] = useMutation(BILL);
  const prefixSelector = <Form.Item noStyle>+84</Form.Item>;
  const navigate = useNavigate();
  let paymentInformation: any = useRef([])
  const cartUser = useQuery(getProductBooked(currentUsername));
  const [initialValues, setInitialValues] = useState()
  const dataUserInformation = useQuery(getUserByUsername(currentUsername))
  useEffect(() => {
    if(dataUserInformation.data) {
      setInitialValues(dataUserInformation.data.getUserByUsername)
    }
  }, [dataUserInformation.data])
  useEffect(() => {
    if(isAuthenticated) {
      paymentInformation.current = cartUser.data.getProductBooked
    }
    else {
      paymentInformation.current = JSON.parse(
        window.localStorage.getItem("products") as string
      );
    }
  }, [cartUser.data.getProductBooked, isAuthenticated])
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


  const handelFinish = async (e: any) => {
    const day = new Date();
    let total = 0;
    let amount = 0;
    for (let i = 0; i < paymentInformation.current.length; i++) {
      total += paymentInformation.current[i].price;
      amount += paymentInformation.current[i].quantity;
    }
    const { firstName, lastName, address, numberPhone, paymentMethod } = e;
    const productData = paymentInformation.current.map((infor: { name: any; quantity: any; price: any; }) => {
      return {name: infor.name, quantity: infor.quantity, price: infor.price}
    })
    const payment = {
      products: productData,
      date: day.toLocaleDateString(),
      total,
      amount,
      firstName,
      lastName,
      address,
      numberPhone,
      paymentMethod
    };
    await addBill({
      variables: { data: payment }
    })
    callBackCurrent(3);
  };

  const CustomizedForm: React.FC<CustomizedFormProps> = ({
    onChange,
    fields,
    onSubmit,
  }) => (
    <Form
      layout="vertical"
      initialValues={initialValues}
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
            name="lastName"
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
      <div className="handleButton handleButton_responsive">
        <Button icon={<ArrowLeftOutlined />} onClick={() => callBackCurrent(0)}>
          GIỎ HÀNG
        </Button>
        <Button htmlType="submit" loading={dataBillMutation.loading}>
          THANH TOÁN
        </Button>
      </div>
    </Form>
  );

  const fields: FieldData[] = [
    { name: ["firstName"] },
    { name: ["lastName"] },
    { name: ["country"] },
    { name: ["address"] },
    { name: ["code"] },
    { name: ["city"] },
    { name: ["numberPhone"] },
    { name: ["email"] },
    { name: ["paymentMethod"] },
    { name: ["voucher"] },
    { name: ["note"] },
  ];

  let tempFeilds: FieldData[] = [];

  return (
    <>
      <div className="PayInformation__Header">THÔNG TIN THANH TOÁN</div>
      <div className="PayInformation__Form">
        <CustomizedForm
          fields={fields}
          onChange={() => {}}
          onSubmit={handelFinish}
        />
      </div>
    </>
  );
}

export default PayInformation;
