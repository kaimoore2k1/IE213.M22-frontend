import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../../sass/Admin/AdminLoginForm.scss";
import { useMutation } from "@apollo/client";
import JWTManager from "../../modules/utils/jwt";
import { useNavigate } from "react-router-dom";
import { LOGIN_ADMIN } from "../../graphql/mutations/loginAdmin.graphql";
import { useAuthContext } from "../../modules/context/AuthContext";

function AdminLoginForm() {
  const navigate = useNavigate();
  const {setIsAuthenticated} = useAuthContext() 
  const [adminLogin, {data, loading, error}] = useMutation(LOGIN_ADMIN);
  const [errorMessage, setErrorMessage] = useState("")
  if (loading) return <p>loading....</p>;
  if (error) return <p>error</p>;
  const onFinish = async (values: any) => {
    const response = await adminLogin({
      variables : {username: values.username, password: values.password}
    })

    if (response.data?.adminLogin.success) {
      JWTManager.setToken(response.data.adminLogin.accessToken as string)
      console.log(response.data.adminLogin.accessToken as string)
      setIsAuthenticated(true)
      console.log(response.data.adminLogin.accessToken)
      navigate('/dashboard')
    } else {
      if (response.data?.adminLogin.message) setErrorMessage(response.data.adminLogin.message)
    }
  };
  return (
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
  );
}

export default AdminLoginForm;
