import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import { Category } from "../../components/core";
import "../../sass/Store/Store.scss";

function ServiceLayout() {
  return (
    <div className="store__layout">
      <Row gutter={32}>
        <Col
          span={5}
          className="store__layout--sidebar"
          xs={0}
          sm={0}
          md={0}
          lg={5}
          xl={5}
        >
          <Category />
        </Col>
        <Col
          span={19}
          className="store__layout--content"
          xs={24}
          sm={24}
          md={24}
          lg={19}
          xl={19}
        >
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default ServiceLayout;
