import React from "react";
import { Helmet } from "react-helmet";
import "../../sass/Service/Service.scss";

function Hospital() {
  return (
    <>
      <Helmet>
        <title>Bệnh viện thú cưng Sen shop thủ đức</title>
        <meta
          name="description"
          content="Tại Sen Shop, đội ngũ bác sĩ của chúng tôi được đào tạo để nâng cao
          năng lực chuyên môn và làm việc tại bệnh viện với cơ sở vật chất hiện
          đại nhằm duy trì tiêu chuẩn cao trong công tác chăm sóc sức khỏe vật
          nuôi."
        />
        <link
          rel="canonical"
          href="https://senshop.tech/dich-vu/benh-vien-thu-y"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Bệnh viện thú cưng Sen shop thủ đức"
        />
        <meta
          property="og:url"
          content="https://senshop.tech/dich-vu/benh-vien-thu-y"
        />
        <meta
          property="og:image"
          content="https://cdn.senshop.tech/thu-y.jpg"
        />
        <meta
          property="og:description"
          content="Tại Sen Shop, đội ngũ bác sĩ của chúng tôi được đào tạo để nâng cao
          năng lực chuyên môn và làm việc tại bệnh viện với cơ sở vật chất hiện
          đại nhằm duy trì tiêu chuẩn cao trong công tác chăm sóc sức khỏe vật
          nuôi."
        />
      </Helmet>
      <div className="Wrapper Hospital">
        <h1>BỆNH VIỆN THÚ CƯNG</h1>
        <p>
          Tại Sen Shop, đội ngũ bác sĩ của chúng tôi được đào tạo để nâng cao
          năng lực chuyên môn và làm việc tại bệnh viện với cơ sở vật chất hiện
          đại nhằm duy trì tiêu chuẩn cao trong công tác chăm sóc sức khỏe vật
          nuôi.
        </p>
        <img
          className="imgCustom"
          src="https://images.unsplash.com/photo-1581888227599-779811939961"
          alt="Hospital 01"
        ></img>
        <strong>
          <h2 className="pTitle">
            Tại bệnh viện thú cưng Sen Shop chúng tôi cung cấp dịch vụ thú cưng
            gồm:
          </h2>
        </strong>
        <img
          className="imgCustom"
          src="https://images.unsplash.com/photo-1596076463549-b4d123456b6b"
          alt="Hospital 02"
        ></img>
        <strong>
          <p className="pTitle service">Khám và điều trị</p>
        </strong>
        <p>
          Với đội ngũ bác sĩ thú y được đào tạo chính quy và tu nghiệp ở nước
          ngoài, chúng tôi cùng hội chẩn và đưa ra phương pháp điều trị phù hợp
          với thú cưng của bạn. Các bệnh thông thường bao gồm: bệnh về hệ hô
          hấp, hệ tiêu hóa, hệ tuần hoàn, tiết niệu, sinh dục, lông da, xương
          khớp, các bệnh về mắt và tai.
        </p>
        <strong>
          <p className="pTitle service">Xét nghiệm – Chẩn đoán hình ảnh</p>
        </strong>
        <p>
          Tại Sen Shop, các thiết bị y tế hiện đại được đầu tư nhằm phục vụ công
          tác chăm sóc vật nuôi. Khi cần thiết, các bác sĩ sẽ tiến hành các
          phương pháp chẩn đoán hình ảnh hoặc làm xét nghiệm để đưa ra hướng
          điều trị phù hợp với thú cưng của bạn.
        </p>
        <strong>
          <p className="pTitle">Chẩn đoán hình ảnh</p>
        </strong>
        <ul>
          <li>
            <b>Siêu âm:</b> Đây là phương pháp phổ biến dùng để đánh giá tình
            trạng sức khỏe vật nuôi và chẩn đoán bệnh trong các trường hợp mang
            thai, khối u, các bệnh ở vùng bụng và nhiều vấn đề khác.
          </li>
          <li>
            <b>Chụp X-quang:</b> máy X-quang thường được dùng để phát hiện các
            vấn đề về xương khớp, khối u, các vật thể lạ trong cơ thể như sỏi
            thận hoặc dị vật đường ruột và chẩn đoán nhiều bệnh khác.
          </li>
        </ul>
        <img
          className="imgCustom"
          src="https://petcare.vn/wp-content/uploads/2016/06/phimxray.jpg"
          alt="Hospital 03"
        ></img>
        <strong>
          <p className="pTitle">Các dịch vụ xét nghiệm</p>
        </strong>
        <ul>
          <li>Xét nghiệm máu.</li>
          <li>Xét nghiệm virus.</li>
          <li>Xét nghiệm kháng thể dại</li>
          <li>Xét nghiệm nước tiểu.</li>
          <li>Xét nghiệm da.</li>
          <li>Xét nghiệm phân.</li>
          <li>Kháng sinh đồ.</li>
        </ul>
        <p>
          Ngoài ra Sen Shop còn liên kết với các phòng xét nghiệm tại nước ngoài
          trong trường hợp thú cưng của bạn cần thêm xét nghiệm chuyên khoa
          khác.
        </p>
        <strong>
          <p className="pTitle service">Phẫu thuật</p>
        </strong>
        <p>
          Bệnh viện Thú y Sen Shop cung cấp dịch vụ phẫu thuật điều trị và phẫu
          thuật thẩm mỹ. Các dịch vụ chúng tôi cung cấp bao gồm:
        </p>
        <p className="pTitle">Phẫu thuật điều trị</p>
        <ul>
          <li>Cắt mọng mắt</li>
          <li>Mổ hernia</li>
          <li>Mổ bướu</li>
          <li>Nối xương</li>
          <li>Sỏi niệu</li>
          <li>Viêm tử cung</li>
        </ul>
        <p className="pTitle">Phẫu thuật khác</p>
        <ul>
          <li>Mổ đẻ</li>
          <li>Triệt sản chó mèo đực, cái</li>
          <li>Cắt tai</li>
          <li>Cắt đuôi</li>
          <li>Cắt mí mắt</li>
        </ul>
        <strong>
          <p className="pTitle service">
            Phòng chống kí sinh trùng – Tiêm phòng
          </p>
        </strong>
        <p className="pTitle">Tiêm phòng</p>
        <p>
          Vaccine đóng vai trò quan trọng trong việc hỗ trợ kiểm soát các bệnh
          truyền nhiễm. Để đảm bảo sức khỏe cho người và vật nuôi, thú cưng cần
          được tiêm phòng và tái chủng định kì theo hướng dẫn của bác sĩ.
        </p>
        <img
          className="imgCustom"
          src="https://petcare.vn/wp-content/uploads/2016/06/chichcho-1.jpg"
          alt="Hospital 04"
        ></img>
        <p className="pTitle">Phòng chống kí sinh trùng</p>
        <p>
          Ve, bọ chét, rận, ghẻ, giun sán là các loại sinh vật thường gặp ở chó
          mèo. Có nhiều cách để phòng ngừa và chữa trị các bệnh lí do chúng gây
          ra tuy nhiên nếu áp dụng không đúng thì quá trình điều trị có thể kéo
          dài, không hiệu quả và gây ảnh hưởng xấu đến sức khỏe thú cưng. Vì vậy
          chủ nuôi cần tham khảo ý kiến bác sĩ trước khi áp dụng bất kì biện
          pháp phòng và chữa bệnh cho thú cưng của mình.
        </p>
        <img
          className="imgCustom"
          src="https://petcare.vn/wp-content/uploads/2016/06/petcare_01-16-copy.jpg"
          alt="Hospital 04"
        ></img>
        <strong>
          <p className="pTitle service">Chăm sóc răng miệng</p>
        </strong>
        <p>
          Bệnh về răng miệng là một trong những căn bệnh thường gặp ở chó mèo.
          Bệnh gây ảnh hưởng đến sức khỏe và chất lượng cuộc sống của vật nuôi
          nếu không được điều trị sớm. Để phòng ngừa bệnh và hạn chế các tổn
          thương cho vật nuôi do vệ sinh răng chưa đúng cách, Sen Shop cung cấp
          dịch vụ chăm sóc răng miệng (chải răng, kiểm tra lợi và loại bỏ cặn
          bám làm vàng răng) cho chó mèo.
        </p>
        <img
          className="imgCustom"
          src="https://petcare.vn/wp-content/uploads/2016/06/rangcho.jpg"
          alt="Hospital 05"
        ></img>
        <p>
          Cũng như con người, thú cưng, đặc biệt là chó và mèo cần phải được
          chăm sóc răng miệng thường xuyên. Nếu thấy các biểu hiện sau, vui lòng
          đem thú cưng tới bác sĩ thú y để được kiểm tra và điều trị: <br />{" "}
          <br />
          Hơi thở hôi.
          <br />
          Đau miệng.
          <br />
          Gặp khó khăn khi ăn uống.
          <br />
          Mất răng hoặc răng lung lay.
          <br />
          Lấy chân chạm vào miệng hoặc cọ xát miệng xuống đất,…
          <br />
          Lợi chảy máu.
          <br />
          Cao răng vàng hoặc nâu trên răng.
          <br />
          Chảy nước miếng bất thường.
        </p>
        <strong>
          <p className="pTitle service">Cấp cứu 24/7</p>
        </strong>
        <p>
          Sen Shop cung cấp dịch vụ cấp cứu 24/7, kể cả ngày lễ. Hãy gọi cho chi
          nhánh Sen Shop gần nhất và mang thú cưng tới bệnh viện khi bạn thấy các
          biểu hiện :
        </p>
        <ul>
          <li>Thần kinh (sốc, co giật, hôn mê).</li>
          <li>Khó thở.</li>
          <li>Gãy xương.</li>
          <li>Tiêu chảy.</li>
          <li>Nôn mửa nặng.</li>
          <li>Bụng phình to.</li>
          <li>Tắc đường tiểu.</li>
          <li>Nuốt phải dị vật hoặc chất độc.</li>
          <li>Đẻ khó.</li>
          <li>Bị thương nặng.</li>
        </ul>
        <img
          className="imgCustom"
          src="https://petcare.vn/wp-content/uploads/2016/06/chobobot.jpg"
          alt="Hospital 06"
        ></img>
      </div>
    </>
  );
}

export default Hospital;
