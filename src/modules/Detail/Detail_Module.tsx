import { Card } from "antd";
import { useState } from "react";
import "../../sass/DetailProduct/Detail_Module.scss";
import {
  initial_products,
  comment,
  Product,
  Comment,
  related_products,
} from "./Data";
import Review_images from "./Review_images";

import Feedback from "./Feedback";
import Information from "./Information";

function Detail_Module() {
  const [count, setCount] = useState(1);

  const [infoActiveTabKey, setInfoActiveTabKey] = useState("information");

  const tabList = [
    {
      id: "information",
      tab: "Thông tin chi tiết",
    },
    {
      id: "comment",
      tab: "Đánh giá",
    },
  ];

  const contentList = {
    tab1: initial_products.information,
    tab2: <p>Comment</p>,
  };

  const onTabChange = (key: any) => {
    const previousButton = document.getElementById(key);
    for (let index = 0; index < tabList.length; index++) {
      if (tabList[index].id != key) {
        changeBrownColor(document.getElementById(tabList[index].id));
      }
    }
    changeYelloColor(previousButton);
    setInfoActiveTabKey(key);
  };

  function changeYelloColor(button: any) {
    button.style.color = "#000000";
    button.style.backgroundColor = "#F3CF7A";
  }

  function changeBrownColor(button: any) {
    button.style.color = "#FFFFFF";
    button.style.backgroundColor = "#A25016";
  }

  const getContent = () => {
    switch (infoActiveTabKey) {
      case "information":
        return <Information />;
      case "comment":
        return <Feedback />;
    }
  };

  const handleSub = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleBuyProduct = () => {
    window.alert("Quý khách đã thêm sản phẩm vào giỏ hàng");
  };

  return (
    <section>
      <nav></nav>
      <div className="description">
        <div>
          <Review_images />
        </div>

        <div>
          <strong>{initial_products.name}</strong>
          <br />
          <br />
          <p>{initial_products.price}</p>
          <div id="amount">
            <div>Số lượng:</div>
            <button
              id="sub_button"
              onClick={() => {
                handleSub();
              }}
            >
              -
            </button>
            <div>{count}</div>
            <button
              id="add_button"
              onClick={() => {
                handleAdd();
              }}
            >
              +
            </button>
            <button onClick={handleBuyProduct}>Mua hàng</button>
          </div>
          <br />
          <div id="product_id">
            <p>Mã đơn hàng:</p>
            <span>{initial_products.id}</span>
          </div>
          <br />
          <div id="product_state">
            <p>Tình trạng:</p>
            <span>{initial_products.state}</span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="information_and_comment">
        <div className="tab">
          {tabList.map((tab) => (
            <div key={tab.id} id={tab.id} onClick={() => onTabChange(tab.id)}>
              {tab.tab}
            </div>
          ))}
        </div>
        <br />
        <br />
        <div>{getContent()}</div>
      </div>
      <div className="related_product">
        <p>SẢN PHẨM TƯƠNG TỰ</p>
        {related_products.map((rlp) => (
          <div>
            <img src={rlp.imagePath} alt="" />
            <p>ID {rlp.id}</p>
            <p>{rlp.name}</p>
            <p>{rlp.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Detail_Module;
