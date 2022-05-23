import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Content } from "./Content";

export interface content {
  path: string;
  className: string;
  img: {
    src: string;
    alt: string;
  };
  content: {
    h2: string;
    p: string;
  };
}

function Service() {
  return (
    <>
      <Helmet>
        <title>Sen Shop - Dịch vụ thú cưng, chăm sóc thú cưng ở thủ đức</title>
        <meta
          name="description"
          content="Dịch vụ thú cưng, chăm sóc thú cưng ở thủ đức đem lại trải nghiệm hài lòng cho khách hàng, giúp thú cưng được thoải mái, thư giãn,...Mỗi khi bận rộn bạn đều có thể mang thú cưng đến gửi và chúng tôi sẽ nhiệt tình chăm sóc cho thú cưng của bạn."
        />
        <link rel="canonical" href="https://senshop.tech/dich-vu" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Sen Shop - Dịch vụ thú cưng, chăm sóc thú cưng ở thủ đức"
        />
        <meta property="og:url" content="https://senshop.tech/dich-vu" />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/spa-thu-cung.png"
        />
        <meta
          property="og:description"
          content="Dịch vụ thú cưng, chăm sóc thú cưng ở thủ đức đem lại trải nghiệm hài lòng cho khách hàng, giúp thú cưng được thoải mái, thư giãn,...Mỗi khi bận rộn bạn đều có thể mang thú cưng đến gửi và chúng tôi sẽ nhiệt tình chăm sóc cho thú cưng của bạn."
        />
      </Helmet>

      <h2 style={{ textAlign: "center" }}>
        Sen Shop - Dịch vụ thú cưng thủ đức
      </h2>
      <p style={{ textAlign: "center" }}>
        Dịch vụ thú cưng ở thủ đức đem lại trải nghiệm hài lòng cho khách hàng,
        giúp thú cưng được thoải mái, thư giãn,...
      </p>
      {Content.map((content, index) => (
        <Link key={index} to={content.path}>
          <div className={content.className}>
            <img src={content.img.src} alt={content.img.alt} />
            <div className="main-content">
              <h2>{content.content.h2}</h2>
              <p>{content.content.p}</p>
            </div>
            <span>Bấm vào xem chi tiết</span>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Service;
