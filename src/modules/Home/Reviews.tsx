import "../../sass/Home/Reviews.scss";
import { Row, Col } from "antd";

function Reviews() {
    return (
        <section className="content">
            <p>Đánh giá của khách hàng</p>
            <Row gutter={[20,20]}>
                <Col xl={8} lg={8} md={12} xs={24}>
                    <div id="image1">
                        <img src={require("./Assets/Mision-min-1.png")} alt="image 1" />
                        <p id="title1">Thầy ông nội</p>
                        <svg height="100" width="340">
                            <ellipse cx="170" cy="50" rx="170" ry="50" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                        <p>Các bạn sẽ không tìm được shop thú cưng nào tuyệt vời như Sen Shop.
                            Đến với Sen Shop thú cưng của bạn sẽ được trải nghiệm mọi dịch vụ độc nhất vô nhị ở Việt Nam,
                            làm cho các hoàng thượng có được cảm giác sung sướng nhất
                        </p>
                        <img id="footprint1" src={require("./Assets/Group-1.png")} alt="group1" />
                    </div>
                </Col>
                <Col xl={8} lg={8} md={12} xs={24}>
                    <div id="image2">
                        <img src={require("./Assets/Mision-min-2.png")} alt="mission 2" />
                        <p id="title2">Bé Bo</p>
                        <svg height="100" width="340">
                            <ellipse cx="170" cy="50" rx="170" ry="50" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                        <p>Mèo méo meo mèo meo con mèo ngu ngốc ngọt ngào đáng iu cute phô mai que xinh chào cả nhà.
                            Shop dịch vụ quá tệ, nhân viên hóng hách, cách đối xử cũng như chăm sóc thú cưng rất thô bạo mặc
                            dù tôi chưa đến shop lần nào
                        </p>
                        <img id="footprint2" src={require("./Assets/Group-2.png")} alt="" />
                    </div>
                </Col>
                <Col xl={8} lg={8} md={12} xs={24}>
                    <div id="image3">
                        <img src={require("./Assets/Mision-min-3.png")} alt="mission 3" />
                        <p id="title3">Phương Hằng</p>
                        <svg height="100" width="340">
                            <ellipse cx="170" cy="50" rx="170" ry="50" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                        <p>Lần đầu tiên đến với SenShop, tôi thật sự bất ngờ với dịch vụ ở đây. Thú cưng ở đây được chăm sóc
                            rất tốt vì vậy không cần lo tình trạng về sức khỏe của pet khi mua về. Các nhân viên Spa nhiệt tình,
                            yêu nghề,...
                        </p>
                        <img id="footprint3" src={require("./Assets/Group-1.png")} alt="" />
                    </div>
                </Col>

            </Row>


        </section>
    );
}

export default Reviews;