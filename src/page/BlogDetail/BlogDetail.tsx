import Editor from "../../component/Jodit/Jodit";
import BlogPost from "../../component/BlogPost/BlogPost";
import { blogCard } from "../../component/BlogCard/BlogCard";
import { Col, Row } from "antd";
import { decode } from "html-entities";
import BlogSideCardList from "../../component/BlogSideCardList/BlogSideCardList";
import "./BlogDetail.scss";
const exampleSmallBlogCard = {
    title: "Cách để thú cưng sớm quen ngôi nhà mới abcd efgh",
    likeCount: 12,
    commentCount: 3,
    shareCount: 2,
    image: {
      url: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "hello world",
    },
    id: 1,
    author: "John Smith",
    date: new Date(),
  };
  const exampleLargeBlogCard = {
    title: "Cách để thú cưng sớm quen ngôi nhà mới abcd efgh",
    likeCount: 12,
    commentCount: 3,
    shareCount: 2,
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
    category: "pet blog",
    image: {
      url: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "hello world",
    },
    id: 1,
    author: "John Smith",
    date: new Date(),
  };
  
  const blogList = [
    { ...exampleLargeBlogCard, id: 1 },
    { ...exampleLargeBlogCard, id: 2 },
    { ...exampleLargeBlogCard, id: 3 },
    { ...exampleLargeBlogCard, id: 4 },
    { ...exampleLargeBlogCard, id: 5 },
    { ...exampleLargeBlogCard, id: 6 },
    { ...exampleLargeBlogCard, id: 7 },
    { ...exampleLargeBlogCard, id: 8 },
    { ...exampleLargeBlogCard, id: 9 },
    { ...exampleLargeBlogCard, id: 10 },
    { ...exampleLargeBlogCard, id: 11 },
  ];
interface BlogDetailProps {
    blog: blogCard;
}

const BlogDetail = () => {
  const exampleblog = {
    title: "hello world",
    likeCount: 12,
    comment: [
      {
        id: 1,
        user: {
          id: 1,
          name: "John Smith",
          avatar:
            "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        content:
          "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
        date: new Date(),
      },
      {
        id: 2,
        user: {
          id: 2,
          name: "John Smith",
          avatar:
            "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        content:
          "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
        date: new Date(),
      },
    ],
    shareCount: 12,
    description:
      "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
    category: "lorem",
    author: "john smith",
    date: new Date(),
    image: {
      url: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title:
        "lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip loremlorem ipsum dolor sit amet, consectetur adip lorem",
    },
    id: 1,
    content: decode(window.localStorage.getItem("blogContent")) ?? "<h1>Hello world</h1>",
  };
  return (
    <div className="blog-detail">
      <Editor />
      
      <Row>
          <Col span={16}>
            <BlogPost blog={exampleblog} />
          </Col>
          <Col span={8}>
            <BlogSideCardList name="bài viết liên quan" blogList={blogList} />
          </Col>
      </Row>
    </div>
  );
};

export default BlogDetail;
