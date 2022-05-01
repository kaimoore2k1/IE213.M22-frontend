import React from "react";
import "../../sass/Pay/Pay.scss";

import { Row, Col } from "antd";
import {
  LeftContentContent,
  LeftContentHeader,
} from "./components/LeftContent";
import { useState } from "react";
import RightContent from "./components/RightContent";

function Pay() {
  const [current, setCurrent] = useState(0);
  const callBackCurrent = (childCurrent: number) => {
    setCurrent(childCurrent);
  };
  return (
    <div className="Pay__Layout">
      <Row className="Pay__Layout--Row">
        <Col className="Pay__Layout--Col" style={{ height: "100%" }} span={7} xs={0} sm={0} md={0} lg={7} xl={7}>
          <LeftContentHeader />
          <LeftContentContent current={current} />
        </Col>
        <Col className="Pay__Layout--Col" span={17} xs={24} sm={24} md={24} lg={17} xl={17}>
          <RightContent current={current} callBackCurrent={callBackCurrent} />
        </Col>
      </Row>
    </div>
  );
}

export default Pay;
