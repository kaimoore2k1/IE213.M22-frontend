import React from "react";
import "../../sass/Pay/RightContent.scss";
import Cart from "./Cart"
import PayInformation from "./PayInformation"

interface CurrentProps {
  current:number
  callBackCurrent(childCurrent: number): void
}

function RightContent({current, callBackCurrent}:CurrentProps) {
  switch (current) {
    case 0:
      return <Cart callBackCurrent={callBackCurrent} />
    case 1:
      return <PayInformation />
    default:
      return null
  }
}

export default RightContent;
