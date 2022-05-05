import BlogCategory  from "./components/BlogCategory";
import { blogList } from "./data";
const Blog = () => {
  return (
      <BlogCategory
        blogList={blogList}
        categoryList={["pet blog", "dasdadasd", "awajkxv "]}
      />
  );
};

export default Blog;
