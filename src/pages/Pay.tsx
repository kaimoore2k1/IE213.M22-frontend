import React from "react";
import "../sass/Pay/Pay.scss";
import { Row, Col } from "antd";
import {
  LeftContentContent,
  LeftContentHeader,
} from "../modules/Pay/LeftContent";
import RightContent from "../modules/Pay/RightContent";

function Pay() {
  return (
    <div className="Pay__Layout">
      <Row className="Pay__Layout--Row">
        <Col className="Pay__Layout--Col" span={7}>
          <LeftContentHeader />
          <LeftContentContent />
        </Col>
        <Col className="Pay__Layout--Col" span={17}>
          <RightContent />
        </Col>
      </Row>
    </div>
  );
}

export default Pay;
