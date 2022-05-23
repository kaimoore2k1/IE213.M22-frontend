import "../../sass/Intro/Intro.scss";
import { Helmet } from "react-helmet";
import { Col, Row, Typography } from "antd";
import { IntroMember, IntroService } from "./components";
import about from "../../assets/images/about.jpg";
import avatar from "../../assets/images/avatar.jpg";
import more from "../../assets/images/more.png";
function Intro() {
  const { Title, Text } = Typography;
  return (
    <>
      <Helmet>
        <title>Giới thiệu website thú cưng Sen Shop Thủ Đức</title>
        <meta
          name="description"
          content="Một trong những yếu tốt hàng đầu trong việc chăm sóc, huấn luyện thú cưng đó là chọn được cửa hàng thú cưng uy tín. Với Sen shop chúng tôi luôn đặt chất lượng sản phẩm, trải nghiệm khách hàng làm mục tiêu hàng đầu."
        />
        <link rel="canonical" href="https://senshop.tech/gioi-thieu" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Giới thiệu website thú cưng Sen Shop Thủ Đức"
        />
        <meta property="og:url" content="https://senshop.tech/gioi-thieu" />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/Blog/SenShop.jpg"
        />
        <meta
          property="og:description"
          content="Một trong những yếu tốt hàng đầu trong việc chăm sóc, huấn luyện thú cưng đó là chọn được cửa hàng thú cưng uy tín. Với Sen shop chúng tôi luôn đặt chất lượng sản phẩm, trải nghiệm khách hàng làm mục tiêu hàng đầu"
        />
      </Helmet>
      <section className="intro-member">
        <div className="intro-member__text">
          <Title style={{ color: "#FEA135", fontWeight: "bold" }}>
            Đội ngũ nhân viên
          </Title>
          <Text style={{ fontSize: "20px" }}>
            Nhiệt huyết, năng động luôn đi đầu trong các công nghệ
          </Text>
        </div>
        <div className="intro-member__elements">
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={12} lg={8}>
              <IntroMember
                nameMember="NGUYỄN NHỰT HÀO"
                posMember="NHÀ PHÁT TRIỂN"
                srcImg={avatar}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroMember
                nameMember="TRẦN PHAN HẢI ĐĂNG"
                posMember="NHÀ PHÁT TRIỂN"
                srcImg={avatar}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroMember
                nameMember="NGUYỄN HỮU TÂM"
                posMember="NHÀ PHÁT TRIỂN"
                srcImg={avatar}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroMember
                nameMember="NGUYỄN ĐĂNG ĐỊNH"
                posMember="NHÀ PHÁT TRIỂN"
                srcImg={avatar}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroMember
                nameMember="TRẦN HỮU TÌNH"
                posMember="NHÀ PHÁT TRIỂN"
                srcImg={avatar}
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroMember
                nameMember="PHẠM KIM CHIẾN"
                posMember="NHÀ PHÁT TRIỂN"
                srcImg={avatar}
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className="intro-about">
        <div className="about-img">
          <img src={about} alt="gioi-thieu-ve-chung-toi" />
        </div>
        <div className="about-text">
          <Title className="about-text-header">SEN SHOP</Title>
          <div className="block-divider"></div>
          <p className="about-text-content">
            Một trong những yếu tốt hàng đầu trong việc chăm sóc, huấn luyện thú
            cưng đó là chọn được cửa hàng thú cưng uy tín. Với Sen shop chúng
            tôi luôn đặt chất lượng sản phẩm, trải nghiệm khách hàng làm mục
            tiêu hàng đầu.
          </p>
          <p className="about-text-content">
            Sen shop phát triển với định hướng mang lại cho khách hàng những sản
            phẩm dành cho thú cưng chất lượng nhất. Mặc dù chỉ mới thành lập vào
            tháng 4/2022 nhưng với chiến lược kinh doanh hiệu quả công ty đã đạt
            được những thành tựu và khẳng định vị thế trên thị trường Việt Nam.
          </p>
        </div>
      </section>
      <section className="intro-service">
        <div className="block-divider"></div>
        <div className="intro-service-element">
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={12} lg={8}>
              <IntroService
                serTitle="CHẤT LƯỢNG"
                serDes="Là một trong những website đi đầu trong 
                        việc cung cấp các sản phẩm về thú cưng 
                        tốt nhất Việt Nam"
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroService
                serTitle="ƯU ĐÃI"
                serDes="Cập nhật đa dạng các chương trình khuyến
                        mãi với phương châm sản phẩm chất lượng
                        giá cả hợp lý."
              />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <IntroService
                serTitle="HỖ TRỢ"
                serDes="Đội ngũ chăm sóc khách hàng chuyên môn
                        cao sẵn sàng giải đáp thắc mắc của khách
                        hàng. Liên hệ ngay để trải nghiệm. "
              />
            </Col>
          </Row>
        </div>
      </section>
      <section className="intro-more">
        <div className="block-divider"></div>
        <img src={more} alt="tam-nhin-su-menh" className="intro-more-img" />
      </section>
    </>
  );
}
export default Intro;
