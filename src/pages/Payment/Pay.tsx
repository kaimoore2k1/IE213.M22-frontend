import React from "react";
import "../../sass/Pay/Pay.scss";

import { Row, Col } from "antd";
import {
  LeftContentContent,
  LeftContentHeader,
} from "./components/LeftContent";
import { useState } from "react";
import RightContent from "./components/RightContent";
import { Helmet } from "react-helmet";

function Pay() {
  const [current, setCurrent] = useState(0);
  const callBackCurrent = (childCurrent: number) => {
    setCurrent(childCurrent);
  };
  return (
    <>
      <Helmet>
        <title>Trang giỏ hàng sen shop</title>
        <meta
          name="description"
          content="Khi bạn thêm một sản phẩm vào giỏ hàng sen shop, bạn sẽ thấy được thông tin sản phẩm bạn đã chọn và tổng giá tiền cho các sản phẩm của bạn. Bạn có thể đến các phương thức thanh toán trước hoặc sau khi nhận hàng, thuận tiện cho việc khách hàng có thể dễ dàng mua hàng trong website."
        />
        <link rel="canonical" href="https://senshop.tech/gio-hang" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Trang giỏ hàng sen shop" />
        <meta property="og:url" content="https://senshop.tech/gio-hang" />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/gio-hang.png"
        />
        <meta
          property="og:description"
          content="Khi bạn thêm một sản phẩm vào giỏ hàng sen shop, bạn sẽ thấy được thông tin sản phẩm bạn đã chọn và tổng giá tiền cho các sản phẩm của bạn. Bạn có thể đến các phương thức thanh toán trước hoặc sau khi nhận hàng, thuận tiện cho việc khách hàng có thể dễ dàng mua hàng trong website."
        />
      </Helmet>
      <div className="Pay__Layout">
        <Row className="Pay__Layout--Row">
          <Col
            className="Pay__Layout--Col"
            style={{ height: "100%" }}
            span={7}
            xs={0}
            sm={0}
            md={0}
            lg={7}
            xl={7}
          >
            <LeftContentHeader />
            <LeftContentContent current={current} />
          </Col>
          <Col
            className="Pay__Layout--Col"
            span={17}
            xs={24}
            sm={24}
            md={24}
            lg={17}
            xl={17}
          >
            <RightContent current={current} callBackCurrent={callBackCurrent} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Pay;
