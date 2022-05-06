import { decode } from "html-entities";
import toSlug from "../../assets/toSlug";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import BlogSingle from "./components/BlogSingle";
import BlogSideCardList from "../Blog/components/BlogSideCardList";
import {blogList} from "../Blog/data";
import "../../sass/BlogDetail/BlogDetail.scss";

const BlogDetail = () => {
  const blogName = useParams().blogName;

  return (
    <Row  className="blog-detail-container">
      <Col xl={16} md={24}>
        <BlogSingle blog={exampleBlog} comments={exampleComment} />
      </Col>
      <Col xl={8} md={12} sm={24}>
        <BlogSideCardList blogList={blogList} name="Các bài viết liên quan"/>
      </Col>
    </Row>


  );
};

export default BlogDetail;



const exampleComment = [
  {
    id: 1,
    content: "lorem ipsum dolor sit amet",
    author: {
      id: 1,
      name: "holi duch",
      avatar: { url: "https://via.placeholder.com/150/24f355" },
    },
  },
];
const exampleBlog = {
  id: 1,
  title: "Các dòng chó Phốc Sóc lai cực đáng yêu và thu hút",
  like: 12,
  share: 3,
  date: new Date(),
  description:
    "Giống chó Phốc Sóc thuần chủng, hay còn gọi là chó Pom được biết đến với tính cách lanh lợi và thông minh bậc nhất, chẳng những vậy chúng còn mang vẻ bề ngoài vô cùng đáng yêu và xinh đẹp. Nhưng thực chất vẫn còn rất nhiều những chú chó Phốc Sóc có vẻ ngoài đẹp mắt và tính cách đặc biệt hơn nữa nhờ vào phương pháp lai giống, chúng ta sẽ cùng điểm qua những giống chó Phốc Sóc lai trong bài viết dưới đây.",
  category: "Cẩm nang nuôi thú cưng",
  author: "john smith",
  image: {
    url: "https://via.placeholder.com/600/92c952",
    title: "abc",
  },
  content:"&lt;h2&gt;Tạp chí thú cưng giới thiệu những giống chó Phốc Sóc lai đẹp mắt và thu hút nhất 2018&lt;/h2&gt;\n&lt;p&gt;&lt;span&gt;Người ta đã thử lai tạo giống chó Pom với các giống chó đặc biệt khác và ta thu được những kết quả tuyệt vời như sau :&amp;nbsp;&lt;/span&gt;&lt;/p&gt;\n&lt;h3&gt;&lt;span&gt;1. Chó phốc sóc lai Nhật.&lt;/span&gt;&lt;/h3&gt;\n&lt;h3&gt;&lt;img alt=&quot;chó-phốc-sóc-lai-nhật&quot; src=&quot;https://tapchithucung.vn/Uploads/images/cho-phoc-soc-lai-nhat.jpg&quot;&gt;&lt;/h3&gt;\n&lt;p&gt;&lt;br&gt;Đây là giống chó Pom lai xuất hiện rất nhiều ở nước ta, với lớp lông ngắn hơn, mượt hơn, dáng thon và dài hơn chó Phốc Sóc thuần chủng.&lt;/p&gt;\n&lt;p&gt;&lt;span&gt;&amp;nbsp;Giống chó Pom lai này tương đối bướng bỉnh nhưng lại cực kì dũng cảm và gan lì, chúng luôn sẵn sàng bảo vệ lãnh thổ và cảnh báo nếu có đối tượng xâm nhập. Chó Phốc Sóc lai nhật giống một chú lính tí hon nhưng mang trong mình tâm hồn của một chiến binh luôn sẵn sàng chiến đấu để bảo vệ lãnh thổ cũng như bảo vệ chủ nhân của mình.&lt;/span&gt;&lt;/p&gt;\n&lt;p&gt;&lt;span&gt;Chó Phốc Sóc lai nhật hiện nay chỉ có giá trung bình từ 2 – 4 triệu đồng, phù hợp với nhiều tầng lớp khách hàng ở Việt Nam hiện nay, đặc biệt là sinh viên và dân lao động.&lt;/span&gt;&lt;/p&gt;\n&lt;h3&gt;&lt;span&gt;2. Chó Phốc Sóc lai Pug.&lt;/span&gt;&lt;/h3&gt;\n&lt;h3&gt;&lt;img alt=&quot;chó-phốc-sóc-lai-pug&quot; src=&quot;https://tapchithucung.vn/Uploads/images/giong-cho-phoc-soc-lai-pug(1).jpg&quot;&gt; &lt;/h3&gt;\n&lt;p&gt;Người ta còn dùng tên Pom-A-Pug để gọi dòng chó Phốc Sóc lai này. Những chú chó Pug vốn dĩ đã rất thú vị và rất đáng yêu, luôn là lựa chọn hàng đầu cho những giá đình tại nước ngoài và tại cả Việt Nam. Chó Phốc Sóc khi lai với giống Pug đã thừa hưởng được điều này và trở thành một giống chó cực đặc biệt. Với vóc dáng và khuôn mặt của một chú chó Pug nhưng lông lại dày và dài hơn, với tính cách can đảm không đổi nhưng Chó Phốc Sóc lai Pug lại kèm theo được sự vui nhộn và thoải mái vốn có&lt;br&gt;&lt;/p&gt;\n&lt;p&gt;&lt;span&gt;Chó Phốc Sóc khi lai với giống Pug đã thừa hưởng được điều này và trở thành một giống chó cực đặc biệt. Với vóc dáng và khuôn mặt của một chú chó Pug nhưng lông lại dày và dài hơn, với tính cách can đảm không đổi nhưng Chó Phốc Sóc lai Pug lại kèm theo được sự vui nhộn và thoải mái vốn có.&lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;&lt;span&gt;3. Chó Phốc Sóc lai Beagle.&lt;/span&gt;&lt;/h3&gt;\n&lt;h3&gt;&lt;img alt=&quot;chó-phốc-sóc-lai-beagle&quot; src=&quot;https://tapchithucung.vn/Uploads/images/giong-cho-phoc-soc-lai-beagle.jpg&quot;&gt;&lt;/h3&gt;\n&lt;p&gt;Đối với những người vừa yêu chó Phốc Sóc và chó Beagle thì đây là kết quả của một quá trình lai tạo tuyệt vời. Vì vốn dĩ Beagle có thính giác thuộc hàng cực tốt, thân thiện, trung thành, biết giữ trẻ và được dùng để săn thỏ, khi lựa chọn lai với chó Pom thì điều này đồng nghĩa với việc bạn sẽ sở hữu một giống chó lanh lợi và thông minh bậc nhất, dũng cảm và siêu thân thiện.&lt;/p&gt;\n&lt;h3&gt;&lt;span&gt;4. Chó Phốc Sóc lai Poodle&lt;/span&gt;&lt;/h3&gt;\n&lt;h3&gt;&lt;img alt=&quot;chó-phốc-sóc-lai-poodle&quot; src=&quot;https://tapchithucung.vn/Uploads/images/cho-phoc-soc-lai-poodle(1).jpg&quot;&gt;&lt;/h3&gt;\n&lt;p&gt;&lt;span&gt;Poodle đã trở thành một hiện tượng và được săn đón rất nhiều ở Việt Nam, chúng có khả năng săn các động vật dưới nước, săn vịt và bơi lội cực giỏi, ít bị lạnh và tổn thương. Chó Phốc Sóc lai Poodle còn có tên gọi khác là Pom-a-poo và có lợi thế hơn những giống chó Phốc Sóc lai khác về mặt sức khỏe.&lt;/span&gt;&lt;/p&gt;\n&lt;p&gt;&lt;span&gt;Tuy khỏe khoắn nhưng chúng lại có tần suất hoạt động ít hơn, dựa vào tính cách này mà nó sẽ phù hợp với những người chủ nhân nhất định&lt;/span&gt;&lt;/p&gt;\n&lt;h3&gt;&lt;span&gt;5. Chó Phốc Sóc lai Yorkshire Terrier&lt;/span&gt;&lt;/h3&gt;\n&lt;h3&gt;&lt;img alt=&quot;chó-phốc-sóc-lai&quot; src=&quot;https://tapchithucung.vn/Uploads/images/cho-phoc-soc-lai.jpg&quot;&gt;&lt;/h3&gt;\n&lt;p&gt;&lt;span&gt;Ít xuất hiện ở Việt Nam nhưng giống chó Phốc Sóc lai này không phải là không được biết đến nhiều. Chúng là một trong những giống chó Phốc Sóc lai sở hữu nhiều đặc tính tốt nhất. Sự vui tươi, thân thiện đã tạo nên tiếng tăm cho chúng.&lt;br&gt;Các chủ sở hữu là nữ giới và trẻ em cực yêu thích giống này vì chúng là giống nhỏ bé nhất nhưng lại sống vô cùng tình cảm và cư xử ngọt ngào với chủ nhân. Chó Phốc Sóc lai Yorkshire Terrier cũng ít gặp phải các vấn đề về tâm lý hơn, chúng lạc quan và rất ổn định.&lt;/span&gt;&lt;/p&gt;",
};
