import React from "react";
import "../sass/Pay/Pay.scss";
import { Row, Col } from "antd";
import {
  LeftContentContent,
  LeftContentHeader,
} from "../modules/Pay/LeftContent";
import { useState } from "react";
import RightContent from "../modules/Pay/RightContent";

function Pay() {
  const [current, setCurrent] = useState(0)
  const callBackCurrent = (childCurrent: number) => {
    setCurrent(childCurrent)
  }
  return (
    <div className="Pay__Layout">
      <Row className="Pay__Layout--Row">
        <Col className="Pay__Layout--Col" span={7}>
          <LeftContentHeader />
          <LeftContentContent current={current}/>
        </Col>
        <Col className="Pay__Layout--Col" span={17}>
          <RightContent current={current} callBackCurrent={callBackCurrent} />
        </Col>
      </Row>
    </div>
  );
}

export default Pay;
