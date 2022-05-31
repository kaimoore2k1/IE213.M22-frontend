import { useMutation, useQuery } from "@apollo/client";
import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ADMIN } from "../../graphql/mutations/loginAdmin.graphql";
import { getAdminByName } from "../../graphql/schema/admin.graphql";
import { useAuthContext } from "../../modules/context/AuthContext";
import JWTManager from "../../modules/utils/jwt";
import "../../sass/Admin/AdminLoginForm.scss";

function AdminLoginForm() {
  
  const navigate = useNavigate();
  const {setIsAuthenticated, setIsAdmin, isAdmin, isAuthenticated} = useAuthContext() 
  const [adminLogin, {data, loading, error}] = useMutation(LOGIN_ADMIN);
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if(isAdmin) {
      navigate('/dashboard')
    }
  }, [isAdmin, navigate])
  
  const onFinish = async (values: any) => {
    const response = await adminLogin({
      variables : {username: values.username, password: values.password}
    })

    if (response.data?.adminLogin.success) {
      JWTManager.setToken(response.data.adminLogin.accessToken as string)
      setIsAuthenticated(true)
      setIsAdmin(true)
      navigate('/dashboard')
    } else {
      if (response.data?.adminLogin.message) setErrorMessage(response.data.adminLogin.message)
    }
  };
  return (
    <>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{
        height: "20%",
        width: "40%",
        position: "absolute",
        top: "20%",
        left: "25%",
      }}
    >
      <Form.Item name="logo">
        <img
          src="https://senshop.tech/static/media/logo.bc588d992055212e8997a878ac242940.svg"
          alt="logo"
          className="admin_logo"
          style={{ width: "80%", position: "relative", left: "50%" }}
        />
      </Form.Item>
      {errorMessage && <p style={{color:"red", textAlign: "center", fontSize:"20px"}}>{errorMessage}</p>}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Username không được để trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Password không được để trống!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
    
  );
}

export default AdminLoginForm;
