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
import { useNavigate, useOutlet } from "react-router-dom";
import "../../sass/Profile/Profile.scss";
import JWTManager from "../../modules/utils/jwt";
import AddressAutocomplate from "./../../components/core/AddressAutocomplate";
import { useMutation, useQuery } from "@apollo/client";
import { CHANGE_PASSWORD } from "../../graphql/mutations/changePassword.graphql";
import { createUser, deleteUser, getUserByUsername, updateUser } from "../../graphql/schema/user.graphql";
import jwtDecode from "jwt-decode";
import { deleteAccountFromFrontend, getAccountByName, updateAccountInfo } from "../../graphql/schema/account.graphql";

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
  const { isAuthenticated,isAdmin } = useAuthContext();
  const navigate = useNavigate();

  const currentUsername = String(JWTManager.getUsername())

  const initialUser = useQuery(getUserByUsername(currentUsername));
  const info = {
    fullname: "Nguyễn Văn A",
    sex: "Nam",
    birthday: "",
    phoneNumber: "0988712523",
    email: "Senshoptd@gmail.com",
    address: "Số 113, khu phố 6, phường Linh Trung, TP. Thủ Đức, TPHCM"
  }


  const [updateAcc] = useMutation(updateAccountInfo);
  const [update_user, updateUserInfo] = useMutation(updateUser);
  
  
  const updatedData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    numberPhone: "",
    email: ""
  }

  useEffect(() => {
    if (!isAuthenticated) {
      message.error("Vui lòng đăng nhập để xem thông tin cá nhân");
      navigate("/login");
    }
    try {
      if (initialUser.data) {
        if(initialUser.data.getUserByUsername.lastName != null || initialUser.data.getUserByUsername.firstName != null){
          info.fullname = initialUser.data.getUserByUsername.lastName + " " + initialUser.data.getUserByUsername.firstName || ""
        }
      
        if(initialUser.data.getUserByUsername.sex){
          info.sex = initialUser.data.getUserByUsername.sex
        }
        info.birthday = ""
        if(initialUser.data.getUserByUsername.numberPhone){
          info.phoneNumber = initialUser.data.getUserByUsername.numberPhone
        }
        if(initialUser.data.getUserByUsername.email){
          info.email = initialUser.data.getUserByUsername.email 
        }
        if(initialUser.data.getUserByUsername.address){
          info.address = initialUser.data.getUserByUsername.address 
          if(initialUser.data.getUserByUsername.city !=null || initialUser.data.getUserByUsername.country!= null){
            info.address = initialUser.data.getUserByUsername.city + " " + initialUser.data.getUserByUsername.country 
          }
        }
        form.setFieldsValue(info)
      }
    } catch (error) {
      
    }
    

  }, [initialUser.data]);


  //Thay đổi mật khẩu
  const [changePassword] = useMutation(CHANGE_PASSWORD);
  const [deleteAcc] = useMutation(deleteAccountFromFrontend);
  const [disableUser] = useMutation(deleteUser);

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

    setEditAble(false);
    //success
    
    const name = value.fullname.split(" ");
    updatedData.lastName = name[0];
    for (let index = 1; index < name.length; index++) {
      updatedData.firstName += name[index] + " ";
    }

    updatedData.username = String(JWTManager.getUsername())

    updatedData.email = String(value.email)
    updatedData.address = String(value.address)
    updatedData.numberPhone = String(value.phoneNumber)
    updatedData.password = String(value.password)

    const datainput = {
      username: updatedData.username,
      password: updatedData.password,
      email: updatedData.email
    }
    
    update_user({ variables: { username: updatedData.username, data: updatedData } })
    if(updateUserInfo.error){
      message.error("Cập nhật thông tin người dùng không thành công")
    }else{
      message.success("Cập nhật thông tin người dùng thành công")
    }
    

    updateAcc({ variables: { username: updatedData.username, data: datainput } })
  };
  const savePassword = (value: any) => {
    changePassword({ variables: { username: currentUsername, password: String(value.password), newPassword: String(value.newPassword) } })
  };

  const disableAccount = (value: any) =>{
    deleteAcc({variables: {username: currentUsername, password: value.password}})
    disableUser({variables: {username: currentUsername}})
  }

  const [form] = Form.useForm();

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
              {isAuthenticated ? (<h2 id="username">{JWTManager.getUsername()}</h2>) : " "}
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
              <Form initialValues={info} form={form} onFinish={saveProfile} {...formLayout}>
                <Form.Item label="Họ và tên" name="fullname">
                  <Input disabled={!editAble} placeholder={info.fullname} />
                </Form.Item>
                <Form.Item label="Giới tính" name="sex">
                  <Radio.Group disabled={!editAble}>
                    <Radio value={"Nam"}>Nam</Radio>
                    <Radio value={"Nữ"}>Nữ</Radio>
                    <Radio value={"Khác"}>Khác</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Ngày sinh" name="birthday">
                  <DatePicker placeholder={"Chọn ngày"} disabled={!editAble} />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại của bạn!",
                    },
                  ]}
                >
                  <Input

                    disabled={!editAble}
                    addonBefore={prefixSelector}
                    //controls={false}
                    style={{ width: "100%" }}
                    placeholder={info.phoneNumber}
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
                  name="email"
                >
                  <AutoComplete
                    disabled={!editAble}
                    onSearch={handleSearch}
                    placeholder={info.email}
                  >
                    {result.map((email: string) => (
                      <AutoComplete.Option key={email} value={email}>
                        {email}
                      </AutoComplete.Option>
                    ))}
                  </AutoComplete>
                </Form.Item>
                <Form.Item label="Địa chỉ" name="address">
                  <AutoComplete disabled={!editAble} placeholder={info.address} />
                </Form.Item>
                {/* <Form.Item label="Mật khẩu" name="password">
                  <Input.Password disabled={!editAble} placeholder="Nhập mật khẩu" />
                </Form.Item> */}
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
                    <Form.Item
                      label="Mật khẩu cũ"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập chính xác mật khẩu cũ!"
                        },
                        {
                          min: 8, message: "Độ dài từ 8 kí tự"
                        }
                      ]
                      }
                      hasFeedback
                    >
                      <Input.Password placeholder="Mật khẩu cũ" />
                    </Form.Item>
                    <Form.Item
                      label="Mật khẩu mới"
                      name="newPassword"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mật khẩu mới!"
                        },
                        {
                          min: 8, message: "Độ dài từ 8 kí tự"
                        }
                      ]
                      }
                    >
                      <Input.Password placeholder="Mật khẩu mới" />
                    </Form.Item>
                    <Form.Item
                      label="Xác nhận mật khẩu"
                      name="Confirm Password"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng xác nhận mật khẩu!"
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('Xác nhận mật khẩu không chính xác!'));
                          },
                        }),
                        {
                          min: 8, message: "Độ dài từ 8 kí tự"
                        }
                      ]}
                      hasFeedback

                    >
                      <Input.Password placeholder="Xác nhận mật khẩu" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit">Đổi mật khẩu</Button>
                    </Form.Item>
                  </Form>
                </Collapse.Panel>
                <Collapse.Panel header="Vô hiệu hoá tài khoản" key="2">
                  <Form onFinish={disableAccount} {...formLayout} >
                    <Form.Item
                      label="Nhập mật khẩu"
                      name="password"
                    >
                      <Input placeholder="Nhập mật khẩu" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                      <Button type="primary" htmlType="submit" danger>
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
