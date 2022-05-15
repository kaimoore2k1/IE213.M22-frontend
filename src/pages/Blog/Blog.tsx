import { useQuery } from "@apollo/client";
import { getAllBlogs, getHotBlogs } from "../../graphql/schema/blog.graphql";
import BlogCategory from "./components/BlogCategory";
import { blogList } from "./data";
import Content404 from "../NotFound/Content404";
import Loader from "../../components/core/Loader";
const Blog = () => {
  const blogs = useQuery(getAllBlogs());
  return (
    <>
      {blogs.loading ? (
        <Loader />
      ) : (
        <>
          {blogs.error ? (
            <Content404 />
          ) : (
            <BlogCategory blogList={blogs.data.getAllBlogs} categoryList={[]} />
          )}
        </>
      )}
    </>
  );
};

export default Blog;
