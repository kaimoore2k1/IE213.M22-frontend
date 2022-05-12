import { useState } from "react";
import React from "react";
import { connect } from "react-redux";
import "../../../sass/Login-Logout/Login-Logout.scss";
import logo from "../../../assets/images/logo.png";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../graphql/mutations/login.graphql";
import JWTManager from "../../utils/jwt"
import { useAuthContext } from "../../context/AuthContext";

function Login() {
 
  const navigate = useNavigate();
  const {setIsAuthenticated} = useAuthContext()     
      const [login, {data, loading, error}] = useMutation(LOGIN);
      const [errorMessage, setErrorMessage] = useState('')

      if (loading) return <p>loading....</p>;
      if (error) return <p>error</p>;
      const handleFinish = async (values: any) => {

        const response = await login({
          variables : {username: values.username, password: values.password}
        })
        
        if (response.data?.login.success) {
          JWTManager.setToken(response.data.login.accessToken as string)
          console.log(response.data.login.accessToken as string)
          setIsAuthenticated(true)
          navigate('..')
        } else {
          if (response.data?.login.message) setErrorMessage(response.data.login.message)
        }
        
        
      }
      
  return (
    <div className="login">
      <div className="login--logo">
        <img src={logo} alt="logo-sen-shop" />
      </div>
      {errorMessage && <p style={{color:"red", textAlign: "center", fontSize:"20px"}}>{errorMessage}</p>}
      <div className="login--form">
        <Form
          className="form--form"
          layout="horizontal"
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          onFinish={handleFinish}
        >
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[{ required: true, message: "Tên đăng nhập không được để trống!" }]}
          >
            <Input className="input--css"/>
          </Form.Item>
          <Form.Item
            name="password"
            label="Mật Khẩu"
            rules={[
              { 
                required: true, 
                message: "Mật khẩu không được bỏ trống!" },
              { 
                min: 8, message: "Độ dài từ 8 kí tự"
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Nhớ mật khẩu</Checkbox>
          </Form.Item>
          <Form.Item name="submit">
            <Button 
              type="primary" 
              htmlType="submit"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="login--text">
        <p>
          Bạn chưa có tài khoản?
          <span>
            <a>Đăng ký</a>
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
