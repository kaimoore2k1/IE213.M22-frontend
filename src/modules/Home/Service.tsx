import { Button, Typography } from "antd";
import hospital from "../../assets/images/hospital.jpg";
import price from "../../assets/images/price.jpg";
import spa from "../../assets/images/spa.jpg";
import { useState, useEffect,useRef } from "react";
import { FaRegHospital, FaHandHoldingUsd } from "react-icons/fa";
import { GiHairStrands } from "react-icons/gi";
import "../../sass/Home/Home.scss";

function Service() {
  const { Title, Text } = Typography;
  const [change, setChange] = useState(0);
  let isPaused = useRef(false);
  useEffect(() => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const icons = $$(".home-service-item");
    const contents = $$(".home-service-block");
    $(".home-service-item.active")?.classList.remove("active");
    $(".home-service-block.active")?.classList.remove("active");
    icons[change].classList.add("active");
    contents[change].classList.add("active");
  }, [change]);
  useEffect(() => {
    let timer = setInterval(() => {
      if (!isPaused.current) setChange((change) => (change + 1) % 3);
    }, 3000);
    const serviceBlocks = document.querySelectorAll(".home-service-element");
    serviceBlocks.forEach((e) => {
      e.addEventListener("mouseover", () => {
        isPaused.current=true;
      });
      e.addEventListener("mouseleave", () => {
        isPaused.current=false;
      })
    });
    return () => {
      clearInterval(timer)
      
    };
  }, []);
  return (
    <>
      <section className="home-service-wrapper">
        <Title className="home-service-title">Dịch vụ cung cấp</Title>
        <ul className="home-service-ul">
          <li className="home-service-item active" onClick={() => setChange(0)}>
            <FaRegHospital className="service-icons--css" />
          </li>
          <li className="home-service-item" onClick={() => setChange(1)}>
            <GiHairStrands className="service-icons--css" />
          </li>
          <li className="home-service-item" onClick={() => setChange(2)}>
            <FaHandHoldingUsd className="service-icons--css" />
          </li>
        </ul>
        <div
          className="home-service-block  active"
          
        >
          <div className="home-service-element ">
            <img src={hospital} alt="dich-vu-kham-benh" />

            <div className="service-block-des1">
              <h2 className="service-block-h2">Bệnh viện thú y</h2>
              <p className="service-block-p">
                Bệnh viện thú y được trang bị các công nghệ mới nhất. Chúng tôi
                phục vụ 24/7 với các đội ngũ nhân viên có trình độ chuyên môn
                cao để chăm sóc những con lông xù của bạn.
              </p>
              <Button type="primary" htmlType="submit">
                Xem thêm
              </Button>
            </div>
          </div>
        </div>

        <div
          className="home-service-block  "
          
        >
          <div className="home-service-element ">
            <div className="service-block-des2">
              <h2 className="service-block-h2">Chăm sóc thú cưng</h2>
              <ul className="service-block-ul">
                <li>Thẩm mỹ răng nanh</li>
                <li>Cắt móng tay</li>
                <li>Spa</li>
                <li>Bồn tắm</li>
                <li>Điều trị da liễu đặc biệt</li>
              </ul>

              <Button type="primary" htmlType="submit">
                Xem thêm
              </Button>
            </div>
            <img src={spa} alt="cat-tia-long" />
          </div>
        </div>

        <div
          className="home-service-block  "
          
        >
          <div className="home-service-element">
            <img src={price} alt="gia-ca" />

            <div className="service-block-des1">
              <h2 className="service-block-h2">Giá cả hợp lý</h2>
              <p className="service-block-p">
                Sản phẩm đa dạng, nhiều thể loại và giá cả hợp lí. Cam kết và
                bảo hành các loại thú cưng giá trị cao. Chất lượng uy tín đáng
                để cạnh tranh lâu dài..
              </p>
              <Button type="primary" htmlType="submit">
                Xem thêm
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Service;
