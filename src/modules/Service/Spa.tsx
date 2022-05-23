import React from "react";
import { Helmet } from "react-helmet";
import "../../sass/Service/Service.scss";

function Spa() {
  return (
    <>
      <Helmet>
        <title>Dịch vụ Spa massage cho thú cưng</title>
        <meta
          name="description"
          content=" Spa Thú Cưng Sen Shop tự hào là không gian thư giãn thoải mái, thân
          thiện cho các bé. Giúp các bé tăng cường sức khỏe và ngoan ngoãn hơn."
        />
        <link rel="canonical" href="https://senshop.tech/dich-vu/spa" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Dịch vụ Spa massage cho thú cưng" />
        <meta property="og:url" content="https://senshop.tech/dich-vu/spa" />
        <meta property="og:image" content="https://cdn.senshop.tech/spa.png" />
        <meta
          property="og:description"
          content="Spa Thú Cưng Sen Shop tự hào là không gian thư giãn thoải mái, thân
          thiện cho các bé. Giúp các bé tăng cường sức khỏe và ngoan ngoãn hơn."
        />
      </Helmet>
      <div className="Wrapper Spa">
        <h1>DỊCH VỤ SPA</h1>
        <p>
          Spa Thú Cưng Sen Shop tự hào là không gian thư giãn thoải mái, thân
          thiện cho các bé.
          <br />
          Chúng tôi, những người yêu thú, thương thú hết mực, chúng tôi xem thú
          cưng là bạn. Mà những người bạn thì luôn hiểu và thông cảm cho nhau.
          Những người bạn thú này cũng cần được tự do vui chơi, được chăm sóc ân
          cần, và chủ chủ nhân luôn muốn các bé trở nên xinh đẹp và nổi bật hơn.
        </p>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-spa.jpg"
          alt="Spa 01"
        ></img>
        <h2>
          Tại spa thú cưng Sen Shop chúng tôi cung cấp dịch vụ spa thú cưng gồm:
        </h2>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-spa-1.jpg"
          alt="Spa 02"
        ></img>
        <p className="pTitle">Dịch vụ tắm cho thú cưng</p>
        <p>
          Thú cưng của bạn sẽ được kiểm tra sức khỏe tổng thể để đánh giá tình
          trạng và lựa chọn dòng sản phẩm sữa tắm phù hợp.
        </p>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-spa-2.jpg"
          alt="Spa 03"
        ></img>
        <p className="pTitle">Dịch vụ tỉa lông thú cưng</p>
        <p>
          Chó, mèo khi được chăm sóc cắt tỉa lông thường xuyên sẽ trông xinh đẹp
          và có sức khỏe tốt hơn.
          <br />
          Thú cưng khi đến Spa sẽ được thăm khám sức khỏe tổng quát, đưa ra lời
          khuyên về loại hình dịch vụ cần phải làm và lựa chọn hình thức dịch vụ
          phù hợp nhất.
        </p>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-spa-3.jpg"
          alt="Spa 04"
        ></img>
        <p className="pTitle">Dịch vụ nhuộm lông cho thú cưng</p>
        <p>
          Tùy vào đặc điểm của thú cưng, và ý thích chủ nhân mà những người thợ
          kinh nghiệm của Sen Shop tư vấn màu nhuộm như ý. Thuốc nhuộm là những
          sản phẩm lượng nếu không sẽ gây ảnh hưởng không tốt đến sức khỏe thú
          cưng.
        </p>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-spa-4.jpg"
          alt="Spa 05"
        ></img>
        <p className="pTitle">Vệ sinh cơ thể và massage thư giãn</p>
        <p>
          Gói dịch vụ vệ sinh cơ thể, massage thư giãn kết hợp với các bài tập
          vận động giúp các bé thoải mái, xả stress.
        </p>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-spa-5.jpg"
          alt="Spa 06"
        ></img>
        <div className="moreInfor">
          <p>
            Liên hệ ngay với chúng tôi theo thông tin bên dưới để thú cưng của
            bạn có thể nhận được những dịch vụ tốt nhất và những Voucher vô cùng
            có giá trị !
            <br />
            Góp ý và phản hồi ngay cho chúng tôi nhé ! Hẹn gặp bạn và các bé tại
            Sen Shop !
          </p>
        </div>
      </div>
    </>
  );
}

export default Spa;
