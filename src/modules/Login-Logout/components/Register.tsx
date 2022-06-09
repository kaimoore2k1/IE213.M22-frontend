import { useState } from "react";
import React from "react";
import logo from "../../../assets/images/logo.png";
import "../../../sass/Login-Logout/Login-Logout.scss";
import { Form, Input, Button, Typography } from "antd";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {REGISTER} from "../../../graphql/mutations/register.graphql"


function Register(){
    
      const navigate = useNavigate()      
      const [register, {data, loading, error}] = useMutation(REGISTER);
      const [errorMessage, setErrorMessage] = useState("")
      if (loading) return <p>loading....</p>;
      if (error) return <p>error</p>;
      const handleFinish = async (values: any) => {
        const response = await register({variables : {username: values.username, password: values.password, email: values.email}});
        if(response.data?.register.success) {
          navigate('/login');
        }else {
          if (response.data?.register.message) setErrorMessage(response.data.register.message)
        }
      }
      
    return(
        <div className="Logout">
            <div className="Logout--logo">
              <img 
                src={logo}
                alt="logo-sen-shop" 
              />
            </div>
            {errorMessage && <p style={{color:"red", textAlign: "center", fontSize:"20px"}} >{errorMessage}</p>}
            <div className="Logout--form">
              <Form
                onFinish={handleFinish}
                className="form--form"
                layout="vertical"
                wrapperCol={{span: 24}}
                name="register"
                autoComplete="off"
                
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "Tên không được để trống!" }]}
                  label="Tên đăng nhập"
                >
                  <Input className="input--css"/>
                  
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { 
                      required: true, 
                      message: 'Password không được bỏ trống!'
                    },{ 
                      min : 8, message: "Độ dài từ 8 kí tự" 
                    }]}
                  hasFeedback
                  label="Mật khẩu"
                >
                  
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="Confirm Password"
                  label="Nhập lại mật khẩu"
                  rules={[
                    { 
                      required: true, 
                      message: "Vui lòng xác nhận mật khẩu!" 
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Xác nhận mật khẩu không chính xác!'));
                      },
                    }), 
                    { 
                      min : 8, message: "Độ dài từ 8 kí tự" 
                    } 
                  ]}
                  hasFeedback
                >
                  
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Email không được bỏ trống!"}, {type:"email", message: "Email phải đúng định dạng!"}]}
                  label="Email"
                >
                  <Input className="input--css"/>
                </Form.Item>
                <Form.Item>
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
                        <a href="https://ebe9-2001-ee0-5321-4c10-ed8c-8b48-54bc-9568.ap.ngrok.io/auth/facebook">

                          Facebook
                        </a>
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

export default Register;