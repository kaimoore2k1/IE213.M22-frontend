import { useState } from "react";
import React from "react";
import {connect} from 'react-redux';
import "../../sass/Login-Logout/Login-Logout.scss";
import logo from "../assets/logo.png";
import { Form, Input, Button, Typography } from "antd";


function Login(){
  
    interface information {
        nameMail?: string;
        password?: string;
      }
    
      interface informationInputProps {
        value?: information;
        onChange?: (value: information) => void;
      }

      const [nameMail, setNameMail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
    return(
        <div className="login">
            <div className="login--logo">
              <img 
                src={logo} 
                alt="logo-sen-shop" 
              />
            </div>
            <div className="login--form">
              <Form
                className="form--form"
                layout="horizontal"
                name="login"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
              >
                <Form.Item
                  name="nameMail"
                  rules={[{ required: true, message: "Tên không được để trống!" }]}
                >
                  <label htmlFor="nameMail">Tên đăng nhập hoặc mật khẩu</label>
                  <Input
                    defaultValue={nameMail}
                    placeholder=""
                    onChange={(e) => setNameMail(e.target.value)}
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
                  name="rememberMe"
                >
                  
                  <Input
                    type="checkbox"
                  />
                  <span 
                    style={{ marginLeft: "5px" }}
                  >
                    Nhớ mật khẩu
                  </span>
                </Form.Item>
                <Form.Item name="submit">
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="login--text">
              <p>Bạn chưa có tài khoản?<span><a>Đăng ký</a></span></p> 
            </div>
        </div>
    )
}
export default Login;