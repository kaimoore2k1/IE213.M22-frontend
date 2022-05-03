import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";
import { Category } from "../../components/core";

function ServiceLayout() {
  return (
    <div className="store__layout">
      <Row>
        <Col
          span={7}
          className="store__layout--sidebar"
          xs={0}
          sm={0}
          md={0}
          lg={7}
          xl={7}
        >
          <Category />
        </Col>
        <Col
          span={17}
          className="store__layout--content"
          xs={24}
          sm={24}
          md={24}
          lg={17}
          xl={17}
        >
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default ServiceLayout;
