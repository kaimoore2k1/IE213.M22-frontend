import BlogCard, { blogCard } from "../BlogCard/BlogCard";
import BlogSideCardList from "../BlogSideCardList/BlogSideCardList";
import { Row, Col, Pagination } from "antd";
import { useState, useEffect } from "react";
import "./BlogCategory.scss";

interface blogCategoryProps {
  blogList: blogCard[];
  categoryList: string[];
}

const BlogCategory = ({ blogList, categoryList }: blogCategoryProps) => {
  const blogPerPage = 8;

  const [page, setPage] = useState<number>(0);
  const [currentCategory, setCurrentCategory] = useState<string>(
    categoryList[0]
  );
  const [blogRenderList, setBlogRenderList] = useState<blogCard[]>(blogList);
  const [featuredBlog, setFeaturedBlog] = useState<blogCard[]>(
    blogList.sort((blog) => blog.likeCount).slice(0, 3)
  );

  const [recentBlog, setRecentBlog] = useState<blogCard[]>(
    window.localStorage.getItem("recentBlog")
      ? JSON.parse(window.localStorage.getItem("recentBlog") as string)
      : []
  );

  return (
    <div className="blog-category-list">
      <div className="blog-category-header">
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
      </div>
      <div className="blog-category-body">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <BlogSideCardList
              name="Bài viết nổi bật nhất"
              blogList={featuredBlog}
            />
            {recentBlog.length > 0 && (
              <BlogSideCardList name="Bài viết gần đây" blogList={recentBlog} />
            )}
          </Col>
          <Col span={16} className="blog-card-container">
            <Row gutter={[16, 16]}>
              {blogList
                .filter((blog) => blog.category === currentCategory)
                .slice(page * blogPerPage, (page + 1) * blogPerPage )
                .map((blog) => (
                  <Col key={blog.id}  span="12" className="blog-card-wraper">
                    <BlogCard blog={blog} type="large" />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <div className="blog-category-footer">
          <Pagination
            total={
              blogList.filter((blog) => blog.category === currentCategory)
                .length
            }
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            onChange={(page) => setPage(page - 1)}
            defaultPageSize={blogPerPage}
            defaultCurrent={page + 1}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
