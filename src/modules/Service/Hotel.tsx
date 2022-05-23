import React from "react";
import { Helmet } from "react-helmet";
import "../../sass/Service/Service.scss";

function Hotel() {
  return (
    <>
      <Helmet>
        <title>Dịch vụ trông giữ thú cưng sen shop</title>
        <meta
          name="description"
          content="Dịch vụ lưu trú trông giữ chó mèo Sen Shop tự hào là khách sạn chó mèo
          hiện đại, thân thiện nhất tại thành phố. Với những dụng cụ chăm sóc
          cho mèo hiện đại, đội ngũ nhân viên được huấn luyện nghiệp vụ tốt, đây
          sẽ là nơi để bạn an tâm gửi gắm thú cưng trong những ngày bận việc
          hoặc đi công tác xa."
        />
        <link rel="canonical" href="https://senshop.tech/dich-vu/trong-giu" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Dịch vụ trông giữ thú cưng sen shop"
        />
        <meta
          property="og:url"
          content="https://senshop.tech/dich-vu/trong-giu"
        />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/trong-giu.jpg"
        />
        <meta
          property="og:description"
          content="Dịch vụ lưu trú trông giữ chó mèo Sen Shop tự hào là khách sạn chó mèo
          hiện đại, thân thiện nhất tại thành phố. Với những dụng cụ chăm sóc
          cho mèo hiện đại, đội ngũ nhân viên được huấn luyện nghiệp vụ tốt, đây
          sẽ là nơi để bạn an tâm gửi gắm thú cưng trong những ngày bận việc
          hoặc đi công tác xa."
        />
      </Helmet>
      <div className="Wrapper Hotel">
        <h1>DỊCH VỤ LƯU TRÚ</h1>
        <p>
          Dịch vụ lưu trú trông giữ chó mèo Sen Shop tự hào là khách sạn chó mèo
          hiện đại, thân thiện nhất tại thành phố. Với những dụng cụ chăm sóc
          cho mèo hiện đại, đội ngũ nhân viên được huấn luyện nghiệp vụ tốt, đây
          sẽ là nơi để bạn an tâm gửi gắm thú cưng trong những ngày bận việc
          hoặc đi công tác xa.
          <br />
          Với tình yêu thương đặc biệt với những “ông hoàng, bà thượng”, các
          dịch vụ lưu trú Sen Shop đã chuẩn bị một môi trường đa dạng, thoải mái
          để phục vụ thú cưng.
        </p>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-l%C6%B0u-tr%C3%BA.jpg"
          alt="Hotel 01"
        ></img>
        <p className="pTitle">Sen Shop luôn sẵn có:</p>
        <ul>
          <li>
            Có đầy đủ không gian, ánh sáng tự nhiên cho thú cưng hoạt động
          </li>
          <li>Camera giám sát 24/24.</li>
          <li>Nhân viên vệ sinh túc trực 24/7 để chăm sóc và dọn vệ sinh.</li>
          <li>
            Khách sạn thú cưng có nhân viên y tế theo dõi sức khỏe của các bé
            thường xuyên.
          </li>
          <li>
            Nguồn thức ăn được cung cấp đầy đủ, chế độ ăn đa dạng để các bé thấy
            ngon miệng.
          </li>
          <li>
            Ngoài ra, các bé còn được tập thể dục đều đặn hàng ngày để nâng cao
            sức khỏe.
          </li>
          <li>
            Các khu vực spa, tắm, vệ sinh, grooming… luôn sẵn sàng để hỗ trợ các
            bé, giúp các bé thoải mái khi lưu trú tại đây.
          </li>
          <li>
            “Con sen” chăm sóc đều là những người yêu thương thú cưng hết mực và
            đã có kinh nghiệm lâu năm trong việc chăm sóc và trông giữ chó mèo
            lâu năm.
          </li>
          <li>Hệ thống khử mùi, hút mùi và lọc ẩm được trang bị hiện đại.</li>
          <li>
            Chúng tôi luôn có ghi chú đầy đủ về tình trạng sức khỏe, thức ăn ưa
            thích, đồ chơi của các bé để tiện cho việc chăm sóc các bé thật tốt
            nhất khi các bé ở tại đây
          </li>
          <li>Giờ nhận và đón thú cưng linh động.</li>
        </ul>
        <img
          className="imgCustom"
          src="https://petcarethuduc.com/wp-content/uploads/2021/11/img-d%E1%BB%8Bch-v%E1%BB%A5-l%C6%B0u-tr%C3%BA-1.jpg"
          alt="Hotel 02"
        ></img>
        <p className="moreInfor">
          Để khách hàng yên tâm hơn về dịch vụ lưu trú chó mèo, chim thú, vật
          cưng tại SEN SHOP, chúng tôi luôn chào đón khách hàng ghé đến tham
          quan bất cứ lúc nào. Để đến tham quan vui lòng gọi điện hẹn lịch và
          tới trước 17h hàng ngày, vì sau khoảng thời gian đó, chúng tôi muốn
          dành không gian yên tĩnh nhất cho các bé.
        </p>
      </div>
    </>
  );
}

export default Hotel;
