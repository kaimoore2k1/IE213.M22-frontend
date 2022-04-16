import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { BackTop } from "antd";
import "../../sass/Login-Logout/Login-Logout.scss";

function ScrollToTop() {
  return (
    <>
      <BackTop>
        <div>
          <FaAngleUp className="scrollTop-position scrollTop-style" />
        </div>
      </BackTop>
    </>
  );
}

export default ScrollToTop;
