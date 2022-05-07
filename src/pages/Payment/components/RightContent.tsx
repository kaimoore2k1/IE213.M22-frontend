import React from "react";
import "../../../sass/Pay/RightContent.scss";
import Cart from "../../../modules/Pay/Cart"
import PayInformation from "../../../modules/Pay/PayInformation"
import PaymentFinished from "../../../modules/Pay/PaymentFinished";

interface Props {
  current: number
  callBackCurrent(childCurrent: number): void
}

function RightContent({ current, callBackCurrent }: Props) {
  switch (current) {
    case 0:
      return <Cart callBackCurrent={callBackCurrent} />
    case 1:
      return <PayInformation callBackCurrent={callBackCurrent} />
    case 3:
      return <PaymentFinished />
    default:
      return null
  }
}

export default RightContent;
