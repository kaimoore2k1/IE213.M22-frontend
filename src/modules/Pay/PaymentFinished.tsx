import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { CartFinishIcon } from "../../assets/icons/CartFinishIcon";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { LASTEDBILL } from "../../graphql/mutations/bill.graphql";
import { ClearProductCart } from "../../graphql/schema/user.graphql";
import JWTManager from "../../modules/utils/jwt";


function PaymentFinished() {
  const currentUsername = String(JWTManager.getUsername());
  window.localStorage.setItem("products", "[]");
  const [updateProductCart, dataUpdateProductCart] = useMutation(ClearProductCart);
  updateProductCart({
    variables: { username: currentUsername},
  })
  const navigate = useNavigate();
  const bill = useQuery(LASTEDBILL)
  const initialValues:any = {total: 0}
  const [data, setData] = useState(initialValues)
  console.log(data)
  useEffect(() => {
    console.log("a")
    if(bill.data) {
      if(bill.data.getTheLastedBill !== data) {
        setData(bill.data.getTheLastedBill)
      }
    }
  }, [bill.data])
  const dataFormat = data.total.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })
  return (
    <div className="PaymentFinished">
      <CartFinishIcon className="CartFinishIcon" />
      <Typography.Text className="Header">
        Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý !
      </Typography.Text>
      <div className="DetailID">
        <Typography.Text>Mã đơn hàng: </Typography.Text>
        <Typography.Text className="fontBold">{data._id}</Typography.Text>
      </div>
      <div className="DetailDay">
        <Typography.Text>Ngày: </Typography.Text>
        <Typography.Text className="fontBold">{data.date}</Typography.Text>
      </div>
      <div className="DetailTotal">
        <Typography.Text>Tổng cộng: </Typography.Text>
        <Typography.Text className="fontBold" style={{ color: "#FEA135" }}>
          {dataFormat}
        </Typography.Text>
      </div>
      <div className="DetailPaymentMethod">
        <Typography.Text>Phương thức thanh toán: </Typography.Text>
        <Typography.Text className="fontBold">
          {data.paymentMethod === 'transfer'?'Chuyển khoản ngân hàng':'Trả tiền mặt khi nhận hàng'}
        </Typography.Text>
      </div>
      <Button className="OtherProduct" onClick={() => navigate(-1)}>XEM SẢN PHẨM KHÁC</Button>
    </div>
  );
}

export default PaymentFinished;
