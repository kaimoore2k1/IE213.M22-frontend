import BlogCard, { blogCard } from "./BlogCard";
import BlogSideCardList from "./BlogSideCardList";
import { Row, Col, Pagination } from "antd";
import { useState } from "react";
import "../../../sass/Blog/BlogCategory.scss";

interface blogCategoryProps {
  blogList: blogCard[];
  categoryList: string[];
}

const BlogCategory = ({ blogList, categoryList }: blogCategoryProps) => {
  const blogPerPage = 8;

  const [page, setPage] = useState<number>(0);
  // const [currentCategory, setCurrentCategory] = useState<string>(
  //   categoryList[0]
  // );
  // const [blogRenderList, setBlogRenderList] = useState<blogCard[]>(blogList);
  const featuredBlog = blogList.slice(0, 3);
  // .sort((blogA,blogB) =>  {console.log(blogA.like);
  //  return blogB.like.length-blogA.like.length})
    


  // const [recentBlog, setRecentBlog] = useState<blogCard[]>(
  //   window.localStorage.getItem("recentBlog")??[]

  // );

  return (
    <div className="blog-category-list">
      {/* <div className="blog-category-header">
        <ul className="category-list">
          {categoryList.map((category, index) => (
            <li
              key={index}
              className={`category-item ${
                category === currentCategory ? "active" : ""
              }`}
              onClick={() => setCurrentCategory(categoryList[index])}
            >
              {category}
            </li>
          ))}
        </ul>
      </div> */}
      <div className="blog-category-body">
        <Row gutter={[16, 16]}>
          <Col
            xl={{ span: 8, order: 0 }}
            lg={{ span: 8, order: 0 }}
            md={0}
            sm={{ span: 24, order: 3 }}
            xs={{ span: 24, order: 3 }}
          >
            <BlogSideCardList
              name="Bài viết nổi bật nhất"
              blogList={featuredBlog}
            />
            {/* {recentBlog.length > 0 && (
              <BlogSideCardList name="Bài viết gần đây" blogList={recentBlog} />
            )} */}
          </Col>
          <Col
            order={1}
            xl={16}
            lg={16}
            md={24}
            className="blog-card-container"
          >
            <Row gutter={[16, 16]}>
              {blogList.slice(page * blogPerPage, (page + 1) * blogPerPage )
                .map((blog, index) => (
                  <Col md={12} sm={24} key={index} className="blog-card-wraper">
                    <BlogCard blog={blog} type="large" />
                  </Col>
                
                // .filter((blog) => blog.categories === currentCategory)
                ))}
            </Row>
          </Col>
          <Col span={24} sm={{ order: 2 }} className="blog-category-pagination">
            <Pagination
              total={
                // .filter((blog) => blog.categories === currentCategory)
                blogList.length
              }
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              defaultPageSize={8}
              onChange={(page) => setPage(page - 1)}
              defaultCurrent={page + 1}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogCategory;
