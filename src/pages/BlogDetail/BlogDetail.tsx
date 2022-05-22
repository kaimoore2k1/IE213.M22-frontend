import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getBlogBySlug, getAllBlogs } from "../../graphql/schema/blog.graphql";
import BlogSingle from "./components/BlogSingle";
import BlogSideCardList from "../Blog/components/BlogSideCardList";
import Loader from "../../components/core/Loader";
// import {blogList} from "../Blog/data";
import "../../sass/BlogDetail/BlogDetail.scss";
// import { Helmet } from "react-helmet";

const BlogDetail = () => {
  const blogName = useParams().blogName ?? "";
  const blog = useQuery(getBlogBySlug(blogName));
  const blogs = useQuery(getAllBlogs());
  return (
    <Row className="blog-detail-container">
      <Col xl={16} md={24}>
        {blog.loading ? (
          <Loader />
        ) : blog.error ? (
          "error"
        ) : (
          <BlogSingle
            blog={blog.data.getBlogBySlug}
            comments={[]}
          />
        )}
      </Col>
      <Col xl={8} md={12} sm={24}>
        {blog.loading ? (
          <Loader />
        ) : blog.error ? (
          "error"
        ) : (
          <>
            {blogs.data?.getAllBlogs && (
              <BlogSideCardList
                blogList={blogs.data.getAllBlogs}
                name="Các bài viết nổi bật"
              />
            )}
          </>
        )}
      </Col>
    </Row>
  );
};

export default BlogDetail;

