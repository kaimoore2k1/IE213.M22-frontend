import { useState, useEffect, useRef } from "react";
import React from "react";
import "../../sass/Login-Logout/Login-Logout.scss";
import { Form, Input, Button, Typography } from "antd";
import { Login, Register } from "./components";
import { Helmet } from "react-helmet";

function LoginRegister() {
  const [clickChange, setClickChange] = useState<boolean>(true);

  let className = "active";
  let idLogin = document.getElementById("loginRef");
  let idRegister = document.getElementById("registerRef");

  if (clickChange === true) {
    idLogin?.classList.add(className);
    idRegister?.classList.remove(className);
  } else {
    idRegister?.classList.add(className);
    idLogin?.classList.remove(className);
  }
  return (
    <>
      <Helmet>
        <title>Đăng nhập, đăng ký tài khoản website sen shop</title>
        <meta
          name="description"
          content="Để có thể sử dụng tốt hơn bạn có thể đăng ký hoặc đăng nhập tài khoản vào website. Khi đó bạn có thể đánh giá các sản phẩm, phản hồi những ý tưởng thông tin hữu ích cho chúng tôi."
        />
        <link rel="canonical" href="https://senshop.tech/login" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Đăng nhập, đăng ký tài khoản website sen shop"
        />
        <meta property="og:url" content="https://senshop.tech/login" />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/Blog/SenShop.jpg"
        />
        <meta
          property="og:description"
          content="Để có thể sử dụng tốt hơn bạn có thể đăng ký hoặc đăng nhập tài khoản vào website. Khi đó bạn có thể đánh giá các sản phẩm, phản hồi những ý tưởng thông tin hữu ích cho chúng tôi."
        />
      </Helmet>
      <div className="login-logout__wrapper">
        <div
          className="login-logout--login active"
          id="loginRef"
          onClick={() => setClickChange(true)}
        >
          Đăng nhập
        </div>

        <div
          className="login-logout--logout"
          id="registerRef"
          onClick={() => setClickChange(false)}
        >
          Đăng ký
        </div>
      </div>
      {clickChange === true ? <Login /> : <Register />}
    </>
  );
}
export default LoginRegister;
