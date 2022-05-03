import React, { useEffect } from "react";
import { CaretUpOutlined } from '@ant-design/icons'
import { BackTop } from "antd";
import "../../sass/Login-Logout/Login-Logout.scss";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      <BackTop>
        <CaretUpOutlined className='to-top' />
      </BackTop>
    </>
  );
}

export default ScrollToTop;
