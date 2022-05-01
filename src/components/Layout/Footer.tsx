import "../../sass/Home/Footer.scss";
import {Row, Col} from "antd";

function Footer() {
  return (
    <section className="footer-container">
      <Row className="footer-content" >
        <Col xl={9} lg={8}  md={8} sm={24} xs={24} className="footer-left-content" >
          <div className="logo-container">
            <img
              src={require("../../assets/images/footer/SenShop-Logo-clone.png")}
              alt="Sen shop logo"
            />
          </div>

          <p>Bạn đang cô đơn? Bạn muốn có tình yêu mới?</p>
          <p>Hãy đến SenShop và mang về 1 em pet dễ thương nào!</p>
          <div id="content-3">
            <img
              src={require("../../assets/images/footer/image-7.png")}
              alt="logo"
            />
            <div className="content-3_right">
              <p>Đảm bảo uy tín, chất lượng,..</p>{" "}
              <p> Tạo dựng niềm tin cho khách hàng!</p>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={8} md={8} sm={24} xs={24} className="footer-center-content" >
          <p>Về chúng tôi</p>
          <ul>
            <li>Giới thiệu</li>
            <li>Liên hệ</li>
            <li>Điều khoản</li>
          </ul>
          <p>Theo dõi</p>
          <div>
            <a href="https://www.facebook.com/">
              <img
                src={require("../../assets/images/footer/facebook_icon.png")}
                alt="facebook icon"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src={require("../../assets/images/footer/youtube_icon.png")}
                alt="youtube icon"
              />
            </a>
            <a href="https://zalo.me/pc">
              <img
                src={require("../../assets/images/footer/zalo_icon.png")}
                alt="zalo icon"
              />
            </a>
          </div>
        </Col>
        <Col xl={9} lg={8} md={8} sm={24} xs={24} className="footer-right-content">
          <p>Dịch vụ thú cưng Senshop</p>
          <div>
            <img
              src={require("../../assets/images/footer/address.png")}
              alt="address icon"
            />
            <p>
              Địa chỉ: Số 113, khu phố 6, phường Linh Trung, TP. Thủ Đức, TPHCM
            </p>
          </div>
          <div>
            <img
              src={require("../../assets/images/footer/phone_number.png")}
              alt="phone number"
            />
            <p>Điện thoại: 0988 712 523</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/footer/email.png")}
              alt="email"
            />
            <p>Email: Senshoptd@gmail.com</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/footer/website.png")}
              alt="website"
            />
            <p>Website: www.senshop.tech</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/footer/license.png")}
              alt="license"
            />
            <p>
              Giấy phép kinh doanh số 3D-69-67 do Hiệp hội kinh doanh thú cưng
              toàn cầu chứng nhận
            </p>
          </div>
        </Col>
      </Row>
      <div id="copyright">
        Copyright © 2022. Bản quyền được sở hữu bởi Senshop
      </div>
    </section>
  );
}

export default Footer;
