import React from "react";
import { CaretUpOutlined } from '@ant-design/icons'
import { BackTop } from "antd";
import "../../sass/Login-Logout/Login-Logout.scss";

function ScrollToTop() {
  return (
    <>
      <BackTop>
        <CaretUpOutlined className='to-top' />
      </BackTop>
    </>
  );
}

export default ScrollToTop;
