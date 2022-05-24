import {
  Tabs,
  Radio,
  Form,
  Input,
  Avatar,
  Button,
  DatePicker,
  AutoComplete,
  Timeline,
  Select,
  Collapse,
  InputNumber,
  message,
} from "antd";
import momment from "moment";
import {
  ClockCircleOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../../modules/context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/Profile/Profile.scss";
import AddressAutocomplate from "./../../components/core/AddressAutocomplate";

momment.locale("vi");

const prefixSelector = (
  <Form.Item initialValue={84} name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Select.Option value="84">+84</Select.Option>
      <Select.Option value="83">+83</Select.Option>
    </Select>
  </Form.Item>
);
const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const { TabPane } = Tabs;

const Profile = () => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      message.error("Vui lòng đăng nhập để xem thông tin cá nhân");
      navigate("/login");
    }
  }, []);

  const [editAble, setEditAble] = useState(false);
  const [result, setResult] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "outlook.com", "uit.edu.vn"].map(
        (domain) => `${value}@${domain}`
      );
    }
    setResult(res);
  };

  const saveProfile = (value: any) => {
    console.log(value);
    setEditAble(false);
    //success
    message.success("Cập nhật thành công");
    //error
    message.error("Cập nhật thất bại");
  };
  const savePassword = (value: any) => {
    console.log(value);
  };
  return (
    <div className="profile">
      <div className="profile-wallpaper">
        <img
          style={{ width: "100%" }}
          src="https://cdn.senshop.tech/Banner/profile-banner.webp"
          alt="banner"
        />
      </div>
      <div className="profile-content__wrapper">
        <div className="profile-content">
          <div className="profile-content-header">
            <Avatar size={100} icon={<UserOutlined />} />
            <div>
              <h2 id="username">username</h2>
              <div className="time-joined">
                <ClockCircleOutlined />
                <span>
                  {" "}
                  Ngày tham gia: {momment(new Date()).format("Do MMMM YYYY")}
                </span>
              </div>
              <Button
                type="link"
                onClick={() => setEditAble(true)}
                className="btn-edit"
              >
                <EditOutlined />
                <span> Chỉnh sửa thông tin</span>
              </Button>
            </div>
          </div>
          <Tabs className="profile-content-body">
            <TabPane tab="Thông tin cá nhân" key="1">
              <Form onFinish={saveProfile} {...formLayout}>
                <Form.Item label="Họ và tên">
                  <Input disabled={!editAble} placeholder="Họ và tên" />
                </Form.Item>
                <Form.Item label="Giới tính">
                  <Radio.Group disabled={!editAble}>
                    <Radio value={"Nam"}>Nam</Radio>
                    <Radio value={"Nữ"}>Nữ</Radio>
                    <Radio value={"Khác"}>Khác</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Ngày sinh">
                  <DatePicker placeholder={"Chọn ngày"} disabled={!editAble} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại của bạn!",
                    },
                  ]}
                >
                  <InputNumber
                    disabled={!editAble}
                    addonBefore={prefixSelector}
                    controls={false}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập email của bạn!",
                    },
                  ]}
                >
                  <AutoComplete
                    disabled={!editAble}
                    onSearch={handleSearch}
                    placeholder="Nhập Email"
                  >
                    {result.map((email: string) => (
                      <AutoComplete.Option key={email} value={email}>
                        {email}
                      </AutoComplete.Option>
                    ))}
                  </AutoComplete>
                </Form.Item>
                <Form.Item label="Địa chỉ">
                  <AddressAutocomplate disabled={!editAble} />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                  <Input disabled={!editAble} placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    {...(!editAble ? { hidden: true } : {})}
                    type="primary"
                    htmlType="submit"
                  >
                    Lưu Thông tin
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Đơn hàng" key="2">
              <Timeline>
                <Timeline.Item>
                  Đơn đặt hàng 149583495214 vào ngày 21/5/2022
                </Timeline.Item>
                <Timeline.Item>
                  Đơn đặt hàng 149583495214 vào ngày 20/5/2022
                </Timeline.Item>
                <Timeline.Item>
                  Đơn đặt hàng 149583495214 vào ngày 19/5/2022
                </Timeline.Item>
              </Timeline>
            </TabPane>

            <TabPane tab="Cài đặt tài khoản" key="3">
              <Collapse>
                <Collapse.Panel header="Đổi mật khẩu" key="1">
                  <Form onFinish={savePassword} {...formLayout}>
                    <Form.Item label="Mật khẩu cũ">
                      <Input placeholder="Mật khẩu cũ" />
                    </Form.Item>
                    <Form.Item label="Mật khẩu mới">
                      <Input placeholder="Mật khẩu mới" />
                    </Form.Item>
                    <Form.Item label="Xác nhận mật khẩu">
                      <Input placeholder="Xác nhận mật khẩu" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary">Đổi mật khẩu</Button>
                    </Form.Item>
                  </Form>
                </Collapse.Panel>
                <Collapse.Panel header="Vô hiệu hoá tài khoản" key="2">
                  <Form {...formLayout}>
                    <Form.Item label="Nhập mật khẩu">
                      <Input placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" danger>
                        Vô hiệu hoá tài khoản
                      </Button>
                    </Form.Item>
                  </Form>
                </Collapse.Panel>
              </Collapse>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
