import React from "react";
import { Button, Typography } from "antd";
import { CartFinishIcon } from "../../assets/icons/CartFinishIcon";
import { useNavigate } from "react-router-dom";

function PaymentFinished() {
  const navigate = useNavigate();
  const day = new Date();
  let textDay = day.toLocaleDateString();
  return (
    <div className="PaymentFinished">
      <CartFinishIcon className="CartFinishIcon" />
      <Typography.Text className="Header">
        Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý !
      </Typography.Text>
      <div className="DetailID">
        <Typography.Text>Mã đơn hàng: </Typography.Text>
        <Typography.Text className="fontBold"> 35497</Typography.Text>
      </div>
      <div className="DetailDay">
        <Typography.Text>Ngày: </Typography.Text>
        <Typography.Text className="fontBold">{textDay}</Typography.Text>
      </div>
      <div className="DetailTotal">
        <Typography.Text>Tổng cộng: </Typography.Text>
        <Typography.Text className="fontBold" style={{ color: "#FEA135" }}>
          539,000 ₫
        </Typography.Text>
      </div>
      <div className="DetailPaymentMethod">
        <Typography.Text>Phương thức thanh toán: </Typography.Text>
        <Typography.Text className="fontBold">
          Trả tiền mặt khi nhận hàng
        </Typography.Text>
      </div>
      <Button className="OtherProduct" onClick={() => navigate(-1)}>XEM SẢN PHẨM KHÁC</Button>
    </div>
  );
}

export default PaymentFinished;
