import { useState } from "react";
import React from "react";
import logo from "../../../assets/images/logo.png";
import "../../../sass/Login-Logout/Login-Logout.scss";
import { Form, Input, Button, Typography } from "antd";

function Logout(){
    interface information {
        name?: string;
        password?: string;
        confirmPassword?: string;
        email?: string;
      }
    
      interface informationInputProps {
        value?: information;
        onChange?: (value: information) => void;
      }

      const [name, setName] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      const [confirmPassword, setConfirmPassword] = useState<string>("");
      const [email, setEmail] = useState<string>("");
    return(
        <div className="Logout">
            <div className="Logout--logo">
              <img 
                src={logo}
                alt="logo-sen-shop" 
              />
            </div>
            <div className="Logout--form">
              <Form
                className="form--form"
                layout="horizontal"
                name="logout"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Tên không được để trống!" }]}
                >
                  <label htmlFor="name">Tên đăng nhập</label>
                  <Input
                    defaultValue={name}
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Mật khẩu không được bỏ trống!" }]}
                >
                  <label htmlFor="password">Mật khẩu</label>
                  <Input
                    defaultValue={password}
                    type="password"
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  rules={[{ required: true, message: "Xác nhận mật khẩu không chính xác!" }]}
                >
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                  <Input
                    defaultValue={confirmPassword}
                    type="password"
                    placeholder=""
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Email phải đúng định dạng!" }]}
                >
                  <label htmlFor="email">Email</label>
                  <Input
                    defaultValue={email}
                    type="email"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item name="submit">
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    style={{marginTop: "30px"}}
                  >
                    Đăng ký
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="logout-another">
                <p
                    style={{marginLeft: "240px",  fontSize: "20px"}}
                >
                    Hoặc
                </p>
                <div className="facebook-google">
                    <Button
                        className="facebook-google--css"
                    >
                        Facebook
                    </Button>
                    <Button
                        className="facebook-google--css"
                    >
                        Google
                    </Button>
                </div>
            </div>
            <div className="Logout--text"
                style={{marginTop: "20px"}}
            >
              <p>Bạn đã có tài khoản?<span><a>Đăng nhập</a></span></p> 
            </div>
        </div>
    )
}
export default Logout;